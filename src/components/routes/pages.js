import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../landing/landingpage";
import CollectionsPage from "../collections/collectionspage";
import ScrollToTop from "./scrolltop";
import ActivatePage from "../auth/activatePage";
import SuccessPage from "../auth/successpage";
import UserRoute from "./userroute";
import PrivacyPolicy from "../static/privacy";
import Terms from "../static/terms";
import RefundPolicy from "../static/refundpolicy";
import ResetPwdPage from "../auth/resetpwdpage";
import UpgradePage from "../upgrade/upgradepage";
import FailurePage from "../auth/errorpage";
import Annoucements from "../landing/annoucements";
import Faq from "../static/faq";
import About from "../static/about";

const Pages = () => {
    return (
        <ScrollToTop>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <UserRoute path="/my-profile" component={CollectionsPage} />
                <Route path="/announcements" component={Annoucements} />
                <Route path="/activate-account" component={ActivatePage} />
                <Route path="/reset-password" component={ResetPwdPage} />
                <Route path="/upgrade" component={UpgradePage} />
                <Route path="/privacy-policy" component={PrivacyPolicy} />
                <Route path="/terms-and-conditions" component={Terms} />
                <Route path="/refund-policy" component={RefundPolicy} />
                <Route path="/payment-success" component={SuccessPage} />
                <Route path="/payment-failure" component={FailurePage} />
                <Route path="/faq" component={Faq} />
                <Route path="/about-us" component={About} />
            </Switch>
        </ScrollToTop>
    )
}

export default Pages
