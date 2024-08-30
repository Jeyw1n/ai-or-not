from django.db import models

class ImageModel(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    ai_image = models.ImageField(upload_to='ai_images/')
    real_image = models.ImageField(upload_to='real_images/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

