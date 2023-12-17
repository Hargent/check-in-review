from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from dj_rest_auth.registration.views import RegisterView
from dj_rest_auth.views import LoginView, LogoutView, UserDetailsView
from drf_spectacular.views import (
SpectacularAPIView,
SpectacularRedocView, 
SpectacularSwaggerView
)


urlpatterns = [
    path('admin/', include('admin_honeypot.urls', namespace='admin_honeypot')),
    path("management/", admin.site.urls),

     path("api/registeration/", RegisterView.as_view(), name="rest_register"),
    path("api/login/", LoginView.as_view(), name="rest_login"),
    path("api/logout/", LogoutView.as_view(), name="rest_logout"),
    path("api/user/", UserDetailsView.as_view(), name="rest_user_details"),

    path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
    path("api/redoc/", SpectacularRedocView.as_view(
        url_name="schema"), name="redoc",),
    path("api/docs/", SpectacularSwaggerView.as_view(
        url_name="schema"), name="swagger-ui"),

    path("api/", include("reviews.urls"))

   
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

