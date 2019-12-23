from rest_framework import viewsets, mixins
from .serializers import ClientSerializer
from rest_framework.permissions import IsAuthenticated
from apps.clients.models import Client

class ClientViewSet(mixins.CreateModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin,
                  mixins.DestroyModelMixin,
                  mixins.ListModelMixin,
                  viewsets.GenericViewSet):

    permission_classes = [IsAuthenticated]
    serializer_class = ClientSerializer
    queryset = Client.objects.all()
