from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import PermissionsMixin
from django.utils.translation import gettext_lazy as _
from django.utils import timezone

from .managers import CustomUserManager

class User(AbstractUser, PermissionsMixin):
    username = models.CharField(max_length=100, blank=True, null=True, default="hotehubclient")
    cif = models.CharField(max_length=100, unique=True, default="00000000A")
    razon_social = models.CharField(max_length=100)
    marca_comercial = models.CharField(max_length=100)
    nombre_fiscal = models.CharField(max_length=100)
    tipo_negocio = models.CharField(max_length=100)
    tipo_via = models.CharField(max_length=100)
    direccion_fiscal = models.CharField(max_length=100)
    localidad = models.CharField(max_length=100)
    provincia = models.CharField(max_length=100, default="Granada")
    codigo_postal = models.CharField(max_length=100)
    telefono_1 = models.CharField(max_length=100)
    telefono_2 = models.CharField(max_length=100)
    fax = models.CharField(max_length=100)
    iban = models.CharField(max_length=100)
    image = models.ImageField(upload_to='frontend/static/frontend', default="")
    qr = models.ImageField(upload_to='qruser/', default="")
    creado_en = models.DateTimeField(auto_now_add=True)
    email = models.EmailField(_('email address'), default="")
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)

    USERNAME_FIELD = 'cif'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()
