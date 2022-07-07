import React, { useEffect } from "react";

import Routes from "./src/routes/index";
import SplashScreen from "react-native-splash-screen";
const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
  }, []);
  return <Routes />;
};

export default App;
