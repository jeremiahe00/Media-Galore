from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.

class Media(models.Model):
    # owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='media')
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