import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbAlytbbtC3FRcx9hpYjW0lPTVdDTh00g",
  authDomain: "care-bd6a7.firebaseapp.com",
  projectId: "care-bd6a7",
  storageBucket: "care-bd6a7.appspot.com",
  messagingSenderId: "547988464072",
  appId: "1:547988464072:web:eb9084daf336d2398f20fd",
}

// Initialize Firebase
initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
