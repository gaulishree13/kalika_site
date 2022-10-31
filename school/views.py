from django.shortcuts import redirect, render

from school.models import contact

# Create your views here.
def index(request):
    return render(request,'base.html')



def contacts(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        subjects = request.POST['subjects']
        messages = request.POST['messages']

        cont = contact.objects.create(name=name,email=email,subjects=subjects,messages=messages)
        cont.save();
        return redirect('/')

    return render(request,'contact.html')    