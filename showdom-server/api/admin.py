from django.contrib import admin
from .models import Media

# Register your models here.

# admin.site.register(Media)


@admin.register(Media)
class MediaModel(admin.ModelAdmin):
    list_filter = ('title', 'source')
    list_display = ('title', 'source')
    date_hierarchy = 'created_date'