import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";

export const useAuthStatus = () => {
    const { status } = useSelector(state=>state.auth);
    const dispatch = useDispatch();
  
    useEffect(() => {
      onAuthStateChanged(FirebaseAuth, async (user)=>{
        if(!user) return dispatch(logout());
  
        const { displayName, uid, email, photoURL} = user;
        return dispatch(login({displayName, uid, email, photoURL}));
      });
    }, [])
    
    return {
        status
    }

}
