from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from accounts.models import User
#import logging, requests

#logger = logging.getLogger(__name__)

def consumir_api(url, params={}):
    response = requests.get(url, params=params)

    if response.status_code == 200:
        return response.json()

# Create your views here.
def react(response,cif):
    return HttpResponse("You're looking at question %s." % cif)

def index(request,cif_cliente):
    user = User.objects.filter(cif__exact=cif_cliente)
    template = loader.get_template('carta/free.html')
    #http://127.0.0.1:8000/api/carta/?cif=11111111C
    #resultado = consumir_api("http://127.0.0.1:8000/api/carta/?cif=" + cif_cliente)
    #logger.error('ANTES DEL SAVE:')
    #logger.error(resultado)
    context = {
        'cif_cliente': cif_cliente,
        #'tipo': resultado,
    }
    return HttpResponse(template.render(context, request))
