from django.urls import path

from .views import ReviewSubmissionView

urlpatterns = [
    path("review/", ReviewSubmissionView.as_view(), name="review")
]