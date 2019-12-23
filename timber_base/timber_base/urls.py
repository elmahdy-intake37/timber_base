from django.contrib import admin
from django.urls import path, include
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='Temper Base API Documentation')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('apps.invoices.api.v1.urls')),
    path('api/v1/auth/', include('apps.users.api.v1.urls')),
    path('api/v1/docs/', schema_view),
    path('api/v1/client/', include('apps.clients.api.v1.urls'))


]
