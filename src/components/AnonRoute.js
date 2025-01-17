import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import { Redirect, Route } from "react-router-dom";
import Loading from "../components/loading.gif"

function AnonRoute(props) {
  const { to, exact, component: Component, ...restProps } = props;
  
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  // If the authentication is still loading ⏳
  if (isLoading) return <img src={Loading} alt="Loading..." style={{ width: "100%" }} />;

  // If the user is already logged in, redirect him to home page
  if (isLoggedIn) return <Redirect to="/" />;

  // If the user is not logged in yet, allow him to see the page
  return <Route to={to} exact={exact} component={Component} {...restProps} />
}

export default AnonRoute;