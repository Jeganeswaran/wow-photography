import React from 'react'
import { CloseModalWrapper, ModalCon } from './modalbtns';
import useCount from '../../hooks/useCount';
import SignInForm from '../auth/sigininform';
import ForgotForm from '../auth/forgotform';

//modal name SIGNIN_MODAL
const SignInModal = () => {
    const tab = useCount(1);
    return (
        <CloseModalWrapper className="modal-wrapper">
            <ModalCon className="modal-container signin-modal">
                {tab.count === 1 && <div>
                    <div className="mb-4">
                        <h3 className="font-weight-bold">Sign In</h3>
                    </div>
                    <SignInForm />
                    <hr data-title="OR"></hr>
                    <div className="form-group">
                        <button className="btn btn-theme bg--facebook btn-block">
                            Sign in with Facebook
                        </button>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-theme bg--googleplus btn-block">
                            Sign in with Google
                        </button>
                    </div>
                    <hr></hr>
                    <div className="flex-center flex-column">
                        <button onClick={() => tab.setCount(2)} className="btn btn-link btn-a f-12">
                            Forgot Password ?
                        </button>
                    </div>
                </div>}
                {
                    tab.count === 2 &&
                    <div>
                        <div className="mb-4">
                            <h3 className="font-weight-bold">Forgot Password</h3>
                        </div>
                        <ForgotForm />
                        <hr></hr>
                        <div className="flex-center flex-column">
                            <button onClick={() => tab.setCount(1)} className="btn btn-link btn-a f-12">
                                Sign In
                            </button>
                        </div>
                    </div>
                }
            </ModalCon>
        </CloseModalWrapper>
    )
}

export default SignInModal
