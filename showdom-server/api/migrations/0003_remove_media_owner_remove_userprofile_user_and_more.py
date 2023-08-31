# Generated by Django 4.2.3 on 2023-07-27 16:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_profilephoto_user_userprofile_media_owner'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='media',
            name='owner',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='user',
        ),
        migrations.AlterField(
            model_name='profilephoto',
            name='photo',
            field=models.ImageField(upload_to='Photos/'),
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]
