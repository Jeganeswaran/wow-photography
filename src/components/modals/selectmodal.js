import SignInModal from "./signinmodal"
import SignUpModal from "./signupmodal";
import LoadingModal from "./loadingmodal";
import ChangePwdModal from "./changepwdmodal";

const selectModal = modalName => {
    switch (modalName) {
        case "SIGNIN_MODAL":
            return SignInModal
        case "SIGNUP_MODAL":
            return SignUpModal
        case "LOADING_MODAL":
            return LoadingModal
        case "CHANGEPWD_MODAL":
            return ChangePwdModal
        default:
            return null;
    }
}

export default selectModal