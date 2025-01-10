const serverConfig = {
    PROTOCOL: process.env.REACT_APP_PROTOCOL,
    HOST: process.env.REACT_APP_HOST,
    PORT: process.env.REACT_APP_PORT,
};


export const apiBaseUrl = `${serverConfig.PROTOCOL}://${serverConfig.HOST}:${serverConfig.PORT}/`