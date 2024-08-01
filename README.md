# Full Stack Application Setup

This project is a full-stack application involving a Python backend and a React frontend. The backend provides API endpoints, while the frontend is built with React, using Tailwind CSS for styling and React Router for navigation.

## Project Structure

The project directory contains the following main folders:

1. `backend`: Contains the Python code for the backend API.
2. `env`: Virtual environment for the Python backend.
3. `frontend`: Contains the React project named `auth-app`.

## Getting Started

Follow the steps below to set up and run the project locally.

### Backend Setup

1. **Create a Virtual Environment:**

    ```bash
    python -m venv env
    ```

2. **Activate the Virtual Environment:**

    - For Windows:

        ```bash
        env\Scripts\activate
        ```

    - For macOS/Linux:

        ```bash
        source env/bin/activate
        ```

3. **Install the Required Python Packages:**

    Navigate to the `backend` directory and install the dependencies:

    ```bash
    cd backend
    pip install -r requirements.txt
    ```

### Frontend Setup

4. **Create the React App:**

    Navigate to the directory where you want to create the React app and run:

    ```bash
    npx create-react-app auth-app
    ```

5. **Copy Custom Pages:**

    Copy the files inside the `Pages` folder and paste them into the `auth-app/src` folder.

6. **Navigate to the React Project:**

    ```bash
    cd auth-app
    ```

7. **Install React Router:**

    ```bash
    npm install react-router-dom
    ```

8. **Install and Configure Tailwind CSS:**

    - Install Tailwind CSS:

        ```bash
        npm install -D tailwindcss
        npx tailwindcss init -p
        ```

    - **Configure Tailwind:**

        Add the paths to all of your template files in your `tailwind.config.js` file.

    - **Add Tailwind Directives:**

        Open the `index.css` file in `auth-app/src` and add the following lines:

        ```css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```

### Running the Application

9. **Run the Backend Server:**

    Open a new terminal, navigate to the `backend` directory, and start the server using Uvicorn:

    ```bash
    cd backend
    uvicorn main:app --reload
    ```

10. **Run the Frontend Application:**

    In another terminal, navigate to the `auth-app` directory and start the React development server:

    ```bash
    cd auth-app
    npm start
    ```

## Conclusion

By following these steps, you will have both the backend and frontend servers running locally. The backend provides the necessary APIs, while the frontend interacts with the backend to deliver a full-stack application experience.
