from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def index(request):
    context = {
        'text' : {
            'buttonRu': 'Как это работает?',
            'buttonEn': 'How it works?',
            'underButtonTextRu' : 'Cервис работает на базе telegram.',
            'underButtonTextEn' : 'Service works on telegram base.'
        }
    }
    return render(request, 'main/index.html', context)


def news(request):
    return HttpResponse('Hello news')

