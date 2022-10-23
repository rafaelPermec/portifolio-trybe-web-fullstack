from django.urls import path
from .views import index, contato, home


urlpatterns = [
    path("", index),
    path("contato", contato),
    path("home", home),
]
