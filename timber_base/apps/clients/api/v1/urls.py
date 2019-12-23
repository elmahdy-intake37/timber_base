from django.urls import path
from rest_framework.routers import DefaultRouter
from apps.clients.api.v1.views import ClientViewSet

router = DefaultRouter()


router.register('', ClientViewSet, basename='clients')

urlpatterns = router.urls
