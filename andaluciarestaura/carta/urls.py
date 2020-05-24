from rest_framework import routers
from .api import CartaViewSet

router = routers.DefaultRouter()
router.register('api/carta', CartaViewSet, 'carta')

urlpatterns = router.urls
