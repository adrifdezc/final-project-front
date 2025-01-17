import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavbarComp from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePage from "./pages/ProfilePage";
import LandingPage from "./pages/LandingPage";
import CocktailsPage from "./pages/CocktailsPage";
import CartPage from "./pages/CartPage";
import CocktailsDetailsPage from "./pages/CocktailsDetailsPage";
import CreateCocktail from "./pages/CreateCocktail";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute"; // <== IMPORT
import AnonRoute from "./components/AnonRoute"; // <== IMPORT
import "bootstrap/dist/css/bootstrap.min.css";

function App() {


  return (
    <div className="App">
        <Route component={NavbarComp} />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <PrivateRoute exact path="/cocktails" component={CocktailsPage} />
        <PrivateRoute exact path="/profile" component={ProfilePage} />
        <PrivateRoute exact path="/create" component={CreateCocktail} />
        <PrivateRoute exact path="/cart" component={CartPage} />
        <PrivateRoute
          exact
          path="/cocktails/:cocktailId"
          component={CocktailsDetailsPage}
        />

        <AnonRoute exact path="/signup" component={SignupPage} />
        <AnonRoute exact path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
