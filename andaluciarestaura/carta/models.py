from django.db import models
from django.conf import settings

# Create your models here.
TAMANIOS = (
    ('S','S'),
    ('M', 'M'),
    ('L','L'),
    ('XL','XL'),
    ('XXL','XXL'),
)

class Categorias(models.Model):
    name = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=100,default="producto",null=True)
    
    def __str__(self):
        return self.name

class Carta(models.Model):
    name = models.CharField(max_length=100, blank=False, default="cartanegocio")
    propietario = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.CASCADE, related_name="propietario")

    def __str__(self):
        return self.name


class Productos(models.Model):
        categoria = models.ForeignKey(Categorias, on_delete=models.CASCADE, related_name="categoria", null=False)
        name = models.CharField(max_length=100, default="producto")
        descripcion = models.CharField(max_length=100)
        tamanio = models.CharField(max_length=3, choices=TAMANIOS, default='S')
        precio1 = models.IntegerField(default="0")
        precio2 = models.IntegerField(default="0")
        precio3 = models.IntegerField(default="0")
        carta = models.ForeignKey(Carta, null=True, on_delete=models.CASCADE, related_name="productos")

        def __str__(self):
            return self.name

