# Generated by Django 2.2.2 on 2019-12-23 07:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('clients', '0002_remove_client_invoice'),
    ]

    operations = [
        migrations.RenameField(
            model_name='client',
            old_name='Counrty',
            new_name='country',
        ),
    ]
