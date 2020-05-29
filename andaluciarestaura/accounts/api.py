from rest_framework import generics, permissions
from rest_framework.response import Response
from .models import User
from rest_framework import viewsets, permissions
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer, FilePDFSerializer
from django.core.mail import send_mail
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
import logging
import os

logger = logging.getLogger(__name__)
#Register API

class RegisterApi(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        subject = 'Anadalucia Restaura'
        from_email = 'soporte@hotehub.com'
        to = request.data['email']
        
        message = 'Gracias por registrarse en Andalucia Restaura, en breve nos pondremos en contacto con usted para elaborar su carta digital de forma gratuita.'
        send_mail(subject, message, from_email, [to])
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,"token": AuthToken.objects.create(user)[1]
        })



#Login API

class LoginApi(generics.GenericAPIView):

    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs ):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user,context=self.get_serializer_context()).data,"token": AuthToken.objects.create(user)[1]
        })


#Get user API

class UserApi(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user



#File pdf Upload


def handle_uploaded_file(f,ruta):
    with open(ruta, 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)

class FilePDFApi(APIView):
    permission_classes = [
        permissions.AllowAny,
    ]
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        pdf_serializer = FilePDFSerializer(data=request.data)
        if pdf_serializer.is_valid():
            cif_user = request.data["cif"]
            if cif_user is not None:
                usuarioainsertarpdf = User.objects.filter(cif__exact=cif_user)
                ruta = './frontend/static/clientes/' + cif_user + '/free.pdf'

                handle_uploaded_file(request.data["pdf"],ruta)
                logger.error('ANTES DEL SAVE:')
                logger.error(request.data["pdf"])
                usuarioainsertarpdf[0].pdf = ruta
                usuarioainsertarpdf[0].save()
                return Response(pdf_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', pdf_serializer.errors)
            return Response(pdf_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


