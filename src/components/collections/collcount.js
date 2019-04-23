import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

const CollCount = ({ private_photographs, submitted_photo, points }) => {
    return (
        <div>
            <div className="d-flex align-items-center border coll-counter text-center mb-3">
                <div className="w-100">
                    <h1>{points}</h1>
                    <p className="f-13">Points</p>
                    <Link
                        to="/upgrade"
                        className="btn btn-theme f-14 mb-3 pl-md-4 pr-md-4"
                    >
                        Upgrade
                    </Link>
                </div>
            </div>
            <div className="d-flex align-items-center border coll-counter text-center mb-3">
                <div className="coll-counter-item coll-border">
                    <h1>{private_photographs}</h1>
                    <p className="f-13">Private <br></br>  Photographs</p>
                </div>
                <div className="coll-counter-item">
                    <h1>{submitted_photo}</h1>
                    <p className="f-13">Publish <br></br> Photographs</p>
                </div>
            </div>
        </div>

    )
}


const mapStateToProps = ({ user }) => ({
    private_photographs: user.private_photographs,
    submitted_photo: user.submitted_photo,
    points: user.userprofile.points
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CollCount)
