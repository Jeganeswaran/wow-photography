import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from "react-router-dom";
import { openModal } from '../../redux/actions/common';
import { urlParams } from '../../utils/urlParams';

const CollCount = ({ location, openModal, private_photographs, submitted_photo, points, approved_photo, rejected_photo }) => {

    useEffect(() => {
        if (location.search) {
            const params = urlParams(location.search);
            console.log(params);
            if (params.action && params.action === "Upgrade") {
                const isUp = points === 0 && submitted_photo === 0 && private_photographs !== 0;
                console.log(isUp);
                if (isUp) {
                    openModal("REJECTINFO_MODAL", {
                            content: (
                                <>
                                    <p>Please Upgrade your package to submit your Unsubmitted Photographs.</p>
                                    <Link
                                        to="/upgrade"
                                        className={`btn btn-theme f-14 mb-3 pl-md-4 pr-md-4`}
                                    >
                                        Upgrade
                                    </Link>
                                </>
                            )
                        }
                    )
                }
            }
        }

    }, [])

    return (
        <div>
            <div className="d-flex flex-wrap align-items-center border coll-counter text-center mb-3">
                <div className="coll-counter-item coll-border">
                    <h1>{private_photographs}</h1>
                    <p className="f-13">Unsubmitted <br></br>  Photographs</p>
                </div>
                <div className="coll-counter-item">
                    <h1>{submitted_photo}</h1>
                    <p className="f-13">Submitted <br></br> Photographs</p>
                </div>
                <div className="coll-counter-item coll-border">
                    <h3>{approved_photo}</h3>
                    <p className="f-13">Approved <br></br>  Photographs</p>
                </div>
                <div className="coll-counter-item">
                    <h3>{rejected_photo}</h3>
                    <p className="f-13">Rejected <br></br> Photographs</p>
                </div>
            </div>
            <div className="d-flex align-items-center border coll-counter text-center mb-3">
                <div className="w-100">
                    {points !== 0 &&
                        <div>
                            <h2>{points}</h2>
                            <p className="f-13">Points</p>
                        </div>
                    }
                    <Link
                        to="/upgrade"
                        className={`btn btn-theme f-14 mb-3 ${points === 0 ? "mt-3" : ""} pl-md-4 pr-md-4`}
                    >
                        Upgrade
                    </Link>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = ({ user }) => ({
    private_photographs: user.private_photographs || 0,
    submitted_photo: user.submitted_photo || 0,
    rejected_photo: user.rejected_photo || 0,
    approved_photo: user.approved_photo || 0,
    points: user.userprofile.points || 0
})

const mapDispatchToProps = {
    openModal
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollCount))
