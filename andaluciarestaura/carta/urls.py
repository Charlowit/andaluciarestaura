from rest_framework import routers
from .api import CartaViewSet, ProductosViewSet, CartaAuthViewSet, ProductosApi, CartasApi, CategoriasApi, ProductosSubirPhotoApi
from .views import react
from django.urls import path, include

router = routers.DefaultRouter()
router.register('api/carta', CartaViewSet, 'carta')
router.register('api/productos', ProductosViewSet, 'productos')
router.register('api/cartaadmin', CartaAuthViewSet, 'cartaadmin')

router.register('api/productact', ProductosApi, 'productos')
router.register('api/getcartas', CartasApi, 'producto')
router.register('api/damelascategorias', CategoriasApi, 'categorias')
router.register('api/subirphoto', ProductosSubirPhotoApi, 'subirphoto')

urlpatterns = router.urls
