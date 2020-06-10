from .serializers import CartaSerializer, ProductosSerializer, ProductoSerializerActualizar, CategoriasSerializer, CartaSerializerActualizar
from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from .models import Carta, Productos, Categorias
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.decorators import action
from rest_framework import status
from accounts.models import User



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
        cartaID = self.request.query_params.get('carta', None)
        response = ""

        if cif is not None:
            response = Carta.objects.filter(propietario__cif__exact=cif)

        if cartaID is not None:
            response = Carta.objects.filter(id__exact=cartaID)

        return response

    def create(self, request, *args, **kwargs):
        
        user = User.objects.get(id__exact=request.data['propietario'])

        carta = Carta.objects.create(
            name = request.data['name'],
            url_facebook = request.data['url_facebook'],
            url_instagram = request.data['url_instagram'], 
            url_tripadvisor = request.data['url_tripadvisor'],
            eslogan = request.data['eslogan'],
            plantilla = request.data['plantilla'],
            propietario = user
        )

        carta.save()
        serializer = CartaSerializerActualizar(carta)
        
        return Response(serializer.data, status=status.HTTP_200_OK)

    def update(self, request, *args, **kwargs):
        instance = Carta.objects.get(id__exact=request.data['id'])
        serializer = CartaSerializerActualizar(
            instance=instance,
            data=request.data
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = Carta.objects.get(id__exact=request.data['id'])
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)



class CategoriasApi(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = CategoriasSerializer

    def get_queryset(self):
        cartaID = self.request.query_params.get('carta', None)
        return Categorias.objects.filter(carta__id__exact=cartaID)



class ProductosApi(viewsets.ModelViewSet):
    
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductoSerializerActualizar

    def get_queryset(self):
        categoriaID = self.request.query_params.get('categoria', None)
        queryset = Productos.objects.filter(categoria__id__exact=categoriaID)    
        return queryset
