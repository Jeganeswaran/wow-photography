import React from 'react'
import { OpenModalBtn } from "../modals/modalbtns"
import dateFormat from "../../utils/dateFormat"

const PublishCard = ({ is_submitted, thumbnail, photo_id, id, submitted_on, is_approved }) => {
    return (
        <div className="post">
            <div className="post-img-holder relative">
                <img
                    className="post-img"
                    src={thumbnail}
                    alt={photo_id}
                />
                {
                    is_submitted ?
                        <button className="btn btn-pill btn-publish">
                            Share
                    </button> :
                        <OpenModalBtn
                            modalName="PUBLISH_MODAL"
                            modalProps={{ id }}
                            className="btn btn-pill btn-publish"
                        >
                            Publish
                    </OpenModalBtn>
                }
            </div>
            { is_submitted && <div className="flex-between p-1">
                <span>
                {
                    is_approved ? 
                    <span className="text-success">Approved</span> : 
                        is_approved === false ? 
                            <span className="text-danger">Rejected</span> : 
                            <span className="theme-red">Pending Approval</span>
                }
                </span>
                <span>{submitted_on ? dateFormat(submitted_on) : ''}</span> 
            </div>}
        </div>
    )
}

export default PublishCard
