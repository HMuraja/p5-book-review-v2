from django.db import models
from django.contrib.auth.models import User


class Follower(models.Model):
    """
    Follower model is instance created and owner
    attribute is automatically assigned to be the
    logged in user's id.
    The followed value will be the user id of the user
    followed.
    Related_name attribute helps django differentiate
    between 'owner' and 'followed' who both are User model instances.
    'unique_together' prevent same user double following the same id.
    """
    owner = models.ForeignKey(
        User, related_name='following', on_delete=models.CASCADE
    )
    followed = models.ForeignKey(
        User, related_name='followed', on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        unique_together = ['owner', 'followed']

    def __str__(self):
        return f'{self.owner} {self.followed}'
