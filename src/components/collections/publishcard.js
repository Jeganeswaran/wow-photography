import React from 'react'

const PublishCard = ({title="", image}) => {
    return (
        <div className="post">
            <div className="post-img-holder relative">
                <img 
                    className="post-img" 
                    src={image} 
                    alt={title}  
                />
                <button className="btn btn-pill btn-publish">
                    Publish
                </button>
            </div>
        </div>
    )
}

export default PublishCard
