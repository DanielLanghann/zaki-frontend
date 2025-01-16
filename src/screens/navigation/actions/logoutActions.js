import {USER_LOGOUT_REQUEST, USER_LOGOUT_EXECUTED} from "../constants/logoutConstants";
import {logInRoute} from "../../../utils/routes";
import {userInfoItem} from "../../loginScreen/actions/loginActions";
import {apiLogoutUrl} from "../../../utils/urls";
import axios from "axios";

const performLogOutSuccess =  (dispatch) => {
    dispatch({type: USER_LOGOUT_EXECUTED});
    localStorage.removeItem(userInfoItem);
    window.location.href = logInRoute;
}

export const logout = () => async (dispatch, getState) => {
    try {
        dispatch({type: USER_LOGOUT_REQUEST});
        const {
            login: { userInfo },
        } = getState();
        if (!userInfo || !userInfo.access){
            console.log("No access data given!")
             performLogOutSuccess(dispatch)
            return;
        }
        const axiosConfig = {
            headers: { Authorization: `Bearer ${userInfo.access}`},
        };
        await axios.post(apiLogoutUrl, {}, axiosConfig);
        performLogOutSuccess(dispatch);
    }catch (error){
        performLogOutSuccess(dispatch);
    }
}