from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def health_check(request):
        return Response(data='Healthy', status=status.HTTP_200_OK)
