from rest_framework import routers
from .api import CartaViewSet, ProductosViewSet, CartaAuthViewSet
from .views import react

router = routers.DefaultRouter()
router.register('api/carta', CartaViewSet, 'carta')
router.register('api/productos', ProductosViewSet, 'productos')
router.register('api/cartaadmin', CartaAuthViewSet, 'cartaadmin')
urlpatterns = router.urls
