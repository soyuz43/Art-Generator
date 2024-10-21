# art_api/urls.py

from django.urls import path
from .views import generate_art

urlpatterns = [
    path('generate-art/<str:prompt>/', generate_art, name='generate_art'),
]
