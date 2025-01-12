import {serverConfig} from "./serverConfig";

export const apiBaseUrl = `${serverConfig.PROTOCOL}://${serverConfig.HOST}:${serverConfig.PORT}/api/`
export const apiAccountsUrl = `${apiBaseUrl}accounts/`
export const apiLoginUrl = `${apiAccountsUrl}login`
export const apiLogoutUrl = `${apiAccountsUrl}logout`