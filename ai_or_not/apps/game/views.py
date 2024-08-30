import random

from django.shortcuts import render
from .models import ImageModel 

def game_view(request):
    items = list(ImageModel.objects.all())
    random_item = random.choice(items) 

    images_pair = [random_item.real_image, random_item.ai_image]
    random.shuffle(images_pair)
    print(images_pair)
    context = {
            'images': [
                images_pair[0].url,
                images_pair[1].url
                ]
            }
    return render(request, 'game_app/index.html', context=context)
