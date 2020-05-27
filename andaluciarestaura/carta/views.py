from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
# Create your views here.
def react(response,cif):
    return HttpResponse("You're looking at question %s." % cif)

def index(request,cif_cliente):
    template = loader.get_template('carta/test.html')
    context = {
        'cif_cliente': cif_cliente,
    }
    return HttpResponse(template.render(context, request))
