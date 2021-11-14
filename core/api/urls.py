
from django.urls import path, include
from .views import UserAPIView, ObtainTokenPairWithColorView, CustomUserCreate, HelloWorldView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
urlpatterns = [
    path('user', UserAPIView.as_view()),
    path('user/create/', CustomUserCreate.as_view(), name="create_user"),
    path('token/', ObtainTokenPairWithColorView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('hello/', HelloWorldView.as_view(), name='hello_world'),
]