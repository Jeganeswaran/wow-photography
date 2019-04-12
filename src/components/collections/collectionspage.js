import React from 'react'
import PageLayout from '../common/pagelayout';
import ProfileCard from './profilecard';
import TabHeader from '../common/tabheader';
import CollCount from './collcount';
import RouteTabs from '../routes/routetabs';
import PrivateCollection from './privatecollection';
import PublishCollection from './publishcollection';

const CollectionsPage = ( ) => {
    return (
        <PageLayout>
            <div className="row">
                <div className="col-md-3 mb-3">
                    <ProfileCard />
                    <CollCount />
                </div>
                <div className="col-md-9 mb-3">
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
                            }
                        ]}
                    />
                </div>
            </div>
        </PageLayout>
    )
}

export default CollectionsPage
