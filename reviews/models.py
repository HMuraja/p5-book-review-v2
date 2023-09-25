from django.db import models
from django.contrib.auth.models import User


class Review(models.Model):
    """
    Review model, related to 'owner', i.e. a User instance.
    Default image set so that we can always reference image.url.
    """
    book_category_choices = [
        ('nonfiction', 'Non-Fiction'),
        ('fiction', 'Fiction'),
        ('historicalfiction', 'Historical Fiction'),
        ('romancenovel', 'Romance Novel'),
        ('horror', 'Horror'),
        ('sciencefiction', 'Science Fiction'),
        ('biography', 'Biography'),
        ('memoir', 'Memoir'),
        ('fantasy', 'Fantasy'),
        ('thriller', 'Thriller'),
        ('childrensliterature', "Children's Literature"),
        ('humor', 'Humor'),
        ('selfhelp', 'Self-help'),
        ('yougadultfiction', 'Young Adult Fiction'),
        ('picturebook', 'Picture Book'),
        ('other', 'Other')
    ]
    rate_choices = [
        (1, '1'),
        (2, '2'),
        (3, '3'),
        (4, '4'),
        (5, '5')
    ]

    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    book_title = models.CharField(max_length=255)
    book_author = models.CharField(max_length=255)
    caption = models.CharField(max_length=255)
    book_category = models.CharField(
        max_length=32, choices=book_category_choices, default='other'
    )
    review_body = models.TextField()
    image = models.ImageField(
        upload_to='images/', default='/review_placeholder_tceebf.jpg',
        blank=True
    )
    rating = models.CharField(
        max_length=32, choices=rate_choices, default=5
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.id} {self.title}'
