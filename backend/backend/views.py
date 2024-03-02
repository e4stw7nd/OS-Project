from django.http import JsonResponse,HttpResponse
from django.views.decorators.csrf import csrf_exempt
import time

@csrf_exempt
def converToText(req):
    if (req.method=='POST'):
        file=req.FILES['voice']
        print(file)
        time.sleep(2)
    return JsonResponse({"text":"will be decoded soon"})

@csrf_exempt
def action(req):
    command=req.POST.get('action')
    time.sleep(2)
    return JsonResponse({"action":command,"status":"unsuccessful"})

def home(req):
    return HttpResponse("HELLO")