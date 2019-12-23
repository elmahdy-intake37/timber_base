from django.db import models
from django.contrib.auth.models import User
import uuid
from django.utils.translation import gettext_lazy as _
from apps.clients.models import Client
# Create your models here.

class Invoice(models.Model):
    clients = models.ForeignKey(Client, verbose_name=_('Invoice Client '),
                                 related_name='clients_invoices',
                                 on_delete=models.CASCADE)
    admin = models.ForeignKey(User, verbose_name=('Manager'),
                              related_name='Manager', on_delete=models.CASCADE)
    sub_total = models.DecimalField(max_digits=7, decimal_places=2)
    tax  = models.DecimalField(max_digits=7, decimal_places=2)
    discount = models.DecimalField(max_digits=7, decimal_places=2)
    total =  models.DecimalField(max_digits=7, decimal_places=2)
    invoice_no = models.UUIDField(_('Invoice Number'), default=uuid.uuid4)
    amount = models.DecimalField(max_digits=6, decimal_places=2)
    terms =  models.TextField(blank=True, default="")
    du_date = models.DateTimeField(_("Du Date"), auto_now_add=True)
    invoice_date = models.DateTimeField(_("Invoice Date"), auto_now=True, null=True)

class InvoiceLineItem(models.Model):
    invoices = models.ForeignKey(Invoice, verbose_name=('Invoices'), related_name='invoices', on_delete=models.CASCADE)
    code =  models.UUIDField(_('Code'), default=uuid.uuid4)
    name = models.CharField(_('Name Of Item'), max_length=250, blank=True, null=True)
    rate = models.DecimalField(max_digits=6, decimal_places=2)
    discount = models.DecimalField(max_digits=7, decimal_places=2)
    cost = models.DecimalField(max_digits=6, decimal_places=2)
    description = models.TextField(blank=True, default="")
