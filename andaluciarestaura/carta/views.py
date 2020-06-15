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

def index(request,cif_cliente):
    #Traemos el usuario con los atributos que nos interesen.
    user = User.objects.filter(cif__exact=cif_cliente).values('fax','marca_comercial','is_premium')
    server_local = "http://127.0.0.1"
    #Transformamos el usuario a una lista
    user = list(user)
    #Se carga el template

    #Traemos la carta del usuario
    if (settings.IN_PRODUCTION):
        server_local = "https://www.andaluciarestaura.com"
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

    
    if len(cartas) > 0:

        carta = cartas[0]

        Carta.objects.filter(id=carta['id']).update(contador_visitas=F('contador_visitas') + 1)

        url_facebook = carta['url_facebook']            
        url_instagram = carta['url_instagram']
        url_tripadvisor = carta['url_tripadvisor']
        eslogan = carta['eslogan']
        plantilla = carta['plantilla']

        categorias = []
        categoriasRaw = consumir_api(server_local+"/api/damelascategorias/?carta=", carta['id'])
        categoriasRaw.sort(key=lambda k:k['posicion'])

        for categoria in categoriasRaw:
            categoriaID = str(categoria['id'])
            data = consumir_api(server_local+"/api/productact/?categoria=" + categoriaID)
            if len(data) > 0:
                for p in data:
                    productos.append(p)

         
    template = loader.get_template('../../frontend/templates/frontend/free2.html')

    if len(user) > 0:
        user = user[0]
        if user['is_premium']:
            template = loader.get_template('carta/premium.html')
        print(user)
    else:
        user = {}
    print("SERVER_LOCAL: " + server_local)
    context = {
        'cif_cliente': cif_cliente,
        'user': user,
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
    #FILTRAR EL NOMBRE DE LA CARTA
    #carta = Carta.objects.filter(cif__exact=cif_cliente)
    

    return HttpResponse(template.render(context, request))
