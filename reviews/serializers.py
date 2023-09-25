from rest_framework import serializers
from reviews.models import Review
from comments.models import Comment


class ReviewSerializer(serializers.ModelSerializer):
    """
    Import extra fields to the instance and
    serialize the created and imported data.
    """
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    profile_image = serializers.ReadOnlyField(source='owner.profile.image.url')
    comments_count = serializers.ReadOnlyField()

    def validate_image(self, value):
        if value.size > 2 * 1024 * 1024:
            raise serializers.ValidationError('Image size larger than 2MB!')
        if value.image.height > 4096:
            raise serializers.ValidationError(
                'Image height larger than 4096px!'
            )
        if value.image.width > 4096:
            raise serializers.ValidationError(
                'Image width larger than 4096px!'
            )
        return value

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    class Meta:
        model = Review
        fields = [
            'id', 'owner', 'is_owner', 'profile_id',
            'profile_image', 'book_title', 'book_author', 'caption',
            'book_category', 'review_body', 'image',
            'rating', 'created_at', 'updated_at', 'comments_count'
        ]
