from django.db import models
from django.contrib.auth.models import AbstractBaseUser 
# Create your models here.

class Negocio(AbstractUser):
    cif = models.CharField(max_length=100)
    razon_social = models.CharField(max_length=100)
    marca_comercial = models.CharField(max_length=100)
    nombre_fiscal = models.CharField(max_length=100)
    tipo_negocio = models.CharField(max_length=100)
    tipo_via = models.CharField(max_length=100)
    direccion_fiscal = models.CharField(max_length=100)
    localidad = models.CharField(max_length=100)
    codigo_postal = models.IntegerField()
    correo_electronico = models.EmailField(max_length=100)
    telefono_1 = models.IntegerField()
    telefono_2 = models.IntegerField()
    fax = models.CharField(max_length=100)
    iban = models.CharField(max_length=100)
    creado_en = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return " {}".format(self.cif)