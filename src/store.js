import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import {
    loginReducer,
} from "./screens/loginScreen/reducer/loginReducer";

const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};

const store = configureStore({
    reducer: {
        login: loginReducer,
    },
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
export default store;