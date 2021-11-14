from django.db import models
from django.contrib.auth import get_user_model  # added
User = get_user_model()


class Todo(models.Model):
    task = models.CharField(max_length=255)
    owner = models.ForeignKey(
        User, related_name="todos", on_delete=models.CASCADE, null=True)  #added
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.task