import React from 'react'
import { CloseModalWrapper, ModalCon } from './modalbtns';
import SignUpForm from '../auth/sigupform';

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
                    <div className="form-group">
                        <button className="btn btn-theme bg--facebook btn-block">
                            Sign up with Facebook
                        </button>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-theme bg--googleplus btn-block">
                            Sign up with Google
                        </button>
                    </div>
                </div>
            </ModalCon>
        </CloseModalWrapper>
    )
}

export default SignUpModal
