from rest_framework import serializers
from accounts.models import User
from django.contrib.auth import authenticate

#User serializer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


# Registro User Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
            model = User
            fields = ('id', 'cif', 'password', 'provincia', 'localidad', 'razon_social', 'marca_comercial', 'telefono_1', 'tipo_negocio', 'tipo_via', 'email', 'pdf' )
            extra_kwargs = {'password': {'write_only':True} }

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['cif'], validated_data['password'], validated_data['provincia'], validated_data['localidad'], validated_data['razon_social'], validated_data['marca_comercial'], validated_data['telefono_1'], validated_data['tipo_negocio'], validated_data['tipo_via'], validated_data['email'], validated_data['pdf'])
        return user

# Login Serializer

class LoginSerializer(serializers.Serializer):
    cif = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Credenciales incorrectas")

# FILE PDF SERIALIZER

class FilePDFSerializer(serializers.Serializer):
        cif = serializers.CharField()
        pdf = serializers.FileField()

