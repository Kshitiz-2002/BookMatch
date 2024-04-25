Here's how you can add setup instructions for the environmental variables `JWT_SECRET` and `MONGO_URI` to the README file:

---

# Book Recommendation System

## Overview

This is a book recommendation system web application built using Flask for the backend, Express for the API server, and React for the frontend.

## Setup

### API (Flask)

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/book-recommendation-system.git
   ```

2. Navigate to the backend directory:

   ```bash
   cd book-recommendation-system/backend
   ```

3. Create a virtual environment (optional but recommended):

   ```bash
   python3 -m venv venv
   ```

4. Activate the virtual environment:

   On macOS/Linux:

   ```bash
   source venv/bin/activate
   ```

   On Windows (PowerShell):

   ```bash
   .\venv\Scripts\Activate.ps1
   ```

5. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```



6. Run the Flask application:

   ```bash
   flask run
   ```

   The Flask backend server should now be running on `http://127.0.0.1:5000`.

### Backend Server (Express)

1. Navigate to the api-server directory:

   ```bash
   cd book-recommendation-system/api-server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the `api-server` directory with the following content:

   ```plaintext
   PORT=3001
   JWT_SECRET="your_secret_key_here"
   MONGO_URI="mongodb+srv://username:password@cluster0.0w5mn8q.mongodb.net/bookmatch"
   ```

   Replace `"your_secret_key_here"` with your actual JWT secret key and update `MONGO_URI` with your MongoDB connection URI.

4. Start the Express server:

   ```bash
   npm start
   ```

   The Express API server should now be running on `http://localhost:3000`.

### Frontend (React)

1. Navigate to the frontend directory:

   ```bash
   cd book-recommendation-system/frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the `frontend` directory with the following content:

   ```plaintext
   REACT_APP_API_URL=http://localhost:3000/api
   ```

   Replace `http://localhost:3000/api` with the URL of your Express API server if it's different.

4. Start the React development server:

   ```bash
   npm start
   ```

   The React frontend development server should now be running on `http://localhost:3000`.

## Usage

Open your web browser and navigate to `http://localhost:3001` to use the book recommendation system.

---

Make sure to replace placeholder values like `"your_secret_key_here"` and the MongoDB URI with your actual values.