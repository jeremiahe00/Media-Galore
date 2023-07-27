from django.http import JsonResponse


def health_check(request):
    return HttpResponse(status=200)
