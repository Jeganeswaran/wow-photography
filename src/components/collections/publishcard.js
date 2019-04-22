import React from 'react'
import { OpenModalBtn } from "../modals/modalbtns"
import dateFormat from "../../utils/dateFormat"

const PublishCard = props => {
    const { is_submitted, thumbnail, photo_id, id, submitted_on, is_approved, categories } = props;
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
                    </button> : null
                    //     <OpenModalBtn
                    //         modalName="PUBLISH_MODAL"
                    //         modalProps={{ id }}
                    //         className="btn btn-pill btn-publish"
                    //     >
                    //         Publish
                    // </OpenModalBtn>
                }
            </div>
            {
                is_submitted ? 
                <div className="flex-between p-1">
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
                </div> :
                <div className="flex-between p-1 bg-light align-items-center">
                    {/* <input type="checkbox" /> */}
                    <OpenModalBtn modalName="PUBLISH_MODAL" className="btn btn-a f-12">
                        {categories}
                    </OpenModalBtn>
                    <OpenModalBtn modalName="REQPAY_MODAL" modalProps={{photo: props }} className="btn btn-a f-12">
                        Submit
                    </OpenModalBtn>
                </div>
            }
        </div>
    )
}

export default PublishCard
