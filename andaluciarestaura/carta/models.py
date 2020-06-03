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
    #contador_visitas = models.IntegerField(default=0)

    def __str__(self):
        return self.name


class Productos(models.Model):
        categoria = models.ForeignKey(Categorias, on_delete=models.CASCADE, related_name="categoria", null=False)
        name = models.CharField(max_length=100, default="producto")
        descripcion= models.CharField(max_length=100)
        tamanio = models.CharField(max_length=3, choices=TAMANIOS, default='S')
        precio1 = models.IntegerField(default="0")
        precio2 = models.IntegerField(default="0")
        precio3 = models.IntegerField(default="0")
        is_apio = models.BooleanField(default=False)
        is_altramuces = models.BooleanField(default=False)
        is_cacahuete = models.BooleanField(default=False)
        is_crustaceo = models.BooleanField(default=False)
        is_frutos_con_cascara = models.BooleanField(default=False)
        is_gluten = models.BooleanField(default=False)
        is_huevo = models.BooleanField(default=False)
        is_lacteo = models.BooleanField(default=False)
        is_molusco = models.BooleanField(default=False)
        is_mostaza = models.BooleanField(default=False)
        is_pescado = models.BooleanField(default=False)
        is_sesamo = models.BooleanField(default=False)
        is_soja = models.BooleanField(default=False)
        carta = models.ForeignKey(Carta, null=True, on_delete=models.CASCADE, related_name="productos")

        def __str__(self):
            return self.name

