from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
# Create your views here.
def react(response,cif):
    return HttpResponse("You're looking at question %s." % cif)

def index(request,id_carta):
    template = loader.get_template('carta/test.html')
    context = {
        'id_carta': id_carta,
    }
    return HttpResponse(template.render(context, request))