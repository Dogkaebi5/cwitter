import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Navigation from "./Navigation";
import Home from "../routes/Home";
import Profile from "../routes/Profile";

const AppRouter = ({ isLoggedIn }) => {
  return (
      <Router>
        {isLoggedIn && <Navigation/>}
        <Switch>
          {isLoggedIn ? 
            <>
              <Route exact path="/" ><Home/></Route> 
              <Route exact path="/profile" ><Profile/></Route> 
            </>
          : 
          <>
            <Route exact path="/"><Auth /></Route>
            <Redirect from="*" to="/" ><Auth /></Redirect>
          </>
        }
        </Switch>
      </Router>
  );
};

export default AppRouter;
