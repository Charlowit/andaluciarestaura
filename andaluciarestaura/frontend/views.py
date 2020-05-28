from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader

def index(request):
    return render(request, 'frontend/index.html')
"""
def cartastatic(request):
    return render(request, 'frontend/cartastatic.html')
"""
def index_react(request):
    template = loader.get_template('frontend/index_react.html')
    context = {
        'cif_cliente': '25735686C',
    }
    return HttpResponse(template.render(context, request))
