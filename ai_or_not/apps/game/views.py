import random

from django.shortcuts import render
from django.http import JsonResponse
from .models import ImageModel


def create_game_session_view(request):
    """
    Создание игровой сессии.
    В сессию сохраняется ответ, изображения и id сессии.
    Возвращает:
    JsonResponse: словарь с изображениями.
    """

    if request.method == 'GET':
        # Достаем случайную пару изображений.
        items = list(ImageModel.objects.all())
        random_item = random.choice(items)

        request.session['ai_image'] = random_item.ai_image
        request.session['real_image'] = random_item.real_image

        print(random_item)

        data = {
            'images': {
                'real_img': random_item.real_image.url,
                'ai_img': random_item.ai_image.url
            }
        }
        return JsonResponse(data)
