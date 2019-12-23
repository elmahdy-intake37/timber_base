from django.urls import path
from rest_framework.routers import DefaultRouter
from apps.invoices.api.v1.views import InvoiceViewSet, InvoiceItemViewSet

router = DefaultRouter()


router.register('invoice', InvoiceViewSet, basename='invoices')
router.register('invoice_item', InvoiceItemViewSet, basename='invoice_itme')
# urlpatterns += router.urls

urlpatterns = router.urls
