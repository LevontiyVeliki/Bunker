from django.urls import path 
from .views import CreateCardAPIView, DeleteCardAPIView, MyCardsAPIView

urlpatterns = [
    path('/create_card/', CreateCardAPIView.as_view(), name='create_card'),  # Создание карты
    path('/my_cards/', MyCardsAPIView.as_view(), name='my_card'),  # Получение списка карт пользователя
    path('/my_card/<int:id_card>/delete/', DeleteCardAPIView.as_view(), name='delete_card'),
]
