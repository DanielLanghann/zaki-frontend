import {
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_EXECUTED
} from "../constants/logoutConstants";

export const logoutReducer = (state = {}, action) => {
    switch (action.type){
        case USER_LOGOUT_REQUEST:
            return {...state, loadingLogout: true};
        case USER_LOGOUT_EXECUTED:
            return {};
        default:
            return state;
    }
}