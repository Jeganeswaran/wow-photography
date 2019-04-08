import React from 'react'
import PublishCard from './publishcard';

const PublishCollection = () => {
    return (
        <div>
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
                <div className="col-md-6">
                    <PublishCard
                        image={`https://source.unsplash.com/random/403x250/?tourism`}
                    />
                </div>
                <div className="col-md-6">
                    <PublishCard
                        image={`https://source.unsplash.com/random/404x250/?tourism`}
                    />
                </div>
            </div>
        </div>
    )
}

export default PublishCollection