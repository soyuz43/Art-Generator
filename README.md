# Art-Generator

Art-Generator is a web-based application that allows users to input text prompts to generate unique digital artworks using the Stable Diffusion model. This project aims to provide an accessible interface for creative expression and exploration of AI-driven art generation.

## Features
- **Text-to-Art Generation:** Convert textual descriptions into stunning images.
- **Real-Time Interaction:** Immediate feedback with generated images based on user input.
- **Responsive Design:** Accessible on various devices, ensuring a wide accessibility.

## Technologies Used
- **Frontend:** React, React Router
- **Backend:** Django, Django REST Framework
- **AI Model:** Stable Diffusion using the `diffusers` library
- **Deployment:** (Specify deployment details, e.g., Docker, AWS, Heroku if applicable)

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/soyuz43/Art-Generator.git
   ```
2. Install dependencies:
   - Frontend:
     ```
     cd frontend
     npm install
     ```
   - Backend:
     ```
     cd backend
     conda install environment.yml
     ```

## Usage
To start the server, navigate to the backend directory and run:
```
python manage.py runserver
```
To start the React frontend, navigate to the frontend directory and run:
```
npm start
```
Visit `http://localhost:3000` in your browser to view the app.

## Configuration
Explain any configurations that can be adjusted within the app, such as environmental variables or settings in `settings.py`. (Add specific details if needed)

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/soyuz43/Art-Generator/blob/main/LICENSE.md) file for details.

## Contact Information
- **Creator:** Your Name
- **Email:** youremail@example.com
- **Project Link:** https://github.com/soyuz43/Art-Generator

