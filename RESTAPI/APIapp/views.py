from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import SyllDateFinder

# Create your views here.

def home(request):
    return render(request, 'home.html')

class cBasedAPI(APIView):

    # send data back as JSON

    def get(self, request):
        print "get called"
        data = {"data": "theData"}
        return Response(data)

    # to access data:       request.data[key]

    def post(self, request):
        data = request.data
        text = data['text']
        dict = SyllDateFinder.stringSplitter(text)
        return Response(dict)


