from .serializers import CartaSerializer, ProductosSerializer
from rest_framework import viewsets, permissions, generics
from .models import Carta, Productos, Categorias

#Carta Viewset

class CartaViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CartaSerializer
    def get_queryset(self):
        cartaID = self.request.query_params.get('carta', None)
        queryset = {}
        if cartaID is not None:
            queryset = Productos.objects.filter(carta=cartaID)
        else:
            queryset = Carta.objects.all()
        return queryset

class ProductosViewSet(viewsets.ModelViewSet):
    serializer_class = ProductosSerializer
    
"""
class CategoriasSerializer(viewsets.ModelViewSet):
    serializer_class = CategoriasSerializer
"""     