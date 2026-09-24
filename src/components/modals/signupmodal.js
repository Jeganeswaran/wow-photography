import React from 'react'
import SignUpForm from '../auth/sigupform';
import SocialLogin from '../auth/socialLogin';
import ModalLayout from './modallayout';
import { OpenModalBtn } from './modalbtns';

//modal name SIGNUP_MODAL
const SignUpModal = () => {
    return (
        <ModalLayout title="Sign Up">
            <div>
                <SignUpForm />
                {/* <hr data-title="OR"></hr> */}
                {/* <SocialLogin title={"Sign up"} /> */}
                <hr></hr>
                <div className="flex-center flex-column">
                    <OpenModalBtn modalName="SIGNIN_MODAL" className="btn btn-link mb-1 btn-a f-12">
                        Already have an account? Sign In
                    </OpenModalBtn>
                </div>
            </div>
        </ModalLayout>
    )
}

export default SignUpModal
