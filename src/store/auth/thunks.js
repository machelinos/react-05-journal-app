import { googleSignIn, loginWithEmailAndPassword, logoutFirebase, registerWithEmailAndPassword } from "../../firebase/providers";
import { clearNotesLogout } from "../journal";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication = ()=>{
    return async (dispatch)=>{
        dispatch(checkingCredentials());
    }
}

export const checkingGoogleSignInAuthentication = () => {
    return async (dispatch)=>{
        dispatch(checkingCredentials());

        const resp = await googleSignIn();

        if(!resp.ok) {
            return dispatch(logout(resp));
        }

        return dispatch(login(resp));
        
    }
}

export const registeringWithEmailAndPassword = ({email, displayName, password}) => {
    return async (dispatch) =>{
        dispatch(checkingCredentials());

        const resp = await registerWithEmailAndPassword(email, displayName, password);

        if(!resp.ok){
            return dispatch(logout(resp));
        }

        return dispatch(login(resp));

    }
}

export const startLoginWithEmailAndPassword = ({email, password}) =>{
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const resp = await loginWithEmailAndPassword(email, password);

        if(!resp.ok){
            return dispatch(logout(resp));
        }

        return dispatch(login(resp));

    }
}

export const startLogout = () => {
    return async (dispatch) => {
        const resp = await logoutFirebase();
        dispatch(clearNotesLogout());
        return dispatch(logout(resp));
    }
}