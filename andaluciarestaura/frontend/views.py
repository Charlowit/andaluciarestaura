from django.shortcuts import render

def index(request):
    return render(request, 'frontend/index.html')
"""
def cartastatic(request):
    return render(request, 'frontend/cartastatic.html')
"""
