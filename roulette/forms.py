from django import forms
from django.core.validators import MaxValueValidator, MinValueValidator
from crispy_forms.helper import FormHelper

class userForm(forms.Form):
    name = forms.CharField(label='Playername', max_length=30)
    creds = forms.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(100)])

    def __init__(self, *args, **kwargs):
        super(userForm, self).__init__(*args, **kwargs)
        for visible in self.visible_fields():
            visible.field.widget.attrs['class'] = 'formfield'
