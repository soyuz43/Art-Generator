from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from diffusers import StableDiffusionPipeline
import torch
import base64
from io import BytesIO

# Create your views here.
# art_api/views.py

device = "cuda" if torch.cuda.is_available() else "cpu"
model = StableDiffusionPipeline.from_pretrained("stabilityai/stable-diffusion-2-base").to(device)

# art_api/views.py

@csrf_exempt
def generate_art(request, prompt):
    if request.method == 'GET':
        with torch.no_grad():
            image = model(prompt).images[0]

        # Convert image to base64
        buffered = BytesIO()
        image.save(buffered, format="PNG")
        img_str = base64.b64encode(buffered.getvalue()).decode()

        return JsonResponse({'image_data': img_str})
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)
