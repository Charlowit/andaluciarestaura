from .models import Carta, Productos, Categorias
from rest_framework import serializers
#Carta serializer

class ProductosSerializer(serializers.HyperlinkedModelSerializer):
    carta_id = serializers.PrimaryKeyRelatedField(queryset=Carta.objects.all(),source='carta.id')
    category_name = serializers.CharField(source='categoria.name')
    class Meta:
        model = Productos
        fields = ('carta_id','name','descripcion','id','tamanio','precio1','precio2','precio3','category_name', 'is_apio', 'is_altramuces', 'is_cacahuete', 'is_crustaceo', 'is_frutos_con_cascara', 'is_gluten', 'is_huevo', 'is_lacteo', 'is_molusco', 'is_mostaza', 'is_pescado', 'is_sesamo', 'is_soja')
    def create(self, validated_data):
        subject = Productos.objects.create(carta=validated_data['carta']['id'], child_name=validated_data['name'])
        return subject


class CartaSerializer(serializers.HyperlinkedModelSerializer):
    productos = ProductosSerializer(many=True, read_only=True)
    propietario = serializers.CharField(source='propietario.cif')
    class Meta:
        model = Carta
        fields = ('id','name','propietario','productos')
