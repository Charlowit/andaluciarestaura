from django.shortcuts import render

def index(request):
    return render(request, 'frontend/index.html')
def cordoba(request):
    return render(request, 'frontend/cordoba.html')
"""
def cartastatic(request):
    return render(request, 'frontend/cartastatic.html')
"""
