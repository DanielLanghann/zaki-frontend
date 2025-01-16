import React from "react";

import {Navigate, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {Provider, useSelector} from "react-redux";

import store from "./store";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import UserListScreen from "./screens/userListScreen/UserListScreen";
import {analyticsRoute, homeRoute, logInRoute, userListRoute} from "./utils/routes";
import AnalyticsScreen from "./screens/analyticsScreen/AnalyticsScreen";


const PrivateRoute = ({ element }) => {
    const login = useSelector((state) => state.login);
    const { userInfo } = login || {};

    return userInfo ? element : <Navigate to="/login" replace />;
};

function App() {
  return (
      <Provider store={store}>
          <Router>
              <Routes>
                  <Route path={logInRoute} element={<LoginScreen />}/>
                  <Route
                      path={homeRoute}
                      element={<PrivateRoute element={<HomeScreen />} />}
                  />
                  <Route path="/" element={<Navigate to={logInRoute} replace /> }/>
                  <Route path="/" element={<Navigate to={logInRoute} replace /> }/>
                  <Route
                      path={userListRoute}
                      element={<PrivateRoute element={<UserListScreen />} />}
                  />
                  <Route
                      path={analyticsRoute}
                      element={<PrivateRoute element={<AnalyticsScreen />} />}
                  />
              </Routes>
          </Router>
      </Provider>

  );
}

export default App;
