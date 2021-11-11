from django.db import models
from django.contrib.auth.models import AbstractUser


class TimeStamp(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class User(AbstractUser):
    pass

    # add additional fields in here

    def __str__(self):
        return self.username
