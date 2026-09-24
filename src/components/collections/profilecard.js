import React from 'react'
import { OpenModalBtn } from "../modals/modalbtns"
import { connect } from 'react-redux'
import avatar from "../../assets/img/user.png"
import useDataSubmit from '../../hooks/http/useDataSubmit';
import { updateUser } from '../../redux/actions/user';
import { addToast } from '../../redux/actions/common';
import { profile_url } from '../../redux/actions/constants';
import Loader from '../common/loader';
import ProfileBanner from '../../assets/img/profile_banner_img.jpeg'

const ProfileCard = ({ user, updateUser, addToast }) => {
    const { first_name, last_name, email, userprofile } = user;

    //data fetching effect
    const { res, setReq } = useDataSubmit(
        (res) => {
            updateUser(res);
            addToast("Profile picture updated");
        },
        (data) => {
            addToast(data, false);
        }
    )

    //handle change
    const handleChange = ({ target }) => {
        const files = target.files;
        
        if (files) {
            if (files[0].size > 1971520) {
                addToast("Image size must be less than 1MB", false);
                return;
              }
            const postD = new FormData();
            postD.append("profile_pic", files[0]);
            setReq(x => ({
                ...x,
                count: x.count + 1,
                config: {
                    url: profile_url,
                    method: "POST",
                    data: postD,
                    crossDomain: true,
                    contentType: false,
                    processData: true
                }
            }))
        }
    }

    return (
        <div className="profile-card border mb-3">
            <img className="profile-bg" src={ProfileBanner} alt="bg" />
            <div className="profile-details">
                <div className="relative flex-center mb-2">
                    <div className="profile-image" >
                        <img

                            src={userprofile.profile_pic ? userprofile.profile_pic : avatar}
                            alt={`${first_name} ${last_name}`}
                        />
                        {
                            res.fetching ? 
                            <button 
                                disabled
                                className="btn select-round profile-img-edit"
                            >
                                <Loader width="12px" height="12px" />
                            </button> :
                            <label htmlFor="img-edit" className="btn select-round profile-img-edit">
                                <i className="fas fa-pencil-alt f-12 theme-red"></i>
                                <input
                                    style={{ display: `none` }}
                                    id="img-edit"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleChange}
                                />
                            </label>
                        }
                    </div>
                </div>
                <p className="mb-0 f-14 f-600 text-center">{first_name} {last_name}</p>
                <p className="mb-1 f-14 text-center">{email}</p>
                <div className="f-13 text-center">
                    <OpenModalBtn
                        modalName="UPDATE_PROFILE"
                        className="btn-a mr-2 theme-red text-underline"
                    >
                        Update Profile
                    </OpenModalBtn>
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
    updateUser, addToast
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard)
