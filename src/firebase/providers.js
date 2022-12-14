import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider =  new GoogleAuthProvider();

export const googleSignIn = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);

        const { displayName, email, photoURL, uid } = result.user;
        
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
        
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
} 

export const registerWithEmailAndPassword = async (email, displayName, password) =>{
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);

        const { photoURL, uid } = resp.user;

        await updateProfile(FirebaseAuth.currentUser, {displayName});

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
        
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        return {
            ok: false,
            errorCode,
            errorMessage
        }
        
    }
}

export const loginWithEmailAndPassword = async (email, password) => {
    try {

        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);

        const { displayName, photoURL, uid } = resp.user;
        
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }


    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        return {
            ok: false,
            errorCode,
            errorMessage
        }
        
    }
}

export const logoutFirebase = async () => {
    try {
        await FirebaseAuth.signOut();
        
        return {
            ok: true,
            errorMessage: null
        }        
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        return {
            ok: false,
            errorCode,
            errorMessage
        }
        
        
    }
}