from django.urls import path, include
from .api import RegisterApi, LoginApi, UserApi, FilePDFApi, UserActualizarApi
from knox import views as knox_views
from . import views

urlpatterns =[
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterApi.as_view()),
    path('api/auth/login', LoginApi.as_view()),
    path('api/auth/user', UserApi.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
    path('api/auth/pdf', FilePDFApi.as_view(), name='pdf_list'),
    path('api/auth/useract', UserActualizarApi.as_view()),
]
