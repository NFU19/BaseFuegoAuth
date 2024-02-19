
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVDdPie7qiuqo0-oDyo7jQ1vTOCUJSskY",
  authDomain: "urislogin.firebaseapp.com",
  projectId: "urislogin",
  storageBucket: "urislogin.appspot.com",
  messagingSenderId: "917140546350",
  appId: "1:917140546350:web:cfd85ab7ce3751c63410bf"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)