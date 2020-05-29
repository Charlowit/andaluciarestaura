from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import User


class CustomUserCreationForm(UserCreationForm):

    class Meta(UserCreationForm):
        model = User
        fields = ('cif','email','username','razon_social','marca_comercial', 'nombre_fiscal', 'tipo_negocio', 'tipo_via', 'direccion_fiscal', 'localidad', 'codigo_postal', 'provincia', 'telefono_1', 'telefono_2', 'fax', 'iban', 'logo', 'pdf', 'qr')


class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = User
        fields = ('cif','email','username','razon_social','marca_comercial', 'nombre_fiscal', 'tipo_negocio', 'tipo_via', 'direccion_fiscal', 'localidad', 'codigo_postal', 'provincia', 'telefono_1', 'telefono_2', 'fax', 'iban', 'logo', 'pdf', 'qr')
