from rest_framework import serializers
from .models import Media
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token 


class MediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media
        fields = ['id', 'title', 'source', 'created_date', 'updated_date']
        
        
        
        
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password'] #, 'first_name', 'last_name']
        
        extra_kwargs = {'password':{
            'write_only':True,
            'required':True
        }}
        
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user