import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../landing/landingpage";
import CollectionsPage from "../collections/collectionspage";
import Scrolltop from "./scrolltop";
import ActivatePage from "../auth/activatePage";
import UserRoute from "./userroute";
import PrivacyPolicy from "../static/privacy";
import Terms from "../static/terms";
import RefundPolicy from "../static/refundpolicy";
import ResetPwdPage from "../auth/resetpwdpage";

const Pages = () => {
    return (
        <Scrolltop>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <UserRoute path="/my-collection" component={CollectionsPage} />
                <Route path="/activate-account" component={ActivatePage} />
                <Route path="/reset-password" component={ResetPwdPage} />
                <Route path="/privacy-policy" component={PrivacyPolicy} />
                <Route path="/terms-and-conditions" component={Terms} />
                <Route path="/refund-policy" component={RefundPolicy} />
            </Switch>
        </Scrolltop>
    )
}

export default Pages
