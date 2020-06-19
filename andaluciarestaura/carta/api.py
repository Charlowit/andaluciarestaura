from .serializers import CartaSerializer, ProductosSerializer, ProductoSerializerActualizar, CategoriasSerializer, CartaSerializerActualizar
from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from .models import Carta, Productos, Categorias
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.decorators import action
from rest_framework import status
from accounts.models import User
import qrcode
from django.conf import settings
import os

def generar_qr_file(directorio, archivo_qr, url_carta):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,)
    qr.add_data(url_carta)
    qr.make(fit=True)
    img = qr.make_image(fill_color="black", back_color="white")
    img.save(directorio + '/' + archivo_qr)

#Carta Viewset

class CartaViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CartaSerializer
    def get_queryset(self):
        #Enable all cartas with True or False
        all_enable = False
        cartaID = self.request.query_params.get('carta', None)
        cif = self.request.query_params.get('cif', None)
        queryset = {}
        if cartaID is not None:
            if cif is not None:
                #http://127.0.0.1:8000/api/carta/?carta=1&cif=11111111C
                queryset = Carta.objects.filter(id__exact=cartaID,propietario__cif__exact=cif)
            else:
                #http://127.0.0.1:8000/api/carta/?carta=1
                queryset = Carta.objects.filter(id__exact=cartaID)
        elif cif is not None:
            #http://127.0.0.1:8000/api/carta/?cif=11111111C
            queryset = Carta.objects.filter(propietario__cif__exact=cif)
        else:
            if all_enable is not False:
                queryset = Carta.objects.all()
        return queryset

class ProductosViewSet(viewsets.ModelViewSet):
    serializer_class = ProductosSerializer
class CartaAuthViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = CartaSerializer
    def get_queryset(self):
        #Enable all cartas with True or False
        all_enable = False
        cartaID = self.request.query_params.get('carta', None)
        cif = self.request.query_params.get('cif', None)    
        queryset = {}
        if cartaID is not None:
            if cif is not None:
                #http://127.0.0.1:8000/api/carta/?carta=1&cif=11111111C
                queryset = Carta.objects.filter(id__exact=cartaID,propietario__cif__exact=cif)
            else:
                #http://127.0.0.1:8000/api/carta/?carta=1
                queryset = Carta.objects.filter(id__exact=cartaID)
        elif cif is not None:
            #http://127.0.0.1:8000/api/carta/?carta=1&cif=11111111C
            queryset = Carta.objects.filter(propietario__cif__exact=cif)
        else:
            if all_enable is not False:
                queryset = Carta.objects.all()
        return queryset


class CartasApi(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = CartaSerializerActualizar

    def get_queryset(self):
        cif = self.request.query_params.get('cif', None)
        cartaID = self.request.query_params.get('carta', None)
        response = ""

        if cif is not None:
            response = Carta.objects.filter(propietario__cif__exact=cif).order_by('id')

        if cartaID is not None:
            response = Carta.objects.filter(id__exact=cartaID).order_by('id')



        return response

    def create(self, request, *args, **kwargs):
        
        user = User.objects.get(id__exact=request.data['propietario'])

        carta = Carta.objects.create(
            name = request.data['name'],
            url_facebook = request.data['url_facebook'],
            url_instagram = request.data['url_instagram'], 
            url_tripadvisor = request.data['url_tripadvisor'],
            eslogan = request.data['eslogan'],
            establecimiento = request.data['establecimiento'],
            plantilla = request.data['plantilla'],
            propietario = user
        )

        directorio = ""
        if settings.IN_PRODUCTION:
            # VARIABLES PARA PRODUCCION
            directorio = settings.STATIC_ROOT +'/clientes/' + user.cif + '/' + str(carta.id) 
            directorio_carta = '/static/clientes/' + user.cif + '/' +  str(carta.id) 
        else:
            # VARIBALES PARA LOCAL
            directorio = './frontend/static/clientes/' + user.cif + '/' + str(carta.id)
            directorio_carta = '/static/clientes/' + user.cif + '/' + str(carta.id) 

        try:
            os.mkdir(directorio)
        except OSError:
            print("Creation of the directory %s failed" % directorio)
        else:
            print("Successfully created the directory %s " % directorio)

        archivo_qr = 'qr.jpg'
        url_carta = 'https://www.andaluciarestaura.com/cartaestatica/' + user.cif + '/' + str(carta.id)

        generar_qr_file(directorio, archivo_qr, url_carta)


          
        carta.directorio = directorio_carta
        carta.save()
        serializer = CartaSerializerActualizar(carta)
        
        return Response(serializer.data, status=status.HTTP_200_OK)

    def update(self, request, *args, **kwargs):
        
        instance = Carta.objects.get(id__exact=request.data['id'])
        serializer = CartaSerializerActualizar(
            instance=instance,
            data=request.data
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        idCarta = self.request.query_params.get('carta', None)
        instance = Carta.objects.get(id__exact=idCarta)
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)



class CategoriasApi(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = CategoriasSerializer

    def get_queryset(self):
        cartaID = self.request.query_params.get('carta', None)
        return Categorias.objects.filter(carta__id__exact=cartaID).order_by('posicion')



class ProductosApi(viewsets.ModelViewSet):
    
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductoSerializerActualizar

    def get_queryset(self):
        categoriaID = self.request.query_params.get('categoria', None)
        queryset = Productos.objects.filter(categoria__id__exact=categoriaID).order_by('id') 
        return queryset




def handle_uploaded_file(f,ruta):
    print("Estamos creando el qr en --> ", ruta)
    with open(ruta, 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)

class ProductosSubirPhotoApi(viewsets.ModelViewSet):

    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = ProductoSerializerActualizar
    parser_classes = (MultiPartParser, FormParser)

    def get_queryset(self):
        pass

    def put(self, request, *args, **kwargs):

        cif_user = request.data["cif"]

        print("ESTE ES EL CIF DEL USER --> ", cif_user )
        productoID = self.request.query_params.get('id', None)
        cartaProducto = Productos.objects.filter(id__exact=productoID).values('carta')
        directorioCartaRaw = Carta.objects.filter(id__exact=cartaProducto[0]['carta']).values('directorio')
        directorio = directorioCartaRaw[0]['directorio']

        ruta = './frontend' + directorio + '/' + productoID + '.jpeg'
        handle_uploaded_file(request.data["photo"], ruta)
        
        return Response(status=status.HTTP_200_OK)

class CartaSubirPhotoApi(viewsets.ModelViewSet):

    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = CartaSerializerActualizar
    parser_classes = (MultiPartParser, FormParser)

    def put(self, request, *args, **kwargs):

        cif_user = request.data["cif"]
        cartaID = self.request.query_params.get('id', None)
        
        directorioCartaRaw = Carta.objects.filter(id__exact=cartaID).values('directorio')
        directorio = directorioCartaRaw[0]['directorio']

        ruta = './frontend' + directorio + '/logo.jpeg'
        handle_uploaded_file(request.data["photo"], ruta)
        
        return Response(status=status.HTTP_200_OK)
