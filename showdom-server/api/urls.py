"""
URL configuration for showdom project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, include
from .views import MediaViewSet, UserViewSet
# MediaList, MediaDetails
# media_list, media_details
# from users.views import UserCreateAPIView
# from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('medias', MediaViewSet, basename='medias')
router.register('users', UserViewSet, basename='users')


urlpatterns = [
    path('api/', include(router.urls)),
    # path('medias/', MediaList.as_view()),
    # path('medias/<int:id>/', MediaDetails.as_view()),
    # path('medias/', media_list),
    # path('medias/<int:pk>/', media_details),
    # replace 'healthcheck' with your app's name
    # path('', include('showdom.urls')),
    # path('register/', UserCreateAPIView.as_view(), name='register'),
    # path('api/login/', obtain_auth_token, name='api_token_auth')
]
