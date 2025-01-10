import React from "react";

import {Navigate, Route, Router} from "react-router-dom";
import {Provider, useSelector} from "react-redux";

import store from "./store";
import LoginScreen from "./screens/loginScreen/LoginScreen";


const PrivateRoute = ({ element, ...rest }) => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin || {};

    return userInfo ? element : <Navigate to="/login" replace />;
};

function App() {
  return (
      <Provider store={store}>
          <Router>
              <Route path="/login" element={<LoginScreen />}/>
          </Router>
      </Provider>

  );
}

export default App;
