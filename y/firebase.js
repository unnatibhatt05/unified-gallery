import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyChCbRDPV0YTVTiKdICYT4oKSs3dMuhc5I",
    authDomain: "unified-gallery.firebaseapp.com",
    projectId: "unified-gallery",
    storageBucket: "unified-gallery.firebasestorage.app",
    messagingSenderId: "221512006324",
    appId: "1:221512006324:web:6111e89f5a95198ec535e1"
  };
const app = initializeApp(firebaseConfig);
export default app;