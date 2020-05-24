from .serializers import CartaSerializer
from rest_framework import viewsets, permissions
from .models import Carta, Productos, Categorias

#Carta Viewset

class CartaViewSet(viewsets.ModelViewSet):
    queryset = Carta.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CartaSerializer
