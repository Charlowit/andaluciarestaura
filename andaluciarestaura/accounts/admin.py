from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import User


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User
    list_display = ('cif','email','username','razon_social','marca_comercial', 'nombre_fiscal', 'tipo_negocio', 'tipo_via', 'direccion_fiscal', 'localidad', 'codigo_postal', 'telefono_1', 'telefono_2', 'fax', 'iban', 'image', 'qr', 'is_staff', 'is_active',)
    list_filter = ('cif','email','username','razon_social','marca_comercial', 'nombre_fiscal', 'tipo_negocio', 'tipo_via', 'direccion_fiscal', 'localidad', 'codigo_postal', 'telefono_1', 'telefono_2', 'fax', 'iban', 'image', 'qr', 'is_staff', 'is_active',)
    fieldsets = (
        (None, {'fields': ('cif','email','username','razon_social','marca_comercial', 'nombre_fiscal', 'tipo_negocio', 'tipo_via', 'direccion_fiscal', 'localidad', 'codigo_postal', 'telefono_1', 'telefono_2', 'fax', 'iban', 'image', 'qr', 'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ( 'cif','password1', 'password2','email','username','razon_social','marca_comercial', 'nombre_fiscal', 'tipo_negocio', 'tipo_via', 'direccion_fiscal', 'localidad', 'codigo_postal', 'telefono_1', 'telefono_2', 'fax', 'iban', 'image', 'qr', 'is_staff', 'is_active')}
        ),
    )
    search_fields = ('cif',)
    ordering = ('cif',)

admin.site.register(User, CustomUserAdmin)
