import React from 'react'
import PageLayout from '../common/pagelayout';
import ProfileCard from './profilecard';
import TabHeader from '../common/tabheader';
import CollCount from './collcount';
import RouteTabs from '../routes/routetabs';
import PrivateCollection from './privatecollection';
import PublishCollection from './publishcollection';
import { Link } from "react-router-dom"
import Contest from './contest';

const CollectionsPage = () => {
    return (
        <PageLayout>
            <div className="row">
                <div className="col-md-3 mb-3">
                    <ProfileCard />
                    <CollCount />
                </div>
                <div className="col-md-9">
                    <div className="flex-between flex-wrap">
                        <div className="mb-1">
                            <TabHeader
                                className="profile-tabs"
                                tablinks={[
                                    {
                                        to: "/my-collection",
                                        exact: true,
                                        children: "Published Photographs"
                                    },
                                    {
                                        to: "/my-collection/private-photographs",
                                        exact: true,
                                        children: "Private Photographs"
                                    },
                                ]}
                            />
                        </div>
                        <div className="mb-1">
                            <Link 
                                className="f-15 f-600 theme-red"
                                to="/my-collection/enter-to-contest"
                            >
                                <i className="fa fa-plus f-14 mr-1"></i>
                                Enter to contest
                            </Link>
                        </div>            
                    </div>
                    <RouteTabs
                        title="collection-page"
                        tabs={[
                            {
                                path: "/",
                                exact: true,
                                component: PublishCollection
                            },
                            {
                                path: "/private-photographs",
                                component: PrivateCollection
                            },
                            {
                                path: "/enter-to-contest",
                                component: Contest
                            }
                        ]}
                    />
                </div>
            </div>
        </PageLayout>
    )
}

export default CollectionsPage
