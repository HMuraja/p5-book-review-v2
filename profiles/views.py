from rest_framework import generics, permissions
from .models import Profile
from .serializers import ProfileSerializer


class ProfileList(generics.ListAPIView):
    """
    Extends genric views from rest framework.
    Using ListAPIView as using get method only
    profile methods are created when new user signsup.
    """
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class ProfileDetail(generics.RetrieveUpdateAPIView):
    """
    Generic view RetrieveUpdateAPIView, retrieves and
    edits the profile fetched.
    """
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
