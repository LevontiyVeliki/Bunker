from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from .models import Card
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from .serializers import CardSerializer
from .utils import delete_room
from faker import Faker
import random

# Инициализируем Faker для генерации случайных данных
fake = Faker()

class CreateCardAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        user = request.user
        data_name = request.data.get('name')
        # Генерируем случайные значения для карточки
        name = data_name # Генерация случайного имени
        sex = random.choice(["male", "female"])
        age = random.choice(["18", "25", "30", "40", "50"])
        bodytype = random.choice(["slim", "athletic", "average", "muscular", "overweight"])
        personality = random.choice(["calm", "nervous", "outgoing", "introverted", "shy"])
        profession = random.choice(["doctor", "engineer", "artist", "teacher", "scientist"])
        health = random.choice(["good", "average", "poor"])
        hobby = fake.word()  # Генерация случайного хобби
        phobia = random.choice(["heights", "spiders", "claustrophobia", "water", "darkness"])
        large_inventory = fake.sentence()  # Генерация случайного предмета для инвентаря
        backpack = fake.sentence()  # Генерация случайного предмета для рюкзака
        additional_info = fake.text(max_nb_chars=100)  # Генерация случайной дополнительной информации
        special_feature = random.choice(["speed", "strength", "intelligence", "agility", "stealth"])
        
        # Создаем карточку с случайными значениями
        card = Card.objects.create(
            user=user,
            age=age,
            bodytype=bodytype,
            personality=personality,
            profession=profession,
            health=health,
            hobby=hobby,
            phobia=phobia,
            largeInventory=large_inventory,
            backpack=backpack,
            additionalInformation=additional_info,
            specialFeature=special_feature,
            name=name,  # Новое поле name
            sex=sex
        )

        # Возвращаем ответ с ID созданной карточки 
        return Response({
            "message": "Карточка создана",
            "card_id": card.id
        }, status=status.HTTP_201_CREATED)


class MyCardsAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        print(request.data)
        """Получение списка комнат пользователя"""
        # Получаем все комнаты, где текущий пользователь является владельцем
        card = Card.objects.filter(user=request.user)

        # Сериализуем комнаты
        serializer = CardSerializer(card, many=True)

        # Возвращаем список комнат
        return Response(serializer.data, status=status.HTTP_200_OK)

class DeleteCardAPIView(APIView):
    def delete(self, request, id_card, *args, **kwargs):
        """Удаление комнаты по ID"""
        try:
            # Пытаемся получить комнату по ID
            card = Card.objects.get(id=id_card)
        except Card.DoesNotExist:
            # Если комната не найдена, возвращаем ошибку
            raise NotFound(detail="Карта не найдена", code=status.HTTP_404_NOT_FOUND)

        # Удаляем комнату
        card.delete()

        # Возвращаем успешный ответ о том, что комната была удалена
        return Response({"message": f"Card {id_card} deleted successfully."}, status=status.HTTP_200_OK)