from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from accounts.models import User
import requests

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
    user = User.objects.filter(cif__exact=cif_cliente).values('username','marca_comercial')
    #Transformamos el usuario a una lista
    user = list(user)
    #Se carga el template
    template = loader.get_template('carta/free.html')
    #Traemos la carta del usuario
    api_to_json = consumir_api("http://127.0.0.1:8000/api/carta/?cif=" + cif_cliente)
    data = {}
    #Si hay carta guardamos los datos
    if len(api_to_json) > 0:
        data = api_to_json[0]
    #Si existe ese usuario lo guardamos
    if len(user) > 0:
        user = user[0]
    else:
        user = {}
    context = {
        'cif_cliente': cif_cliente,
        'data': data,
        'user': user,
    }
    return HttpResponse(template.render(context, request))
