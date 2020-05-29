from rest_framework import serializers
from accounts.models import User
from django.contrib.auth import authenticate
import logging

logger = logging.getLogger(__name__)

#User serializer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


# Registro User Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
            model = User
            fields = ('id', 'cif', 'password', 'marca_comercial', 'telefono_1', 'email')
            extra_kwargs = {'password': {'write_only':True} }

    def create(self, validated_data):
        logger.error(validated_data)
        user = User.objects.create_user(validated_data['cif'], validated_data['password'], validated_data['marca_comercial'], validated_data['telefono_1'], validated_data['email'])
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

