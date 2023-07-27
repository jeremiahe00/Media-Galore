from django.shortcuts import render, HttpResponse
from .models import Media
from .serializers import MediaSerializer
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import APIView

# Create your views here.

class MediaList(APIView):
    
    def get(self, request):
        medias = Media.objects.all()
        serializer = MediaSerializer(medias, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = MediaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    
class MediaDetails(APIView):
    
    def get_object(self, id):
        try: 
            return Media.objects.get(id=id)
        
        except Media.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
    def get(self, request, id):
        media = self.get_object(id)
        serializer = MediaSerializer(media)
        return Response(serializer.data)
    
    def put(self, request, id):
        media = self.get_object(id)
        serializer = MediaSerializer(media, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id):
        media = self.get_object(id)
        media.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

'''
@api_view(['GET', 'POST'])
def media_list(request):
    if request.method == 'GET':
        medias = Media.objects.all()
        serializer = MediaSerializer(medias, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        # data = JSONParser().parse(request)
        serializer = MediaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    
# get by ID or get by show name? ID for now

@api_view(['GET', 'PUT', 'DELETE'])
def media_details(request, pk): 
    try: 
        media = Media.objects.get(pk=pk)
        
    except Media.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    
    if request.method == 'GET':
        serializer = MediaSerializer(media)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        # data = JSONParser().parse(request)
        serializer = MediaSerializer(media, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        media.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
'''