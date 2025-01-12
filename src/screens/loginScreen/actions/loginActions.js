import axios from "axios";

import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL, noTokenMessage
} from "../constants/loginConstants";
import {apiLoginUrl} from "../../../utils/urls";

export const userInfoItem = "userInfo"
export const login = (username, password) => async (dispatch) => {
    try {
        dispatch({type: USER_LOGIN_REQUEST});
        const { data } = await axios.post(apiLoginUrl, {username, password});
        if(!data || !data.access) {
            throw new Error(noTokenMessage);
        }
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data});
        localStorage.setItem(userInfoItem, JSON.stringify(data));

    }catch (error){
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        });
    }
};

