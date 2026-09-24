import React from 'react'
import { NavLink } from 'react-router-dom';
import List from './list';

const TabHeader = ({ tablinks, className="tab-header" }) => {
    return (
        <div className={className}>
            <List
                list={tablinks}
                RenderItem={TabBtn}
                title="header-tabs"
            />
        </div>
    )
}

export const TabBtn = props => (
    <NavLink
        className="btn btn-tab"
        activeClassName="active"
        {...props}
    />
)

export default TabHeader