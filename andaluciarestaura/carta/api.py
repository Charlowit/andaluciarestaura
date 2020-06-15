from .serializers import CartaSerializer, ProductosSerializer, ProductoSerializerActualizar, CategoriasSerializer, CartaSerializerActualizar
from rest_framework import viewsets, permissions, generics
from .models import Carta, Productos, Categorias
from rest_framework.parsers import MultiPartParser, FormParser

#Carta Viewset

class CartaViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CartaSerializer
    def get_queryset(self):
        #Enable all cartas with True or False
        all_enable = False
        cartaID = self.request.query_params.get('carta', None)
        cif = self.request.query_params.get('cif', None)
        queryset = {}
        if cartaID is not None:
            if cif is not None:
                #http://127.0.0.1:8000/api/carta/?carta=1&cif=11111111C
                queryset = Carta.objects.filter(id__exact=cartaID,propietario__cif__exact=cif)
            else:
                #http://127.0.0.1:8000/api/carta/?carta=1
                queryset = Carta.objects.filter(id__exact=cartaID)
        elif cif is not None:
            #http://127.0.0.1:8000/api/carta/?cif=11111111C
            queryset = Carta.objects.filter(propietario__cif__exact=cif)
        else:
            if all_enable is not False:
                queryset = Carta.objects.all()
        return queryset

class ProductosViewSet(viewsets.ModelViewSet):
    serializer_class = ProductosSerializer
class CartaAuthViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = CartaSerializer
    def get_queryset(self):
        #Enable all cartas with True or False
        all_enable = False
        cartaID = self.request.query_params.get('carta', None)
        cif = self.request.query_params.get('cif', None)    
        queryset = {}
        if cartaID is not None:
            if cif is not None:
                #http://127.0.0.1:8000/api/carta/?carta=1&cif=11111111C
                queryset = Carta.objects.filter(id__exact=cartaID,propietario__cif__exact=cif)
            else:
                #http://127.0.0.1:8000/api/carta/?carta=1
                queryset = Carta.objects.filter(id__exact=cartaID)
        elif cif is not None:
            #http://127.0.0.1:8000/api/carta/?carta=1&cif=11111111C
            queryset = Carta.objects.filter(propietario__cif__exact=cif)
        else:
            if all_enable is not False:
                queryset = Carta.objects.all()
        return queryset


class CartasApi(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = CartaSerializerActualizar

    def get_queryset(self):
        cif = self.request.query_params.get('cif', None)
        return Carta.objects.filter(propietario__cif__exact=cif)


class CategoriasApi(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = CategoriasSerializer

    def get_queryset(self):
        cartaID = self.request.query_params.get('carta', None)
        return Categorias.objects.all()



class ProductosApi(viewsets.ModelViewSet):
    
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductoSerializerActualizar
    #parser_classes = (MultiPartParser, FormParser)

    def get_queryset(self):
        categoriaID = self.request.query_params.get('categoria', None)
        queryset = Productos.objects.filter(categoria=categoriaID)    
        return queryset
