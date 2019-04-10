import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../landing/landingpage";
import CollectionsPage from "../collections/collectionspage";
import Scrolltop from "./scrolltop";
import ActivatePage from "../auth/activatePage";
import UserRoute from "./userroute";

const Pages = () => {
    return (
        <Scrolltop>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <UserRoute path="/my-collection" component={CollectionsPage} />
                <Route path="/activate-account" component={ActivatePage} />
            </Switch>
        </Scrolltop>
    )
}

export default Pages
