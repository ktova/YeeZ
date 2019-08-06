from django.shortcuts import render
from django.shortcuts import redirect
from django.http import HttpResponseRedirect
from .forms import userForm
from .timer import randomtimer,timerfunction
import threading
import random

def index(request):
    return render(request, "mysite/homepage.html", {})

def login(request):
    return render(request, "mysite/loginpage.html", {})

def endgame(request):
    return render(request, "mysite/endpage.html", {})

def accueil(request):
    return render(request, "mysite/Basepage.html", {})

def getform(request):
    if request.method == "POST":
        form = userForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            creds = form.cleaned_data['creds']
            context = {
                'form': form,
                'name':name,
                'creds':creds,
            }
            return render(request, 'mysite/homepage.html', context)   
        
    else:
        form = userForm()

    return render(request, 'mysite/loginpage.html', {'form': form})        


