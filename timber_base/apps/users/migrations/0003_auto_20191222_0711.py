# Generated by Django 2.2.2 on 2019-12-22 07:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20191222_0705'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='sales',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='clients', to='clients.Client', verbose_name='Sales Man'),
        ),
    ]
