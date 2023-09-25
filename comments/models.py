from django.db import models
from django.contrib.auth.models import User
from reviews.models import Review


class Comment(models.Model):
    """
    Comment model has related fields review, related to Review
    and owner related to User.
    """
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    review = models.ForeignKey(
         Review, related_name='comment', on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    content = models.TextField()

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.content
