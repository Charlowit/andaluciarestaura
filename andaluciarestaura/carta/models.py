from django.db import models
from django.conf import settings

# Create your models here.
TAMANIOS = (
    ('Tapa','Tapa'),
    ('Media racion', 'Media racion'),
    ('Racion', 'Racion'),
    ('Plato', 'Plato'),
    ('Bandeja', 'Bandeja'),
    ('Tamanio Unico', 'Tamanio Unico'),
    ('S','S'),
    ('M', 'M'),
    ('L','L'),
    ('XL','XL'),
    ('XXL','XXL'),
    ('', '')
)


class Carta(models.Model):
    name = models.CharField(max_length=100, blank=False, default="cartanegocio")
    propietario = models.ForeignKey(settings.AUTH_USER_MODEL, null=False, on_delete=models.CASCADE, related_name="propietario")

    url_facebook = models.CharField(max_length=50, default='-', null=True)
    url_instagram = models.CharField(max_length=50, default='-', null=True)
    url_tripadvisor = models.CharField(max_length=50, default='-', null=True)
    eslogan = models.CharField(max_length=50, default='-', null=True)
    plantilla = models.CharField(max_length=50, default='-', null=True)
    
    contador_visitas = models.IntegerField(default=0)
    directorio = models.CharField(max_length=1000)
    is_activa = models.BooleanField(default=True)
    show_as_pdf = models.BooleanField(default=False)

    establecimiento = models.CharField(max_length=100, null=True)

    def __str__(self):
        return self.name


class Categorias(models.Model):
    name = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=100,default="producto",null=True)
    posicion = models.IntegerField(default="-1")
    carta = models.ForeignKey(Carta, null=False, on_delete=models.CASCADE)
    info_extra = models.CharField(max_length=100,default="-")
    
    def __str__(self):
        return self.name


class Productos(models.Model):
        categoria = models.ForeignKey(Categorias, on_delete=models.CASCADE, related_name="categoria", null=False)
        name = models.CharField(max_length=100, default="producto")
        descripcion= models.CharField(max_length=1000)
        titulo_precio1 = models.CharField(max_length=13, choices=TAMANIOS, default='')
        titulo_precio2 = models.CharField(max_length=13, choices=TAMANIOS, default='', null=True)
        titulo_precio3 = models.CharField(max_length=13, choices=TAMANIOS, default='', null=True)
        precio1 = models.FloatField(default="0.0")
        precio2 = models.FloatField(default="0.0", null=True)
        precio3 = models.FloatField(default="0.0", null=True)
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
        is_sulfito = models.BooleanField(default=False)
        carta = models.ForeignKey(Carta, null=True, on_delete=models.CASCADE, related_name="productos")
        photo = models.CharField(max_length=200, null=True)

        def __str__(self):
            return self.name

