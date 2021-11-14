
from rest_framework import status, generics, permissions
from .serializers import UserSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import MyTokenObtainPairSerializer, CustomUserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response


class ObtainTokenPairWithColorView(TokenObtainPairView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = MyTokenObtainPairSerializer


class CustomUserCreate(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserAPIView(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class HelloWorldView(APIView):

    def get(self, request):
        return Response(data={"hello":"world"}, status=status.HTTP_200_OK)
