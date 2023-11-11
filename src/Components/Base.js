import { useContext } from "react";
import DataContext from "../store/data-context";


import { Route } from "react-router-dom";
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./Auth/Login/Login";
import SignUp from "./Auth/SignUp/SignUp";
import Home from "./MainCotent/Home/Home";
import CompanyInfo from "./MainCotent/CompanyInfo/CompanyInfo";
import Headers from "./Headers";

export default (props) => {
  const dataContext = useContext(DataContext);
  const isLoggedIn = dataContext.isLoggedIn;

  return (
    <Switch>
      {!isLoggedIn && (
        <>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
          <Route path="*" exact>
            <Redirect to="/login" />
          </Route>
        </>
      )}
      {isLoggedIn && (
        <>
          <Headers />
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/companyInfo">
            <CompanyInfo />
          </Route>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="*" exact>
            <Redirect to="/home" />
          </Route>
        </>
      )}
    </Switch>
  );
};
