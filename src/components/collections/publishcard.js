import React from 'react'
import { OpenModalBtn } from "../modals/modalbtns"
// import Publishbtn from './publishbtn';

const PublishCard = ({ is_submitted, photo, photo_id, id }) => {
    return (
        <div className="post">
            <div className="post-img-holder relative">
                <img
                    className="post-img"
                    src={photo}
                    alt={photo_id}
                />
                {
                    is_submitted ?
                    <button className="btn btn-pill btn-publish">
                        Share
                    </button> :
                    <OpenModalBtn 
                        modalName="PUBLISH_MODAL"
                        className="btn btn-pill btn-publish"
                    >
                        Publish
                    </OpenModalBtn>
                }
            </div>
        </div>
    )
}

export default PublishCard
