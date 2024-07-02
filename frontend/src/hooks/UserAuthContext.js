import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState({});

    const auth = getAuth(app);

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }

    function register(email,password){
        createUserWithEmailAndPassword(auth,email,password);
    }

    function logOut(){
        return signOut(auth);
    }

    function googleSignin() {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Auth", currentUser);
            setUser(currentUser);
        });

        return() => {
            unsubscribe();
        };
    },[])

    return (
        <userAuthContext.Provider
        value={{ user, login, register, logOut, googleSignin }}
        >
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext);
}