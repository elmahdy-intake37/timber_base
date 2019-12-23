from django.contrib.auth import authenticate
from rest_framework import serializers
from django.contrib.auth import get_user_model
from apps.users.models import Profile

def get_and_authenticate_user(username, password):
    user = authenticate(username=username, password=password)
    if user is None:
        raise serializers.ValidationError("Invalid username/password. Please try again!")
    return user


def create_user_account(email, password, first_name="",
                        last_name="", **extra_fields):
    user = get_user_model().objects.create_user(
        email=email, password=password, first_name=first_name,
        last_name=last_name, **extra_fields)
    return user

def create_profile_user(address_1, city, country, mobile, server_url, state,user,
                        **extra_fields):
    print('extra_fields', extra_fields)
    print('user', user)
    profile = Profile.objects.create(address_1=address_1, city=city,
                                     country=country, mobile=mobile,
                                     server_url=server_url, state=state,
                                     **extra_fields)
    return profile
