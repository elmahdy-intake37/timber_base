from django.db import models
from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumberField
from django.utils.translation import gettext_lazy as _

from apps.clients.models import Client
from django.db.models.signals import post_save
from django.dispatch import receiver
# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User,null=True, on_delete=models.CASCADE)
    sales = models.ForeignKey(Client, verbose_name=('Sales Man'),
                              related_name='clients',null=True,
                               on_delete=models.CASCADE)
    server_url = models.URLField(_('Server url'), null=True)
    address_1 = models.CharField(_("address"), max_length=128)
    address_2 = models.CharField(_("address cont'd"), max_length=128, blank=True)
    city = models.CharField(_("city"), max_length=64, default="Düsseldorf")
    country = models.CharField(_("Country"), max_length=64, default="Germany")
    state = models.CharField(_("state"), max_length=64, default="")
    zip_code = models.CharField(_("zip code"), max_length=5, default="43701")
    mobile = PhoneNumberField(_('Mobile'), help_text=('with country code (eg. +48)'), blank=True, null=True)

    # @receiver(post_save, sender=User)
    # def update_user_profile(sender, instance, created, **kwargs):
    #     if created:
    #         Profile.objects.create(user=instance)
    #     instance.profile.save()
