import { initializeApp } from "firebase/app";

const connectFirebase = () => { 
    try {
        const firebaseConfig = {
            apiKey: "AIzaSyB7KeTbWbwREzGgiu8SWL-a8mFkQlJty0Y",
            authDomain: "alquilaterapido.firebaseapp.com",
            projectId: "alquilaterapido",
            storageBucket: "alquilaterapido.appspot.com",
            messagingSenderId: "514078944570",
            appId: "1:514078944570:web:67142141dff0821c4af403"
          };
        // 3A62DEF7-FCCB-4351-92D5-551EDAA78324
        return initializeApp(firebaseConfig);

    } catch (error) {
        console.log("Error connect firebase", {error});
    }
}

export default connectFirebase;