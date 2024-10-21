# art_api/views.py
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from diffusers import StableDiffusionPipeline
import torch
import base64
from io import BytesIO

# Create your views here.


# Set the device to GPU if CUDA is available, otherwise use CPU
device = "cuda" if torch.cuda.is_available() else "cpu"

# Load the pre-trained Stable Diffusion model from Stability AI and move it to the specified device
model = StableDiffusionPipeline.from_pretrained("stabilityai/stable-diffusion-2-base").to(device)



# Define a Django view to handle art generation requests, exempt from CSRF checks for API flexibility
@csrf_exempt
def generate_art(request, prompt):
    # Check if the request method is GET
    if request.method == 'GET':
        # Ensure no gradients are calculated to save memory and computations
        with torch.no_grad():
            # Generate an image based on the provided prompt using the pre-loaded model
            image = model(prompt).images[0]

        # Convert the PIL Image to a Base64-encoded PNG for easy transmission over HTTP
        buffered = BytesIO()
        image.save(buffered, format="PNG")
        img_str = base64.b64encode(buffered.getvalue()).decode()

        # Return the generated image as a JSON response with the image data encoded in Base64
        return JsonResponse({'image_data': img_str})
    else:
        # Return an error response if the request method is not GET
        return JsonResponse({'error': 'Invalid request method'}, status=400)
