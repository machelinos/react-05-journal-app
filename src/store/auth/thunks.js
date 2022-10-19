import { googleSignIn, loginWithEmailAndPassword, registerWithEmailAndPassword } from "../../firebase/providers";
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