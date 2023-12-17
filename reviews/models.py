from django.contrib.auth import get_user_model
from django.db import models

class Feedback(models.Model):

    DEPARTMENTS ={
    "develop": "Develop",
    "design": "Design",
    "deploy": "Deploy"
    }

    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name="feedback_entries")
    department = models.CharField(max_length=100, choices=DEPARTMENTS)
    week_ending = models.DateField()
    task_execution_completed = models.TextField()
    task_execution_challenges = models.TextField()
    task_execution_examples = models.TextField()

    creativity_demonstrated = models.TextField()
    creativity_approach = models.TextField()
    creativity_instances = models.TextField()

    communication_effectiveness = models.TextField()
    communication_clarity = models.TextField()
    communication_participation = models.TextField()

    collaboration_willingness = models.TextField()
    collaboration_examples = models.TextField()
    collaboration_contribution = models.TextField()

    initiative_proactive = models.TextField()
    initiative_instances = models.TextField()
    initiative_areas = models.TextField()

    adaptability_well = models.TextField()
    adaptability_challenges = models.TextField()
    adaptability_examples = models.TextField()

    technical_skills_proficiency = models.TextField()
    technical_skills_improvement = models.TextField()
    technical_skills_assistance = models.TextField()

    problem_solving_examples = models.TextField()
    problem_solving_support = models.TextField()

    time_management_efficiency = models.TextField()
    time_management_challenges = models.TextField()
    time_management_prioritization = models.TextField()

    professionalism_punctuality = models.TextField()
    professionalism_concerns = models.TextField()
    professionalism_examples = models.TextField()

    strengths = models.TextField()
    areas_for_improvement = models.TextField()
    specific_goals = models.TextField()
    team_support = models.TextField()

    overall_score = models.IntegerField()
    overall_score_factors = models.TextField()

    class Meta:
        verbose_name = "Feedback Entry"
        verbose_name_plural = "Feedback Entries"


    def __str__(self):
        return f"Feedback for {self.user.username} - {self.week_ending}"