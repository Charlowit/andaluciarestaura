from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from accounts.models import User
import requests
from django.conf import settings
from .models import Carta

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

    api_to_json = consumir_api(server_local+"/api/carta/?cif=" + cif_cliente)

    data = {}
    categories = []
    #Si hay carta guardamos los datos
    if len(api_to_json) > 0:
        data = api_to_json[0]
        print(data['productos'])
        aux = {}
        for p in data['productos']:
            print(p['category_name'])
            if p['category_name'] not in categories:
                categories.append(p['category_name'])
        categories.sort()
    #Si existe ese usuario lo guardamos
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
        'data': data,
        'user': user,
        'categories': categories,
        'server': server_local,
    }
    #FILTRAR EL NOMBRE DE LA CARTA
    #carta = Carta.objects.filter(cif__exact=cif_cliente)

    return HttpResponse(template.render(context, request))
