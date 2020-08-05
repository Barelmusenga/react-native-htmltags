import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home/HomePage";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/github"
          component={() => {
            window.location.href =
              "https://github.com/Barelmusenga/react-native-htmltags";
            return null;
          }}
        />
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default App;
