import React from 'react'

const Post = ({title="", image}) => {
    return (
        <div className="post">
            <div className="post-img-holder">
                <img 
                    className="post-img" 
                    src={image} 
                    alt={title}  
                />
            </div>
            <div className="flex-between p-1">
                <span>Dillip Ashokkumar</span>
                <span>4th Apr 2019</span>
            </div>
        </div>
    )
}

export default Post
