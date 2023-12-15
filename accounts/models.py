from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    DEPARTMENTS ={
    "develop": "develop",
    "design": "design",
}
    
    full_name = models.CharField(null=True, blank=True,  max_length=100)
    department = models.CharField(max_length=100, choices=DEPARTMENTS)
