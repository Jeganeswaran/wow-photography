import React from 'react'
import { connect } from 'react-redux'

const CollCount = ({ private_photographs, submitted_photo }) => {
    return (
        <div className="d-flex align-items-center border coll-counter text-center">
            <div className="coll-counter-item coll-border">
                <h1>{private_photographs}</h1>
                <p className="f-13">Private <br></br>  Photographs</p>
            </div>
            <div className="coll-counter-item">
                <h1>{submitted_photo}</h1>
                <p className="f-13">Publish <br></br> Photographs</p>
            </div>
        </div>
    )
}


const mapStateToProps = ({ user }) => ({
    private_photographs: user.private_photographs,
    submitted_photo: user.submitted_photo
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CollCount)
