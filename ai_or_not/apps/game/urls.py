from django.urls import path
from . import views

urlpatterns = [path('create_game_session/', views.create_game_session_view, name='create_game_session')]
