import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyAqzzD2jq9d7BvDhNjxLUP5BGiUQHEYFzc",
    authDomain: "twitter-clone-6bb80.firebaseapp.com",
    projectId: "twitter-clone-6bb80",
    storageBucket: "twitter-clone-6bb80.appspot.com",
    messagingSenderId: "381819685242",
    appId: "1:381819685242:web:103fbef2b9e80b23c8eec3",
    measurementId: "G-3K9QKXG2C7"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;