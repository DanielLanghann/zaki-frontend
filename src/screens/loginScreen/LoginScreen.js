import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CustomInput from "../../globalComponents/CustomInput";
import CustomPrimaryButton from "../../globalComponents/CustomPrimaryButton";
import CustomLoadingSpinner from "../../globalComponents/CustomLoadingSpinner";

import {handleLogin} from "./handler/loginHandler";

const LoginScreen = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = useSelector((state) => state.login);
    const { loading, error, userInfo } = login;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onLogin = (e) => {
        handleLogin(e, username, password, dispatch);
    };

    useEffect(()=> {
        if (userInfo) {
            navigate("/home");
        }
        if (error){
            toast.error(error[0]);
        }
    })

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-700 font-markpro">
            <div className="bg-gray-800 p-12 rounded-lg shadow-lg w-full max-w-4xl text-white">
                <div className="text-center mb-10">
                    <h4 className="text-5xl font-bold text-green-400">
                        zAkI AI
                    </h4>
                </div>
                <form onSubmit={onLogin}>
                    <CustomInput
                        label="Email or Username"
                        id="username"
                        type="text"
                        placeholder="Enter your email or username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <div className="relative">
                        <CustomInput
                            label="Password"
                            id="password"
                            type={"password"}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <CustomPrimaryButton
                        type="submit"
                        disabled={loading}
                        fullWidth="false"
                        margin="mt-4"
                    >
                        {loading ? (
                            <CustomLoadingSpinner size={6} text="Logging in..."/>
                        ) : (
                            "Login"
                        )}
                    </CustomPrimaryButton>
                </form>
            </div>
        </div>
    );
};
export default LoginScreen;