import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import {
    loginReducer,
} from "./screens/loginScreen/reducer/loginReducer";
import {logoutReducer} from "./screens/navigation/reducer/logoutReducer";

const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const initialState = {
    login: { userInfo: userInfoFromStorage },
};

const store = configureStore({
    reducer: {
        login: loginReducer,
        logout: logoutReducer,
    },
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
export default store;