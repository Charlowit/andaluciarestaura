from .models import Carta, Productos, Categorias
from rest_framework import serializers
from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import ugettext_lazy as _
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


#PRODUCTO SERIALIZER ACTUALIZAR
class ProductoSerializerActualizar(serializers.ModelSerializer):
    class Meta:
        model = Productos
        fields = '__all__'
        #fields = ('categoria','name','descripcion','tamanio','precio1','precio2','precio3', 'is_apio', 'is_altramuces', 'is_cacahuete', 'is_crustaceo', 'is_frutos_con_cascara', 'is_gluten', 'is_huevo', 'is_lacteo', 'is_molusco', 'is_mostaza', 'is_pescado', 'is_sesamo', 'is_soja', 'carta')
    
    #def create(self, validated_data):
        #producto = Productos.objects.create(validated_data['categoria'], validated_data['name'], validated_data['descripcion'], validated_data['tamanio'], validated_data['precio1'] ,validated_data['precio2'], validated_data['precio3'], validated_data['is_apio'], validated_data['is_altramuces'], validated_data['is_cacahuete'], validated_data['is_crustaceo'], validated_data['is_frutos_con_cascara'], validated_data['is_gluten'], validated_data['is_huevo'], validated_data['is_lacteo'] ,validated_data['is_molusco'], validated_data['is_mostaza'], validated_data['is_pescado'], validated_data['is_sesamo'], validated_data['is_soja'], validated_data['carta'])
        #return producto


#PRODUCTO SERIALIZER ACTUALIZAR
class CategoriasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorias
        fields = '__all__'


class CartaSerializerActualizar(serializers.ModelSerializer):
    class Meta:
        model = Carta
        fields = '__all__'


