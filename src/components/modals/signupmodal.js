import React from 'react'
import SignUpForm from '../auth/sigupform';
import SocialLogin from '../auth/socialLogin';
import ModalLayout from './modallayout';

//modal name SIGNUP_MODAL
const SignUpModal = () => {
    return (
        <ModalLayout title="Sign Up">
            <div>
                <SignUpForm />
                <hr data-title="OR"></hr>
                <SocialLogin title={"Sign up"} />
            </div>
        </ModalLayout>
    )
}

export default SignUpModal
