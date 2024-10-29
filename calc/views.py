from django.shortcuts import render

# Create your views here.
def Home(request):
    return render(request, "index.html")

def CalcIMC(request):
    return render(request, "calcIMC.html")