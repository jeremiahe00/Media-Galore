from rest_framework import serializers
from .models import Media



class MediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media
        fields = ['id', 'title', 'source', 'created_date', 'updated_date']
        