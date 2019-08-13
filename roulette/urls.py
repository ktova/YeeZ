from django.urls import path
from roulette import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('index', views.index, name='index'),
    path('home', views.getform, name='login'),
    path('end', views.endgame, name='gamend'),
    path('', views.accueil, name='accueil'),
    path('stats', views.stats, name='stats'),
    path('test',views.canvastesting, name='cantest'),
]