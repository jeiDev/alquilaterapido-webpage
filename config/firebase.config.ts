import { initializeApp } from "firebase/app";

const connectFirebase = () => { 
    try {
        const firebaseConfig = {
            apiKey: "AIzaSyAsJWY-TZDc0AJdHKS40q7M71kSJ_MZv6g",
            authDomain: "alquilate-rapido.firebaseapp.com",
            projectId: "alquilate-rapido",
            storageBucket: "alquilate-rapido.appspot.com",
            messagingSenderId: "709439587483",
            appId: "1:709439587483:web:b483487481f4087cfff23e"
        };
        // 3A62DEF7-FCCB-4351-92D5-551EDAA78324
        return initializeApp(firebaseConfig);

    } catch (error) {
        console.log("Error connect firebase", {error});
    }
}

export default connectFirebase;