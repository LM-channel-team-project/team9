import firebase from "firebase/app";
import "firebase/firestore";

// firebase 설정과 관련된 개인 정보
const firebaseConfig = {
    apiKey: "AIzaSyDRFez1Xd4UHhDu-OxFaH6R_1iZqO0AiHI",
    authDomain: "fb-project-64c0d.firebaseapp.com",
    databaseURL: "https://fb-project-64c0d-default-rtdb.firebaseio.com",
    projectId: "fb-project-64c0d",
    storageBucket: "fb-project-64c0d.appspot.com",
    messagingSenderId: "915831451095",
    appId: "1:915831451095:web:633143021e455fbf61af92",
    measurementId: "G-EB58R4WM06"
};

// firebaseConfig의 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();


// 필요한 곳에서 쓸 수 있도록 내보내줌
export {firestore};