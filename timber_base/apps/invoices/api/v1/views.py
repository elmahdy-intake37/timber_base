from rest_framework import viewsets, mixins
from .serializers import InvoiceSerializer, InvoiceItemSerializer
from rest_framework.permissions import IsAuthenticated
from apps.invoices.models import Invoice, InvoiceLineItem

class InvoiceViewSet(mixins.CreateModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin,
                  mixins.DestroyModelMixin,
                  mixins.ListModelMixin,
                  viewsets.GenericViewSet):

    permission_classes = [IsAuthenticated]
    serializer_class = InvoiceSerializer
    queryset = Invoice.objects.all()


class InvoiceItemViewSet(mixins.CreateModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin,
                  mixins.DestroyModelMixin,
                  mixins.ListModelMixin,
                  viewsets.GenericViewSet):

    permission_classes = [IsAuthenticated]
    serializer_class = InvoiceItemSerializer
    queryset = InvoiceLineItem.objects.all()

    '''
        here we will override peform create
        to create invoice item with calc all amount and sub total
        also create client 
    '''
