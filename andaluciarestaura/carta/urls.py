from rest_framework import routers
from .api import CartaViewSet, ProductosViewSet, CartaAuthViewSet, ProductoActualizarApi, ProductosGetApi
from .views import react

router = routers.DefaultRouter()
router.register('api/carta', CartaViewSet, 'carta')
router.register('api/productos', ProductosViewSet, 'productos')
router.register('api/cartaadmin', CartaAuthViewSet, 'cartaadmin')

router.register('api/productact', ProductoActualizarApi, 'producto')
router.register('api/producto', ProductosGetApi, 'getproductos')

urlpatterns = router.urls
