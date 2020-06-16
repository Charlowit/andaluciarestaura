from django.urls import path, include
from django.conf.urls import url
from .api import RegisterApi, LoginApi, UserApi, FilePDFApi, UserActualizarApi, UserApiAdminPage, PasswordAPIView
from knox import views as knox_views
from . import views
from rest_framework.routers import DefaultRouter, SimpleRouter

router = DefaultRouter()
router.register('getuser', UserApiAdminPage, 'usuario')

urlpatterns =[
    path('api/auth', include('knox.urls')),
    #path('api/auth/register', RegisterApi.as_view()),
    path('api/auth/login', LoginApi.as_view()),
    path('api/auth/user', UserApi.as_view()),
    path('api/auth/logout/', knox_views.LogoutView.as_view(), name='knox_logout'),
    path('api/auth/pdf', FilePDFApi.as_view(), name='pdf_list'),
    path('api/auth/useract', UserActualizarApi.as_view()),
    path("api/auth/password", PasswordAPIView.as_view(), name="password-detail"),
    path('api/auth/datos/', include(router.urls)),
]
