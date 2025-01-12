import React from "react";

import {Navigate, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {Provider, useSelector} from "react-redux";

import store from "./store";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import HomeScreen from "./screens/homeScreen/HomeScreen";


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
                  <Route path="/login" element={<LoginScreen />}/>
                  <Route
                      path="/home"
                      element={<PrivateRoute element={<HomeScreen />} />}
                  />
                  <Route path="/" element={<Navigate to="/login" replace /> }/>
              </Routes>
          </Router>
      </Provider>

  );
}

export default App;
