import React, { useState } from 'react'
import SocialButton from './socialbutton';
import useDataSubmit from '../../hooks/http/useDataSubmit';
import { fbauth_url, gglauth_url } from '../../redux/actions/constants';
import { addToast, closeModal } from '../../redux/actions/common';
import { connect } from 'react-redux'
import { updateUser } from '../../redux/actions/user';

const SocialLogin = ({ updateUser, closeModal, addToast }) => {

    const [showFb, setShowFb] = useState(true);

    const [showGg, setShowGg] = useState(true);

    const fbAuth = useDataSubmit(
        (data) => {
            updateUser(data);
            closeModal();
        },
        (data) => {
            addToast(data, false);
        }
    )

    const ggAuth = useDataSubmit(
        (data) => {
            updateUser(data);
            closeModal();
        },
        (data) => {
            addToast(data, false);
        }
    )

    const handleFbLogin = user => {
        fbAuth.setReq(x => ({
            ...x,
            count: x.count + 1,
            config: {
                url: fbauth_url,
                method: "POST",
                data: {
                    access_token: user._token.accessToken,
                    client: Math.random() * 1000
                }
            }
        }))
    }

    const handleGgLogin = user => {
        fbAuth.setReq(x => ({
            ...x,
            count: x.count + 1,
            config: {
                url: gglauth_url,
                method: "POST",
                data: {
                    access_token: user._token.idToken,
                    client: Math.random() * 1000
                }
            }
        }))
    } 

    const handleFbLoginFailure = (err) => {
        setShowFb(false);
        setTimeout(() => {
            setShowFb(true);
        }, 100)
    }

    const handleGgLoginFailure = (err) => {
        setShowGg(false);
        setTimeout(() => {
            setShowGg(true);
        }, 100)
    }

    return (
        <div>
            <div className="form-group">
                {
                    showFb ?
                        <SocialButton
                            fetching={fbAuth.res.fetching}
                            provider='facebook'
                            appId='685670868535724'
                            className="btn btn-theme bg--facebook btn-block"
                            title={`Sign in with Facebook`}
                            onLoginSuccess={handleFbLogin}
                            onLoginFailure={handleFbLoginFailure}
                        /> :
                        <button className="btn btn-theme bg--facebook btn-block">
                            Sign in with Facebook
                        </button>
                }
            </div>
            <div className="form-group">
                {
                    showGg ? 
                    <SocialButton
                        fetching={ggAuth.res.fetching}
                        provider='google'
                        appId='440210990589-un9sqv3bipdtb6r618qrnu6heqn7gms1.apps.googleusercontent.com'
                        className="btn btn-theme bg--googleplus btn-block"
                        title={`Sign in with Google`}
                        onLoginSuccess={handleGgLogin}
                        onLoginFailure={handleGgLoginFailure}
                    /> :
                    <button className="btn btn-theme bg--googleplus btn-block">
                        Sign in with Google
                    </button>
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    addToast, closeModal, updateUser
}

export default connect(null, mapDispatchToProps)(SocialLogin)
