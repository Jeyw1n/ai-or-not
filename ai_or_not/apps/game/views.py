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

        # Получаем URL изображений
        real_image_url = random_item.real_image.url
        ai_image_url = random_item.ai_image.url

        # Перемешиваем изображения
        images = [real_image_url, ai_image_url]
        random.shuffle(images)

        # Сохраняем в сессии, какая картинка настоящая
        if images[0] == real_image_url:
            request.session['real_image_index'] = 0
        else:
            request.session['real_image_index'] = 1

        # Формируем ответ
        data = {
            'images': {
                'real_img': images[0],
                'ai_img': images[1]
            }
        }
        return JsonResponse(data)
