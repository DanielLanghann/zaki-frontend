import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import {login} from "../actions/loginActions";
import {useDispatch} from "react-redux";

export const handleLogin = (e, username, password) => {
    const dispatch = useDispatch();
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