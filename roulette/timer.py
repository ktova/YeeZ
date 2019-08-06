import tkinter as tk
import time
import random
import threading

TimerPhase = 1
y = 0

def randomtimer():
    global TimerPhase
    global y
    if y == 1:
        if TimerPhase == 1:
            ggnum = random.randint(0,36)
            print (ggnum)
            y -= 1
            return ggnum
        elif TimerPhase == 2:
            pass
        else:
            print('critical timefunc error')
    else: 
        print('wtf?')

def timerfunction():
    global TimerPhase
    global y
    while TimerPhase > 0:
        if TimerPhase == 1:
            y += 1
            xtimer = threading.Timer(3.0, randomtimer)
            TimerPhase += 1
            xtimer.start()
        elif TimerPhase == 2:
            y += 1
            xtimer = threading.Timer(6.0, randomtimer)
            TimerPhase -= 1
            xtimer.start()
        else:
            print ('critical error')