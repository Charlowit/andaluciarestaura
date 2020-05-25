from django.contrib import admin
from .models import Carta, Productos, Categorias
# Register your models here.
admin.site.register(Categorias)
admin.site.register(Productos)
admin.site.register(Carta)


