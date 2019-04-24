import React from 'react'
import { OpenImg } from "../modals/modalbtns"

const Post = ({ thumbnail, photo, user }) => {
    return (
        <div className="post">
            <div className="post-img-holder">
                <div className="post-img">
                    <OpenImg
                        modalProps={{ image: photo }}
                        src={thumbnail}
                        alt={""}
                    />
                </div>
            </div>
            <div className="p-1">
                {user && <span>@{user.first_name} {user.last_name}</span>}
                {/* <span>4th Apr 2019</span> */}
            </div>
        </div>
    )
}

export default Post
