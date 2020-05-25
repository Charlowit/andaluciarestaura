from .models import Carta, Productos, Categorias
from rest_framework import serializers
#Carta serializer

"""class CategoriasSerializer(serializers.HyperlinkedModelSerializer):
    producto_id = serializers.PrimaryKeyRelatedField(queryset=Productos.objects.all(),source='productos.id')
    class Meta:
        model = Categorias
        fields = ('producto_id','name','id')
    def create(self, validated_data):
        subject = Categorias.objects.create(categorias=validated_data['productos']['id'], child_name=validated_data['id'])
        return subject
"""
class ProductosSerializer(serializers.HyperlinkedModelSerializer):
    carta_id = serializers.PrimaryKeyRelatedField(queryset=Carta.objects.all(),source='carta.id')
    #categoria = CategoriasSerializer(many=True, read_only=True)
    class Meta:
        model = Productos
        fields = ('carta_id','name','descripcion','id','tamanio','precio1','precio2')
    def create(self, validated_data):
        subject = Productos.objects.create(carta=validated_data['carta']['id'], child_name=validated_data['name'])
        return subject


class CartaSerializer(serializers.HyperlinkedModelSerializer):
    productos = ProductosSerializer(many=True, read_only=True)
    class Meta:
        model = Carta
        fields = ('id','name','productos')



