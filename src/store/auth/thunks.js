import { googleSignIn } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication = ({email, password})=>{
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