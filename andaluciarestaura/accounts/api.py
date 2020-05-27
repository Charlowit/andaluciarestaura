from rest_framework import generics, permissions
from .models import User
from rest_framework.response import Response
from rest_framework import viewsets, permissions
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer
from django.core.mail import send_mail

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


