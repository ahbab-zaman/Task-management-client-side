# Task Pad

Task Pad is a simple and efficient task management application that allows users to manage their daily tasks. Users can add tasks to different statuses such as **To Do, In Progress, or Done**. They can also delete tasks or store them for long-term tracking.

🔗 **Live Demo**: [Task Pad](https://task-management-203b3.firebaseapp.com)

## 📑 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Installation](#-installation)
- [Usage](#-usage)
- [Dependencies](#-dependencies)
- [Development](#-development)
- [Contributing](#-contributing)
- [License](#-license)

## 🚀 Features

- Add tasks with different statuses (**To Do, In Progress, Done**)
- Drag and drop functionality for task management
- Delete or store tasks for long-term tracking
- Responsive and visually appealing UI
- Smooth animations with **Framer Motion**
- **Firebase** integration for real-time data management

## 🛠 Technologies Used

- **React** (v19)
- **React Router** (v7)
- **Tailwind CSS** (v4) & **DaisyUI**
- **Framer Motion** for animations
- **React Beautiful DnD** for drag-and-drop functionality
- **Firebase** for backend services
- **TanStack React Query** for efficient data fetching and caching
- **Axios** for API calls

### 📦 Dependencies

```json
"dependencies": {
"@dnd-kit/core": "^6.3.1",
"@headlessui/react": "^2.2.0",
"@tailwindcss/vite": "^4.0.8",
"@tanstack/react-query": "^5.66.7",
"axios": "^1.7.9",
"firebase": "^11.3.1",
"framer-motion": "^12.4.5",
"lucide-react": "^0.475.0",
"react": "^19.0.0",
"react-beautiful-dnd": "^13.1.1",
"react-dom": "^19.0.0",
"react-hot-toast": "^2.5.2",
"react-icons": "^5.5.0",
"react-router": "^7.2.0",
"react-router-dom": "^7.2.0",
"react-spinners": "^0.15.0",
"tailwindcss": "^4.0.8"
}

"devDependencies":{
    "@eslint/js": "^9.19.0",
    "@types/react": "^19.0.8",
    "@types/react-dom": "^19.0.3",
    "@vitejs/plugin-react": "^4.3.4",
    "daisyui": "^5.0.0-beta.8",
    "eslint": "^9.19.0",
    "eslint-plugin-react": "^7.37.4",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.18",
    "globals": "^15.14.0",
    "vite": "^6.1.0"
  }
```

## ⚙️ Installation

git clone https://github.com/your-username/task-pad.git
cd task-pad
npm install
npm run dev http://localhost:4000

## 🔧 Project Configuration

### Environment Variables:

To set up the environment for the application, use the following variables in your `.env` file:

```npm
VITE_apiKey=YOUR_FIREBASE_API_KEY
VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
VITE_projectId=YOUR_FIREBASE_PROJECT_ID
VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
VITE_appId=YOUR_FIREBASE_APP_ID
```
