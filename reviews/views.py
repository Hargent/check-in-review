from rest_framework.views import APIView
from rest_framework.response import Response
from  rest_framework import status, generics
from .serializers import ReviewSerializer
from rest_framework.permissions import AllowAny
class ReviewSubmissionView(generics.CreateAPIView):

    permission_classes = [AllowAny]
    serializer_class = ReviewSerializer
    

    """
    API endpoint for submitting weekly review.

    Accepts POST requests with JSON data representing feedback for the week.

    Example JSON data:
    {
        "week_ending": "2023-12-01",
        "task_execution_completed": true,
        "task_execution_challenges": "Overcame challenges...",
        "task_execution_examples": "Worked on project X...",
        "creativity_demonstrated": true,
        ...
        "overall_score": 85,
        "overall_score_factors": "Positive communication, good time management."
    }
    """
    
    # def post(self, request, *args, **kwargs):

    #     serializer = ReviewSerializer(data=request.data)
    #     user = request.user
    #     if serializer.is_valid():
    #         serializer.save(user=user)
    #         return Response({"message": "Review submitted succesfully"}, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)