import React from 'react'
import { OpenModalBtn } from "../modals/modalbtns"
import { connect } from 'react-redux'
import avatar from "../../assets/img/user.png"

const ProfileCard = ({ user }) => {
    const { first_name, last_name, email, userprofile } = user;
    return (
        <div className="profile-card border mb-3">
            <img className="profile-bg" src="https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" alt="bg" />
            <div className="profile-details">
                <div className="flex-center mb-2">
                    <img 
                        className="profile-image" 
                        src={userprofile.profile_pic ? userprofile.profile_pic : avatar} 
                        alt={`${first_name} ${last_name}`}
                    />
                </div>
                <p className="mb-0 f-14 f-600 text-center">{first_name} {last_name}</p>
                <p className="mb-1 f-14 text-center">{email}</p>
                <div className="f-13 text-center">
                    <OpenModalBtn
                        modalName="CHANGEPWD_MODAL"
                        className="btn-a mr-2 theme-red text-underline"
                    >
                        Change password
                    </OpenModalBtn>
                    {/* <Link className="theme-red text-underline" to="/my-profile">
                        Edit profile
                    </Link> */}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ user }) => ({
    user
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard)
