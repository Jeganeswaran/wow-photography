import React from 'react'
import useCount from '../../hooks/useCount';
import SignInForm from '../auth/sigininform';
import ForgotForm from '../auth/forgotform';
// import SocialLogin from '../auth/socialLogin';
import ModalLayout from './modallayout';
import { OpenModalBtn } from './modalbtns';

//modal name SIGNIN_MODAL
const SignInModal = () => {
    const tab = useCount(1);
    return (
        <ModalLayout title={tab.count === 1 ? `Sign In` : `Forgot Password`}>
        {   
            tab.count === 1 ?
            <div>
                <SignInForm />
                {/* <hr data-title="OR"></hr> */}
                {/* <SocialLogin title={"Sign in"} /> */}
                <hr></hr>
                <div className="flex-center flex-column">
                    <OpenModalBtn modalName="SIGNUP_MODAL" className="btn btn-link mb-1 btn-a f-12">
                        Don't have an account? Sign Up
                    </OpenModalBtn>
                    <button onClick={() => tab.setCount(2)} className="btn btn-link btn-a f-12">
                        Forgot Password ?
                    </button>
                </div>
            </div> : 
            tab.count === 2 ?
            <div>
                <ForgotForm />
                <hr></hr>
                <div className="flex-center flex-column">
                    <button onClick={() => tab.setCount(1)} className="btn btn-link btn-a f-12">
                        Sign In
                    </button>
                </div>
            </div> :
            null
        }
        </ModalLayout>
    )
}

export default SignInModal
