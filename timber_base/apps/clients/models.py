from django.db import models
# from apps.invoices.models import Invoice
from phonenumber_field.modelfields import PhoneNumberField
from django.utils.translation import gettext_lazy as _

# Create your models here.
class Client(models.Model):
    # invoice = models.ForeignKey(Invoice, verbose_name=('Invoices'),
    #                             related_name='clients_invoices', on_delete=models.CASCADE)
    email = models.EmailField(_('email address'), unique=True)
    server_url = models.URLField(_('Server url'), null=True)
    address_1 = models.CharField(_("address"), max_length=128)
    address_2 = models.CharField(_("address cont'd"), max_length=128, blank=True)
    city = models.CharField(_("city"), max_length=64, default="Düsseldorf")
    country = models.CharField(_("country"), max_length=64, default="Germany")
    state = models.CharField(_("state"), max_length=64, default="")
    zip_code = models.CharField(_("zip code"), max_length=5, default="43701")
    phone = PhoneNumberField(_('Mobile'), help_text=('with country code (eg. +48)'), blank=True, null=True)
