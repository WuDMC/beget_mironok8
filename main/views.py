from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def index(request):
    context = {
        'text' : {
            'buttonRu': 'Заказать',
            'buttonEn': 'Order now',
            'underButtonTextRu' : 'Метро Гражданский проспект',
            'underButtonTextEn' : 'Metro Grazhdanka'
        }
    }
    return render(request, 'main/index.html', context)


def news(request):
    return HttpResponse('Hello news')

