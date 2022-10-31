from email import message
from django.db import models

import school

# Create your models here.
class contact(models.Model):
    name = models.CharField(max_length = 64)
    email = models.EmailField()
    subjects = models.CharField(max_length = 64)
    messages =models.CharField(max_length = 500)


def __str__(self):
    return f'{self.name}'
