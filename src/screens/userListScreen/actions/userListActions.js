import {USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS} from "../constants/userListConstants";
import axios from "axios";
import {apiUserListUrl} from "../../../utils/urls";

export const fetchAllUser = () => async (dispatch, getState) => {
    try {
        dispatch({type: USER_LIST_REQUEST});
        const {
            login: {userInfo},
        }=getState();

        if (!userInfo || !userInfo.access){
            throw new Error("No access token found");
        }

        const axiosConfig = {
            headers: { Authorization: `Bearer ${userInfo.access}`},
        }

        const { data } = await axios.get(apiUserListUrl, axiosConfig);
        dispatch({type: USER_LIST_SUCCESS, payload: data});

    }catch (error){
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: USER_LIST_FAIL,
            payload: message
        });
    }
}