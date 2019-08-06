from django.template import Template
from .views import getform
from django.shortcuts import render
from django.template import Context
from django.conf import settings

def playername(request):
    minbet = 0
    round = 0
    winum = 36
    variables = {
        'mbx': minbet,
        'rx': round,
        'winonum': winum,
    }
    return variables