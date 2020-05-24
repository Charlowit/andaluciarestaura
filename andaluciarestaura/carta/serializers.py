from .models import Carta
from rest_framework import serializers

#Carta serializer

class CartaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carta
        fields = '__all__'
