import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../landing/landingpage";
import CollectionsPage from "../collections/collectionspage";
import Scrolltop from "./scrolltop";

const Pages = () => {
    return (
        <Scrolltop>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/my-collection" component={CollectionsPage} />
            </Switch>
        </Scrolltop>
    )
}

export default Pages
