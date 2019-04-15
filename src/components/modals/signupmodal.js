import React from 'react'
import { CloseModalWrapper, ModalCon } from './modalbtns';
import SignUpForm from '../auth/sigupform';
import SocialLogin from '../auth/socialLogin';

//modal name SIGNUP_MODAL
const SignUpModal = () => {
    return (
        <CloseModalWrapper className="modal-wrapper">
            <ModalCon className="modal-container signin-modal">
                <div>
                    <div className="mb-4">
                        <h3 className="font-weight-bold">Sign Up</h3>
                    </div>
                    <SignUpForm />
                    <hr data-title="OR"></hr>
                    <SocialLogin title={"Sign up"} />
                </div>
            </ModalCon>
        </CloseModalWrapper>
    )
}

export default SignUpModal
