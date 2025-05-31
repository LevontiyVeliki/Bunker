from rest_framework import serializers
from .models import Card

        
class CardSerializer(serializers.ModelSerializer):

    class Meta:
        model = Card
        fields = ['id', 'age', 'sex', 'name','bodytype', 'personality', 'profession', 'health', 'hobby', 'phobia', 'largeInventory', 'backpack', 'additionalInformation', 'specialFeature']
