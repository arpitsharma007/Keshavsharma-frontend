import React, { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

//react router
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// firebase
import firebase from "firebase/app";
import "firebase/auth";

//components
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Notfound from "./pages/Pagenotfound";
import { UserContext } from "./context/UserContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

import firebaseConfig from "./config/firebaseConfig";
import Groupsession from "./pages/Groupsession";
import Oneonone from "./pages/Oneonone";
import Terms from './pages/Terms'

//init firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/groupsession" component={Groupsession} />
          <Route exact path="/oneonone" component={Oneonone} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/*" component={Notfound} />
        </Switch>
        <Footer></Footer>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
