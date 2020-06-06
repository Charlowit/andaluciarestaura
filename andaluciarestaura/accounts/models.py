from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import PermissionsMixin
from django.utils.translation import gettext_lazy as _
from django.utils import timezone


from .managers import CustomUserManager

TIPOS_NEGOCIO = (
    ('Bar','Bar'),
    ('Restaurante', 'Restaurante'),
    ('Hotel','Hotel'),
    ('Discoteca','Discoteca'),
    ('Cafeteria','Cafeteria'),
    ('Catering','Catering'),
    ('Churreria','Churreria'),
    ('Pub','Pub'),
    ('Cerveceria','Cerveceria'),
    ('Heladeria','Heladeria'),
    ('Otros', 'Otros'),
)
RAZON_SOCIAL = (
    ('SL','SL'),
    ('SA', 'SA'),
    ('Autonomo','Autonomo'),
    ('SCOOP', 'SCOOP'),
    ('Otros', 'Otros'),
)
class User(AbstractUser, PermissionsMixin):
    username = models.CharField(max_length=100, blank=True, null=True, default="hotehubclient")
    cif = models.CharField(max_length=100, unique=True)
    razon_social = models.CharField(max_length=100, choices=RAZON_SOCIAL, default="SL")
    marca_comercial = models.CharField(max_length=100)
    nombre_fiscal = models.CharField(max_length=100)
    tipo_negocio = models.CharField(max_length=100, choices=TIPOS_NEGOCIO, default="Bar")
    tipo_via = models.CharField(max_length=100)
    direccion_fiscal = models.CharField(max_length=100)
    localidad = models.CharField(max_length=100)
    provincia = models.CharField(max_length=100)
    codigo_postal = models.CharField(max_length=100)
    telefono_1 = models.CharField(max_length=100)
    telefono_2 = models.CharField(max_length=100)
    fax = models.CharField(max_length=100)
    iban = models.CharField(max_length=100)
    logo = models.CharField(max_length=1000)
    pdf = models.CharField(max_length=1000)
    qr = models.CharField(max_length=1000)
    creado_en = models.DateTimeField(auto_now_add=True)
    email = models.EmailField(_('email address'))
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_premium = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)
    is_premium = models.BooleanField(default=False)

    USERNAME_FIELD = 'cif'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()
