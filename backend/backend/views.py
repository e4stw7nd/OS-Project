from django.http import JsonResponse,HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
import time

from deepgram import Deepgram
import asyncio, json, os

def transcribe(audio_file):

  dg_key = '47751687a6d15fd18e646296e27333fdefb348dc'
  dg = Deepgram(dg_key)
  MIMETYPE = 'webm'
  DIRECTORY = '.'

  params = {
      "punctuate": True,
      "model": 'general',
      "tier": 'nova'
  }

  if audio_file.endswith(MIMETYPE):
    with open(f"{DIRECTORY}/{audio_file}", "rb") as f:
      source = {"buffer": f, "mimetype":'audio/'+MIMETYPE}
      res = dg.transcription.sync_prerecorded(source, params)
      with open(f"./{audio_file[:-4]}.json", "w") as transcript:
        json.dump(res, transcript)

  transcript = f"./{audio_file[:-4]}.json"

  with open(transcript, "r") as file:
    data = json.load(file)
    result = data['results']['channels'][0]['alternatives'][0]['transcript']
    return result

@csrf_exempt
def converToText(req):
    if (req.method=='POST'):
        # file=req.FILES['voice']
        # print(file)
        # default_storage.save("backend/"+file.name,file)
        # backend\newvoice672.webm
        # backend\newvoice672.webm
        # res=transcribe("backend/"+file.name)
      return JsonResponse({"text":"Message sent"})

@csrf_exempt
def action(req):
    if (req.method=='POST'):
        file=req.FILES.get('voice')
        print(file)
        default_storage.save("backend/"+file.name,file)
        # backend\newvoice672.webm
        # backend\newvoice672.webm
        res=transcribe("backend/"+file.name)
        # os.remove("backend/"+file.name)
    # return JsonResponse({"text":res})
        print("RESPONSE",res)
        if not res:
           res="No Commands Recieved"
    return JsonResponse({"status":res})

def home(req):
    return HttpResponse("HELLO")