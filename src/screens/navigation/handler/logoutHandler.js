import {logout} from "../actions/logoutActions";
export const handleLogout = (dispatch) => {
    console.log("Handle Logout");
    dispatch(logout());
}