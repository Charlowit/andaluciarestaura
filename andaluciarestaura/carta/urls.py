from rest_framework import routers
from .api import CartaViewSet, ProductosViewSet
from .views import react

router = routers.DefaultRouter()
router.register('api/carta', CartaViewSet, 'carta')
router.register('api/productos', ProductosViewSet, 'productos')
urlpatterns = router.urls
