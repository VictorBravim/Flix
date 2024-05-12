# 🎬 Flix

![181shots_so](https://github.com/VictorBravim/Flix/assets/122113588/3bea0c8d-d8e0-4b6b-8290-3ad8993d18b1)

## 🚀 Overview

MoviesApp is a web application project aimed at providing users with a platform to discover and explore movies using The Movie Database (TMDb) API. This documentation provides guidelines on how to configure the project environment and use key features.

## 📋 Requirements

- Node.js
- npm (Node Package Manager)
- firebase
- framer-motion
- react-toastify
- react-icons

## 🔧 Installation

1. Clone this repository:
   
```
git clone https://github.com/VictorBravim/Flix.git
```

2. Navigate to the project directory:
   
```
cd Flix
```

3. Install dependencies:
   
```
npm install
```

4. Create a .env file in the project root directory and fill it with the following environment variables:
   
``` 
VITE_API_KEY=<SUA_TMDB_API_KEY>

VITE_FIREBASE_API_KEY=<SUA_FIREBASE_API_KEY>
VITE_FIREBASE_AUTH_DOMAIN=<SEU_FIREBASE_AUTH_DOMAIN>
VITE_FIREBASE_PROJECTID=<SEU_FIREBASE_PROJECTID>
VITE_FIREBASE_STORAGE_BUCKET=<SEU_FIREBASE_STORAGE_BUCKET>
VITE_FIREBASE_MESAGING_SENDER_ID=<SEU_FIREBASE_MESAGING_SENDER_ID>
APP_ID=<SEU_FIREBASE_ID>
```

Replace <YOUR_FIREBASE_API_KEY>, <YOUR_FIREBASE_AUTH_DOMAIN>, <YOUR_FIREBASE_PROJECTID>, <YOUR_FIREBASE_STORAGE_BUCKET> and <YOUR_FIREBASE_MESAGING_SENDER_ID> with the actual details of your Firebase project.

## 🛠️ Project Structure

- dotenv: Load environment variables from a .env file.
- firebase: Firebase SDK for authentication, cloud firestore and more.
- framer-motion: Animation library for React components.
- react: JavaScript library for building user interfaces.
- react-dom: React package for DOM rendering.
- react-firebase-hooks: React hooks for Firebase.
- react-helmet: React component to manage document header metadata.
- react-icons: Icon library for React applications.
- react-infinite-scroll-component: Infinite scroll component for React.
- react-lazy-load-image-component: Lazy loading of images in React.
- react-router-dom: DOM bindings for React Router.
- react-slugify: Utility to generate slugs from strings.
- react-toastify: Notification library for React.
- tailwind-scrollbar: Custom scrollbar styles for Tailwind CSS.

## 📄 License

- This project is licensed under the [MIT License](LICENSE).
