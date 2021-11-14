from rest_framework import viewsets, permissions  # added permissions

from .serializers import TodoSerializer
from todos.models import Todo


class TodoViewSet(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    permission_classes = [permissions.IsAuthenticated]  # added

    def get_queryset(self):  # added
        return self.request.user.todos.all()

    def perform_create(self, serializer):  # added
        serializer.save(owner=self.request.user)


