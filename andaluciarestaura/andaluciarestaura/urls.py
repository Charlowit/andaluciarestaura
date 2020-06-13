"""andaluciarestaura URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from carta import views as v

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    path('', include('carta.urls')),
    path('', include('accounts.urls')),
    path("cartaestatica/<str:cif_cliente>", v.index_gratis, name="cartaestatica"),
    path("cartaestatica/<str:cif_cliente>/<str:carta_id>", v.index_pago, name="cartaestatica"),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
