from django.contrib import admin
from .models import Media, ProfilePhoto, UserProfile

# Register your models here.

# admin.site.register(Media)


# @admin.register(User)
# class UserModel(admin.ModelAdmin):
#     list_filter = ('firstName', 'lastName', 'username', 'email')
#     list_display = ('firstName', 'lastName', 'username', 'email')
    
    
@admin.register(Media)
class MediaModel(admin.ModelAdmin):
    list_filter = ('title', 'source', 'created_date')
    list_display = ('title', 'source', 'created_date')
    date_hierarchy = 'created_date'
    
    
@admin.register(ProfilePhoto)
class ProfilePhotoModel(admin.ModelAdmin):
    list_filter = ('id', 'photo')
    list_display = ('id', 'photo')
    

@admin.register(UserProfile)
class ProfilePhotoModel(admin.ModelAdmin):
    list_filter = ('id', 'profile_photo')
    list_display = ('id', 'profile_photo')

    