import React from 'react'
import PageLayout from '../common/pagelayout';
import ProfileCard from './profilecard';
import TabHeader from '../common/tabheader';
import PublishCard from './publishcard';
import AddPhotos from './addphotos';
import GuideLines from './guidelines';
import CollCount from './collcount';

const CollectionsPage = () => {
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
                    <div className="row pt-4 pb-3">
                        <div className="col-md-6">
                            <PublishCard 
                                image={`https://source.unsplash.com/random/401x250/?tourism`}
                            />
                        </div>
                        <div className="col-md-6">
                            <PublishCard 
                                image={`https://source.unsplash.com/random/402x250/?tourism`}
                            />
                        </div>
                    </div>
                    <AddPhotos />
                    <GuideLines />
                </div>
            </div>
        </PageLayout>
    )
}

export default CollectionsPage
