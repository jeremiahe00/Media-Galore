from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.

# class User(models.Model):
#     firstName = models.CharField(max_length=100)
#     lastName = models.CharField(max_length=100)
#     username = models.CharField(max_length=100)
#     email = models.EmailField(max_length=100, unique=True)
    
    
#     def __str__(self):
#         return self.username
    
    
    
class Media(models.Model):
    # owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='media', null=True) # remove null=true and figure out solution?
    title = models.CharField(max_length=100)
    class Source(models.TextChoices):
        NETFLIX = "NF", _("Netflix")
        AMAZONPRIME = "AM", _("Amazon Prime")
        CRUNCHYROLL = "CR", _("Crunchyroll")
        YOUTUBE = "YT", _("Youtube")
        DISNEYP = "DP", _("Disney+")
        HBO = "HB", _("HBO")
        HULU = "HL", _("Hulu")
        APPLE = "AP", _("Apple")
        OTHER = "OT", _("Other")
    source = models.CharField(
        max_length=2,
        choices=Source.choices,
    )
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    
    
    def __str__(self):
        return self.title
    
    
    
class ProfilePhoto(models.Model):
    photo = models.ImageField(upload_to='Photos/')
    
    
    
class UserProfile(models.Model):
    # user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_photo = models.OneToOneField(ProfilePhoto, on_delete=models.SET_NULL, null=True, blank=True)
