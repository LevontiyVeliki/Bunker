from django.db import models
from django.contrib.auth.models import User


class Card(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    age = models.CharField(max_length=3, default="0")
    sex = models.CharField(max_length=20, default="standart")
    name = models.CharField(max_length=20, default="standart")
    bodytype = models.CharField(max_length=20, default="standart")
    personality = models.CharField(max_length=20, default="standart")
    profession = models.CharField(max_length=20, default="standart")
    health = models.CharField(max_length=20, default="standart")
    hobby = models.CharField(max_length=100, default="standart")
    phobia = models.CharField(max_length=20, default="standart")
    largeInventory = models.CharField(max_length=100, default="standart")
    backpack = models.CharField(max_length=100, default="standart")
    additionalInformation = models.CharField(max_length=100, default="standart")
    specialFeature = models.CharField(max_length=100, default="standart")
    
    def __str__(self):
        return f"Card {self.id} - User: {self.user.username} - {self.name}"