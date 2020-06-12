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
from PIL import Image, ImageOps, ImageDraw
import qrcode
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.core import mail
from django.utils.html import strip_tags
from django.template import Context
import shutil
import base64
from django.conf import settings
from rest_framework.decorators import action

logger = logging.getLogger(__name__)

#File pdf Upload


def enviar_email_v1(correo):
    logger.error("ENTRO EN EMAIL V1")
    subject = 'Córdoba Restaura'
    from_email = 'soporte@hotehub.com'
    to = correo
    logger.error("DENTRO DE MAIL V1 EL CORREO ES"+ correo)
    message = 'Gracias por registrarse en Córdoba Restaura, se está creando en estos instantes su carta digital, en breve recibirá otro correo con las instrucciones pertinentes.' \
              'Le recordamos que puede acceder a nuestra plataforma para terminar de rellenar sus datos con el CIF/NIF y la constraseña con la que se registró.'
    send_mail(subject, message, from_email, [to])
    logger.error("SALGO EN EMAIL V1")


def enviar_email_v3(correo, url_carta, ruta_qr, url_qr):
    subject= 'Tu Carta Online con QR by Córdoba Restaura'
    from_email= 'soporte@hotehub.com'
    to = correo
    html_message = render_to_string('./accounts/mail_template.html', { 'url_carta': url_carta, 'url_qr':url_qr })
    plain_message = strip_tags(html_message)

    mail.send_mail(subject, plain_message, from_email, [to], html_message=html_message)
    logger.error("Enviao! V3")

def enviar_email_v2(correo, url_carta, ruta_qr, url_qr):
    logger.error("ENTRO EN EMAIL V2")
    subject= 'Tu Carta Online con QR by Córdoba Restaura'
    from_email= 'soporte@hotehub.com'
    to = correo
    logger.error("DENTRO DE MAIL V2 EL CORREO ES" + correo)
    text_content = 'Gracias por registrarse en Córdoba Restaura.'
    html_content = '<p>Aquí tienes tu dirección donde tus clientes podrán ver tu carta en PDF:<br/>' \
                   '<a href='+url_carta+'>Pulsa aquí para visualizar tu carta</a</p><br/>' \
                   '<a href='+url_qr+'>Pulsa aquí para descargar tu código QR</a</p>'
    """"
    html_content = '<div class="section"><div class="container has-text-centered"><div class="section">' \
                   '<img src="https://www.andaluciarestaura.com/static/frontend/logoar.svg" width="400">' \
                   '<div class="columns is-centered is-marginless" style="width: 100%;">' \
                   '<div class="column" style="width: 100%; height: 100%;">' \
                   '<div style="background-position: center; background-image: url("http://www.andaluciarestaura.com/static/frontend/backgroundEmail.jpeg"); height: 650px;  background-repeat: no-repeat; ">' \
                   '<h1 style="color: white; font-size: 25px; padding-top: 50px"> <b> Bienvenido a cordobarestaura.com </b> </h1>' \
                   '<div class="section"><h1 style="color: white; font-size: 18px;"> Tu plataforma, la plataforma del sector </h1></div>' \
                   '<div class="section" style="margin-top: -80px"><h1 style="color: white; font-size: 18px;"> Nuestra voluntad, servirte para servir al cliente </h1></div>' \
                   '<div class="container" style="margin-top: -60px"><p  style="color: white; font-size: 18px; padding-top: 30px"> Descarga tu carta digital accediendo con el siguiente QR </p>' \
                   '</div><img src="'+ url_qr +'" width="150px" style="padding-top: 30px;"><p style="color: white; font-size: 50px"> Scan Me! <br/> O también puedes acceder en esta dirección y compartirla con tus contactos: <br/> '+url_$
                   '<p style="color: white; padding-top: 10px"> Gracias. </p></div></div></div><div class="container"><div class="columns">' \
                   '<div class="column is-centered has-text-centered"><img src="logotipo.jpeg" width="200" >' \
                   '</div></div></div></div></div></div></div>'
                   #'</body></html>'


                    # '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">' \
                    # '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css">' \
                    # '<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>' \
                    # '<title>Córdoba Restaura</title>' \
                    # '<link href="https://fonts.googleapis.com/css?family=El Messiri" rel="stylesheet"><style> div {font-family: "El Messiri"; } img {font-family: "El Messiri"; } p { font-family: "El Messiri"; } </style>' \
                    # '</head>' \
                    # '<body>' \
                    """
    msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
    msg.attach_alternative(html_content, "text/html")
    msg.attach_file(ruta_qr)
    msg.send()
    logger.error("SALGO EN EMAIL V2")
    """text_template = get_template('samaritan/email/group_email.txt')
    html_template = get_template('samaritan/email/group_email.html')

    context = {
        'recipient_name': recipient_first_name,
        'message': message,
        'sender_name': sender_name,
    }
    text_content = text_template.render(context)
    html_content = html_template.render(context)

    msg = EmailMultiAlternatives(subject, text_content, sender_email, [recipient_email])
    msg.attach_alternative(html_content, "text/html")
    return msg.send()
    """


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

def generar_qr_file_v2(directorio, archivo_qr, url_carta, ruta_back, ruta_logo):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=12,
        border=4,)
    qr.add_data(url_carta)
    qr.make(fit=True)
    img_qr = qr.make_image(fill_color="black", back_color="white")
    logger.error("Antes de salvar imagen qrs:" + directorio + '/' + archivo_qr)

    img_bg = Image.open(ruta_back)
    img_logo = Image.open(ruta_logo)
    img_logo = img_logo.resize((128, 128), Image.ANTIALIAS)

    pos_qr = ((int(img_bg.size[0] / 2) - int(img_qr.size[0] / 2)), (img_bg.size[1] - img_qr.size[1]))
    pos_logo = (500 - 64, 150)

    img_bg.paste(img_qr, pos_qr)
    img_bg.paste(img_logo, pos_logo)

    img_bg.save(directorio + '/' + archivo_qr)

def handle_uploaded_file(f,ruta):
    with open(ruta, 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)

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

                #CONSTANTES QUE NUNCA VAN A VARIAR
                archivo_pdf = 'free.pdf'
                archivo_qr = 'qr.jpg'
                archivo_logo = 'logo.jpeg'
                if settings.IN_PRODUCTION:
                    # VARIABLES PARA PRODUCCION
                    directorio = settings.STATIC_ROOT +'/clientes/' + cif_user
                    directorio_bd = './static/clientes/' + cif_user

                else:
                    # VARIBALES PARA LOCAL
                    directorio = './frontend/static/clientes/' + cif_user
                    directorio_bd = './frontend/static/clientes/' + cif_user

                ruta_logo_bd = directorio_bd + '/' + archivo_logo
                ruta_qr_bd = directorio_bd + '/' + archivo_qr
                ruta_pdf = directorio + '/' + archivo_pdf
                ruta_qr = directorio + '/' + archivo_qr
                ruta_logo = directorio + '/' + archivo_logo


                #ESTO DA IGUAL EN PRODUCCION QUE EN LOCAL NO NOS INTERFIERE
                url_carta = 'https://www.andaluciarestaura.com/cartaestatica/' + cif_user
                url_carta_dev = 'https://www.dev.andaluciarestaura.com/cartaestatica/' + cif_user

                url_qr = 'https://www.andaluciarestaura.com/static/clientes/' + cif_user + '/'+ archivo_qr
                url_qr_dev = 'https://www.dev.andaluciarestaura.com/static/clientes/' + cif_user + '/'+ archivo_qr

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
                generar_qr_file(directorio, archivo_qr, url_carta_dev)
                logger.error('DESPUES DEL GENERAR EL QR:')


                # 3 Insertamos la ruta del fichero pdf en el modelo
                #register_serializer.create(request.data)
                # logger.error("ANTES: " + register_serializer.marca_comercial)
                register_serializer.is_valid(raise_exception=True)
                user = register_serializer.save()
                #logger.error("DESPUES: " + user.marca_comercial)
                logger.error("USUARIO REGISTRADO!")

                User.objects.filter(cif__exact=request.data["cif"]).update(pdf=ruta_pdf, qr=ruta_qr_bd, logo=ruta_logo_bd, marca_comercial=request.data["marca_comercial"], email=request.data["email"], telefono_1=request.data["telefono_1"])
                #User.objects.filter(cif__exact=request.data["cif"]).update(pdf=ruta_pdf, qr=ruta_qr)
                #logger.error(usuarioainsertarpdf[0])
                # 5 Guardamos todos los datos en el modelo usuario
                logger.error('ANTES DEL SAVE:' + cif_user)


                # 6 Creamos el correo electronico y lo enviamos.
                # ENVIAR EMAIL VERSION 1
                enviar_email_v1(correo)
                enviar_email_v3(correo, url_carta, ruta_qr, url_qr)

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

class UserActualizarApi(generics.UpdateAPIView):
    serializer_class = UserSerializerActualizar
    permission_classes = (permissions.IsAuthenticated,)

    def update(self, request, *args, **kwargs):
        serializer = self.serializer_class(request.user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response([serializer.data], status=status.HTTP_200_OK)

#Get user API

class UserApiAdminPage(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = UserSerializer

    def get_queryset(self):
        cif = self.request.query_params.get('cif', None)
        queryset = User.objects.filter(cif__exact=cif)
        return queryset


