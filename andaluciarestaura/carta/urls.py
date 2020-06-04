from rest_framework import routers
from .api import CartaViewSet, ProductosViewSet, CartaAuthViewSet, ProductosApi, CartasApi
from .views import react

router = routers.DefaultRouter()
router.register('api/carta', CartaViewSet, 'carta')
router.register('api/productos', ProductosViewSet, 'productos')
router.register('api/cartaadmin', CartaAuthViewSet, 'cartaadmin')

router.register('api/productact', ProductosApi, 'productos')
router.register('api/getcartas', CartasApi, 'producto')

urlpatterns = router.urls
