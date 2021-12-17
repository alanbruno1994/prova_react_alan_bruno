import { loginActions } from "@src/store/login"
import {useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom";

export default function useLogout()
{
    const dispatch=useDispatch();
    const navigate=useHistory()

    function logoutHandler()
    {      
        
        dispatch(loginActions.logout())  
        navigate.replace("/")
    }

    return logoutHandler
}