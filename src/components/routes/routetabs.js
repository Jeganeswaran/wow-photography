import React from 'react'
import { Switch, Route, withRouter, NavLink } from "react-router-dom";

const Tabs = ({tabs = [], title="", match}) => (
    <Switch>
        {
            tabs.map(({path, ...rest}, index) =>
                <Route path={`${match.url}${path}`} {...rest} key={title + "-route-" +index} />
            )
        }
    </Switch>
)

const TabLink = ({children, path, match, className="", activeClassName="", exact=false}) => (
    <NavLink to={`${match.url}${path}`} className={className} activeClassName={activeClassName} exact={exact}>
        {children}
    </NavLink>
)

export const RouteTabLink = withRouter(TabLink);

const RouteTabs = withRouter(Tabs);

export default RouteTabs