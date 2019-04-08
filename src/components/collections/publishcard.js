import React from 'react'

const PublishCard = ({ title = "", image, isPrivate = false }) => {
    return (
        <div className="post">
            <div className="post-img-holder relative">
                <img
                    className="post-img"
                    src={image}
                    alt={title}
                />
                {
                    isPrivate ?
                    <button className="btn btn-pill btn-publish">
                        Publish
                    </button> :
                    <button className="btn btn-pill btn-publish">
                        Share
                    </button>
                }
            </div>
        </div>
    )
}

export default PublishCard
