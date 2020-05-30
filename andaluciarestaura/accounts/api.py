from rest_framework import generics, permissions
from rest_framework.response import Response
from .models import User
from rest_framework import viewsets, permissions
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer, FilePDFSerializer, UserSerializerActualizar
from django.core.mail import send_mail
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
import logging
import os
import qrcode
from django.core.mail import EmailMultiAlternatives
import shutil
import base64

logger = logging.getLogger(__name__)

#File pdf Upload


def enviar_email_v1(correo):
    logger.error("ENTRO EN EMAIL V1")
    subject = 'Anadalucia Restaura'
    from_email = 'soporte@hotehub.com'
    to = correo
    logger.error("DENTRO DE MAIL V1 EL CORREO ES"+ correo)
    message = 'Gracias por registrarse en Andalucia Restaura, en breve nos pondremos en contacto con usted para elaborar su carta digital de forma gratuita.'
    send_mail(subject, message, from_email, [to])
    logger.error("SALGO EN EMAIL V1")

def enviar_email_v2(correo, url_carta, ruta_qr):
    logger.error("ENTRO EN EMAIL V2")
    subject= 'Tu Carta Online con QR by Andalucia Restaura'
    from_email= 'soporte@hotehub.com'
    to = correo
    logger.error("DENTRO DE MAIL V2 EL CORREO ES" + correo)
    text_content = 'Gracias por registrarse en Andalucia Restaura.'
    html_content = '<p>Aquí tienes tu dirección donde tus clientes podrán ver tu carta en PDF:' \
                   '<a href='+url_carta+'>Pulsa aquí para visualizar tu carta</a</p>'
    msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
    msg.attach_alternative(html_content, "text/html")
    msg.attach_file(ruta_qr)
    msg.send()
    logger.error("SALGO EN EMAIL V2")


def generar_qr_file(directorio, archivo_qr, url_carta):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,)
    qr.add_data(url_carta)
    qr.make(fit=True)
    img = qr.make_image(fill_color="black", back_color="white")
    logger.error("Antes de salvar imagen qr:" + directorio + '/' + archivo_qr)
    img.save(directorio + '/' + archivo_qr)

def handle_uploaded_file(f,ruta):
    with open(ruta, 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)
"""""           
def handle_uploaded_image(ruta):
    with open( ruta , "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read())
    final = str(encoded_string)
    final.encode("utf-8")
"""""
"""""
def handle_uploaded_image(image,ruta):
    f = open(ruta, 'wb')
    logger.error(str(image))
    for row in image:
        encoded_string = base64.b64encode(row)
        #final = str(encoded_string)
        f.write(encoded_string)
    f.close()
"""""
class FilePDFApi(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        register_serializer = self.get_serializer(data=request.data)
        if register_serializer.is_valid():
            cif_user = request.data["cif"]
            logger.error("CIF_USER: " + cif_user)
            if cif_user is not None:
                # 1 Creamos el directorio con el cif del usuario donde ira el fichero en pdf
                #usuarioainsertarpdf = User.objects.filter(cif__exact=request.data["cif"])
                #logger.error("USUARIO A INSERTAR PDF ENTERO: " + usuarioainsertarpdf[0])
                #logger.error("EMAIL DESDE EL USUARIO: " +usuarioainsertarpdf[0].email)
                correo = request.data["email"]
                logger.error("EMAIL DESDE LA VARIABLE: " + correo)
                archivo_pdf = 'free.pdf'
                archivo_qr = 'qr.jpg'
                archivo_logo = 'logo.jpeg'
                directorio = './frontend/static/clientes/' + cif_user
                ruta_pdf = directorio+ '/' + archivo_pdf
                ruta_qr = directorio + '/' + archivo_qr
                ruta_logo = directorio + '/' + archivo_logo
                url_carta = 'https://www.andaluciarestaura.com/cartaestatica/' + cif_user
                try:
                    os.mkdir(directorio)
                except OSError:
                    logger.error("Creation of the directory %s failed" % directorio)
                else:
                    logger.error("Successfully created the directory %s " % directorio)
                # 2 Creamos el fichero y lo copiamos en el directorio anteriormente creado.
                handle_uploaded_file(request.data["pdf"],ruta_pdf)
                #encoded_string = base64.b64encode(request.data["logo"].read())
                handle_uploaded_file(request.data["logo"],ruta_logo)

                logger.error(request.data["pdf"])
                logger.error(request.data["logo"])

                #4 Generamos el qr
                logger.error('ANTES DEL GENERAR EL QR:')
                generar_qr_file(directorio, archivo_qr, url_carta)
                logger.error('DESPUES DEL GENERAR EL QR:')



                # 3 Insertamos la ruta del fichero pdf en el modelo
                #register_serializer.create(request.data)
                # logger.error("ANTES: " + register_serializer.marca_comercial)
                register_serializer.is_valid(raise_exception=True)
                user = register_serializer.save()
                #logger.error("DESPUES: " + user.marca_comercial)
                logger.error("USUARIO REGISTRADO!")

                User.objects.filter(cif__exact=request.data["cif"]).update(pdf=ruta_pdf, qr=ruta_qr, logo=ruta_logo, marca_comercial=request.data["marca_comercial"], email=request.data["email"], telefono_1=request.data["telefono_1"])
                #User.objects.filter(cif__exact=request.data["cif"]).update(pdf=ruta_pdf, qr=ruta_qr)
                #logger.error(usuarioainsertarpdf[0])
                #usuarioainsertarpdf[0].pdf = ruta_pdf
                #usuarioainsertarpdf[0].qr = ruta_qr
                #usuarioainsertarpdf[0].save()
                # 5 Guardamos todos los datos en el modelo usuario
                logger.error('ANTES DEL SAVE:' + cif_user)


                # 6 Creamos el correo electronico y lo enviamos.
                # ENVIAR EMAIL VERSION 1
                enviar_email_v1(correo)
                enviar_email_v2(correo, url_carta, ruta_qr)
                #return Response(register_serializer.data, status=status.HTTP_201_CREATED)

                return Response({
                    "user": UserSerializer(user, context=self.get_serializer_context()).data,
                    "token": AuthToken.objects.create(user)[1]
                })

        else:
            print('error', register_serializer.errors)
            return Response(register_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#Register API

class RegisterApi(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        logger.error("USUARIO REGISTRADO!")

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


class UpdateNameApi(generics.GenericAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializerActualizar
    def post(self, request, *args, **kwargs):
        serializer = self.update_serializer(data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        logger.error(request.data)
        logger.error("ANTES DEL SAVE")
        #user = request.data
        #serializer.update(request.data)
        serializer.save()
        logger.error("DESPUES DEL SAVE")
        return Response({
            "Todo Correcto Usuario Actualizado"
        })

class UserActualizarApi(generics.UpdateAPIView):
    serializer_class = UserSerializerActualizar
    permission_classes = (permissions.IsAuthenticated,)

    def update(self, request, *args, **kwargs):
        serializer = self.serializer_class(request.user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)


