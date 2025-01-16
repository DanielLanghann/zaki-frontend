import {serverConfig} from "./serverConfig";

export const apiBaseUrl = `${serverConfig.PROTOCOL}://${serverConfig.HOST}:${serverConfig.PORT}/api/`

// Authentication and User Management
export const apiAccountsUrl = `${apiBaseUrl}accounts/`
export const apiLoginUrl = `${apiAccountsUrl}login`
export const apiLogoutUrl = `${apiAccountsUrl}logout`
export const apiUserListUrl = `${apiAccountsUrl}get_user_accounts`