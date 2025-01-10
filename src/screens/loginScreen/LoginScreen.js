import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CustomInput from "../../globalComponents/CustomInput";
import CustomPrimaryButton from "../../globalComponents/CustomPrimaryButton";
import CustomLoadingSpinner from "../../globalComponents/CustomLoadingSpinner";

import {handleLogin} from "./handler/loginHandler";

const LoginScreen = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    const navigate = useNavigate();

    const onLogin = (e) => {
        handleLogin(e, username, password);
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
        <div className="min-h-screen flex items-center justify-center bg-gray-900 font-markpro">
            <div className="bg-gray-800 p-12 rounded-lg shadow-lg w-full max-w-4xl text-white">
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-bold text-green-400">
                        Welcome to zAkI your personal BI Assistant
                    </h1>
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
                        fullWidth="true"
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