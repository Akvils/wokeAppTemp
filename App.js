import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";

const App = () => (
  <Provider>
    <HomeScreen />
  </Provider>
);

export default App;
