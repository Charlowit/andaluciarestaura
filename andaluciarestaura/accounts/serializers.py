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
            fields = ('cif', 'password')
            extra_kwargs = {'password': {'write_only':True} }

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)

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
