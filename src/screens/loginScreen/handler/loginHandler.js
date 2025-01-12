import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import {login} from "../actions/loginActions";

export const handleLogin = (e, username, password, dispatch) => {

    e.preventDefault();
    if (!username || !password){
        toast.error("Both Email and Password are required");
        return;
    }

    const normalizedUsername = username.includes("@")
        ? username.toLowerCase()
        : username;

    dispatch(login(normalizedUsername, password));
}