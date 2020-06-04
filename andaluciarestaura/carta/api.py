from .serializers import CartaSerializer, ProductosSerializer, ProductoSerializerActualizar
from rest_framework import viewsets, permissions, generics
from .models import Carta, Productos, Categorias

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



class ProductoActualizarApi(viewsets.ModelViewSet):
    
    permission_classes = [
        permissions.AllowAny
    ]    
    serializer_class = ProductoSerializerActualizar

    def get_queryset(self):
        idCarta = self.request.query_params.get('id', None)
        queryset = {}
        if idCarta is not None:
            queryset = Productos.objects.filter(carta__exact=idCarta)
        else:
            queryset = {"none"}
        return queryset
    
    """
    def update(self, request, *args, **kwargs):
        serializer = self.serializer_class(request.user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)
    """
class ProductosGetApi(viewsets.ModelViewSet):

    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductoSerializerActualizar

    def get_queryset(self):
        productoID = self.request.query_params.get('id', None)
        if productoID is not None:
            producto = Productos.objects.filter(id__exact=productoID)
        else:
            producto = "none"
        return producto

