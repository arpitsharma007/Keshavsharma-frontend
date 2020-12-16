import React, { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

//react router
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//components
import Home from "./pages/Home";
import Notfound from "./pages/Pagenotfound";
import { UserContext } from "./context/UserContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

import Groupsession from "./pages/Groupsession";
import Oneonone from "./pages/Oneonone";


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
          <Route exact path="/home" component={Home} />
          <Route exact path="/groupsession" component={Groupsession} />
          <Route exact path="/oneonone" component={Oneonone} />
          <Route exact path="/*" component={Notfound} />
        </Switch>
        <Footer></Footer>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
