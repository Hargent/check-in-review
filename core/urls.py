from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from drf_spectacular.views import (
SpectacularAPIView,
SpectacularRedocView, 
SpectacularSwaggerView
)


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api-auth/", include("rest_framework.urls")),
    path("api/", include("dj_rest_auth.urls")),
    path("api/registration/", 
        include("dj_rest_auth.registration.urls")),
    path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
    path("api/redoc/", SpectacularRedocView.as_view(
        url_name="schema"), name="redoc",),
    path("api/docs/", SpectacularSwaggerView.as_view(
        url_name="schema"), name="swagger-ui"),

   
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

