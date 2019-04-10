import React from 'react'
import AddPhotos from './addphotos';
import GuideLines from './guidelines';
import PublishCard from './publishcard';

const PrivateCollection = () => {
    return (
        <div className="pt-4">
            <div className="row pb-3">
                <div className="col-md-6">
                    <PublishCard
                        isPrivate
                        image={`https://source.unsplash.com/random/401x250/?tourism`}
                    />
                </div>
                <div className="col-md-6">
                    <PublishCard
                        isPrivate
                        image={`https://source.unsplash.com/random/402x250/?tourism`}
                    />
                </div>
            </div>
            <AddPhotos />
            <GuideLines />
        </div>
    )
}

export default PrivateCollection
