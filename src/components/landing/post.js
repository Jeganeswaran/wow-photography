import React from 'react'
import { OpenImg } from "../modals/modalbtns"

const Post = ({ thumbnail, photo }) => {
    return (
        <div className="post">
            <div className="post-img-holder">
                <OpenImg
                    modalProps={{ image: photo }}
                    className="post-img"
                    src={thumbnail}
                    alt={""}
                />
            </div>
            <div className="p-1">
                <span>@Dillip Ashokkumar</span>
                {/* <span>4th Apr 2019</span> */}
            </div>
        </div>
    )
}

export default Post
