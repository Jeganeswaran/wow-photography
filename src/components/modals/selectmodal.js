import SignInModal from "./signinmodal"
import SignUpModal from "./signupmodal";
import LoadingModal from "./loadingmodal";

const selectModal = modalName => {
    switch (modalName) {
        case "SIGNIN_MODAL":
            return SignInModal
        case "SIGNUP_MODAL":
            return SignUpModal
        case "LOADING_MODAL":
            return LoadingModal
        default:
            return null;
    }
}

export default selectModal