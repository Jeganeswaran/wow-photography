import React from 'react'
import { OpenModalBtn, OpenImg } from "../modals/modalbtns"
import dateFormat from "../../utils/dateFormat"
import { photos_url } from '../../redux/actions/constants';
import DeleteBtn from './deletebtn';

const PublishCard = ({ ids, multiDispatch, ...props }) => {
    const { is_submitted, thumbnail, photo_id, photo, id, submitted_on, is_approved, categories } = props;
    const isSelected = ids.includes(id);
    return (
        <div className="bg-light">
            <div className="post">
                <div className="post-img-holder relative">
                    <div className="post-img">
                        <OpenImg
                            modalProps={{ image: photo }}
                            src={thumbnail}
                            alt={photo_id}
                        />
                    </div>
                    {
                        is_submitted ?
                            null :
                            multiDispatch ?
                                <button
                                    className={`btn select-round ${isSelected ? `select-round-active` : ``}`}
                                    onClick={() =>
                                        multiDispatch(
                                            (isSelected ? "_REMOVE" : "_ADD"),
                                            props
                                        )
                                    }
                                >
                                    {isSelected && <span><i className="fas fa-check"></i></span>}
                                </button>
                                : null
                    }
                </div>
                {
                    is_submitted ?
                        <div className="flex-between p-2 align-items-center">
                            <div>
                                {
                                    is_approved ?
                                        <span className="approv-pill bg-success">Approved</span> :
                                        is_approved === false ?
                                            <span className="approv-pill bg-danger">Rejected</span> :
                                            <span className="approv-pill pendibg-bg">Pending Approval</span>
                                }
                            </div>
                            <div className="text-right f-12">
                                <div className="f-600">{categories}</div>
                                <div style={{ color: `#737373` }}>{submitted_on ? dateFormat(submitted_on) : ''}</div>
                            </div>
                        </div> :
                        <div className="flex-between p-2 align-items-center">
                            <DeleteBtn id={id} />
                            <OpenModalBtn
                                modalName="PUBLISH_MODAL"
                                modalProps={{ id }}
                                className="btn btn-a f-15 f-600"
                            >
                                {categories} <i className="fas f-14 fa-angle-down"></i>
                            </OpenModalBtn>
                            <OpenModalBtn
                                modalName="REQPAY_MODAL"
                                modalProps={{ photo: props }}
                                className="btn btn-theme"
                            >
                                Submit
                            </OpenModalBtn>
                        </div>
                }
            </div>
        </div>
    )
}

export default PublishCard
