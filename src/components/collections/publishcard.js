import React from 'react'
import { OpenModalBtn, OpenImg } from "../modals/modalbtns"
import dateFormat from "../../utils/dateFormat"

const PublishCard = props => {
    const { is_submitted, thumbnail, photo_id, photo, submitted_on, is_approved, categories } = props;
    return (
        <div className="post">
            <div className="post-img-holder relative">
                <OpenImg
                    modalProps={{ image: photo  }}
                    className="post-img"
                    src={thumbnail}
                    alt={photo_id}
                />
                {/* {
                    is_submitted ?
                        <button className="btn btn-pill btn-publish">
                            Share
                    </button> : null
                        <OpenModalBtn
                            modalName="PUBLISH_MODAL"
                            modalProps={{ id }}
                            className="btn btn-pill btn-publish"
                        >
                            Publish
                    </OpenModalBtn>
                } */}
            </div>
            {
                is_submitted ? 
                <div className="flex-between bg-light pb-2 pl-2 pr-2">
                    <span>
                        {
                            is_approved ?
                                <span className="approv-pill bg-success">Approved</span> :
                                is_approved === false ?
                                    <span className="approv-pill bg-danger">Rejected</span> :
                                    <span className="approv-pill pendibg-bg">Pending Approval</span>
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
