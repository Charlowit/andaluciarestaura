from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import User


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User
    list_display = ('cif','email','username','razon_social','marca_comercial', 'nombre_fiscal', 'tipo_negocio', 'tipo_via', 'direccion_fiscal', 'localidad', 'codigo_postal', 'provincia', 'telefono_1', 'telefono_2', 'fax', 'iban', 'image', 'pdf', 'qr', 'is_staff', 'is_active','is_premium')
    list_filter = ('cif','email','username','razon_social','marca_comercial', 'nombre_fiscal', 'tipo_negocio', 'tipo_via', 'direccion_fiscal', 'localidad', 'codigo_postal', 'provincia', 'telefono_1', 'telefono_2', 'fax', 'iban', 'image', 'pdf', 'qr', 'is_staff', 'is_active','is_premium')
    fieldsets = (
        (None, {'fields': ('cif','email','username','razon_social','marca_comercial', 'nombre_fiscal', 'tipo_negocio', 'tipo_via', 'direccion_fiscal', 'localidad', 'codigo_postal', 'provincia', 'telefono_1', 'telefono_2', 'fax', 'iban', 'image', 'pdf', 'qr', 'password','is_premium')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ( 'cif','password1', 'password2','email','username','razon_social','marca_comercial', 'nombre_fiscal', 'tipo_negocio', 'tipo_via', 'direccion_fiscal', 'localidad', 'codigo_postal', 'provincia', 'telefono_1', 'telefono_2', 'fax', 'iban', 'image', 'pdf', 'qr', 'is_staff', 'is_active','is_premium')}
        ),
    )
    search_fields = ('cif',)
    ordering = ('cif',)

admin.site.register(User, CustomUserAdmin)
