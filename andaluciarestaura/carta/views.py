from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from accounts.models import User
import requests
from django.conf import settings
from .models import Carta
import operator
from django.db.models import F

#logger = logging.getLogger(__name__)

def consumir_api(url, params={}):
    response = requests.get(url, params=params)

    if response.status_code == 200:
        return response.json()

# Create your views here.
def react(response,cif):
    return HttpResponse("You're looking at question %s." % cif)

def index_gratis(request,cif_cliente):
    #Traemos el usuario con los atributos que nos interesen.
    user = User.objects.filter(cif__exact=cif_cliente).values('is_premium')
    server_local = "http://127.0.0.1"
    #Transformamos el usuario a una lista
    
    #Se carga el template
    print("Mira el username --> ", user)
    #Traemos la carta del usuario
    if (settings.IN_PRODUCTION):
        server_local = "https://127.0.0.1"
    else:
        server_local = "http://127.0.0.1:8000"

    cartas = consumir_api(server_local+"/api/getcartas/?cif=" + cif_cliente)
    carta = ""
    categoriasRaw = ""
    productos = []
    url_facebook = ""           
    url_instagram = ""
    url_tripadvisor = ""
    eslogan = ""
    plantilla = ""

    print("Mira el static files dirs ---> ", settings.STATICFILES_DIRS[0])
    print("BASE DIR ---> ", settings.BASE_DIR)

    
    if len(cartas) > 0:

        carta = cartas[0]
        
        Carta.objects.filter(id=carta['id']).update(contador_visitas=F('contador_visitas') + 1)

        url_facebook = carta['url_facebook']            
        url_instagram = carta['url_instagram']
        url_tripadvisor = carta['url_tripadvisor']
        eslogan = carta['eslogan']
        plantilla = carta['plantilla']

        categorias = []
        categoriasRaw = consumir_api(server_local+"/api/damelascategorias/?carta=" + str(carta['id']))
        categoriasRaw.sort(key=lambda k:k['posicion'])

        for categoria in categoriasRaw:
            categoriaID = str(categoria['id'])
            data = consumir_api(server_local+"/api/productact/?categoria=" + categoriaID)
            if len(data) > 0:
                for p in data:
                    productos.append(p)
        

    template = None

    if carta['is_activa']:

        if user[0]['is_premium']:
            template = loader.get_template('carta/premium.html')
        else:
            template = loader.get_template('../../frontend/templates/frontend/free2.html')
        print(productos)
        print(categoriasRaw)
        context = {
            'cif_cliente': cif_cliente,
            'categorias': categoriasRaw,
            'productos': productos,
            'server': server_local,
            'plantilla': plantilla,
            'url_facebook': url_facebook,
            'url_instagram': url_instagram,
            'url_tripadvisor': url_tripadvisor,
            'eslogan': eslogan,
            'carta': carta
        }
    else:
        template = loader.get_template('../../frontend/templates/frontend/cartanoactiva.html')
        context = {}
    #FILTRAR EL NOMBRE DE LA CARTA
    #carta = Carta.objects.filter(cif__exact=cif_cliente)
    return HttpResponse(template.render(context, request))


    


def index_pago(request,cif_cliente, carta_id):
    #Traemos el usuario con los atributos que nos interesen.
    user = User.objects.filter(cif__exact=cif_cliente).values('is_premium')
    server_local = "http://127.0.0.1"
    #Se carga el template

    #Traemos la carta del usuario
    if (settings.IN_PRODUCTION):
        server_local = "https://127.0.0.1"
    else:
        server_local = "http://127.0.0.1:8000"

    print("Que es la carta id --> ", carta_id)
    cartas = consumir_api(server_local+"/api/getcartas/?carta=" + carta_id)
    carta = cartas[0]
    categoriasRaw = ""
    productos = []
    url_facebook = ""           
    url_instagram = ""
    url_tripadvisor = ""
    eslogan = ""
    plantilla = ""
    categorias_vacias = []
    
        
        
    Carta.objects.filter(id=carta['id']).update(contador_visitas=F('contador_visitas') + 1)

    url_facebook = carta['url_facebook']            
    url_instagram = carta['url_instagram']
    url_tripadvisor = carta['url_tripadvisor']
    eslogan = carta['eslogan']
    plantilla = carta['plantilla']

    categorias = []
    categoriasRaw = consumir_api(server_local+"/api/damelascategorias/?carta=" + str(carta['id']))
    categoriasRaw.sort(key=lambda k:k['posicion'])

    for categoria in categoriasRaw:
        categoriaID = str(categoria['id'])
        data = consumir_api(server_local+"/api/productact/?categoria=" + categoriaID)
        if len(data) > 0:
            for p in data:
                productos.append(p)
        else:
            categorias_vacias.append(int(categoriaID))


    template = None

    if carta['is_activa']:

        if carta['show_as_pdf']:
            template = loader.get_template('../../frontend/templates/frontend/free2.html')
        else :
            template = loader.get_template('carta/premium.html')
        
        print("SERVER_LOCAL: " + server_local)
        #print(productos)
        #print(categoriasRaw)
        context = {
            'cif_cliente': cif_cliente,
            'categorias': categoriasRaw,
            'productos': productos,
            'server': server_local,
            'plantilla': plantilla,
            'url_facebook': url_facebook,
            'url_instagram': url_instagram,
            'url_tripadvisor': url_tripadvisor,
            'eslogan': eslogan,
            'carta': carta,
            'categorias_vacias': categorias_vacias
        }
    else:
        template = loader.get_template('../../frontend/templates/frontend/cartanoactiva.html')
        context = {}


    
    #FILTRAR EL NOMBRE DE LA CARTA
    #carta = Carta.objects.filter(cif__exact=cif_cliente)
    

    return HttpResponse(template.render(context, request))
