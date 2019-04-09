import SignInModal from "./signinmodal"
import SignUpModal from "./signupmodal";

const selectModal = modalName => {
    switch (modalName) {
        case "SIGNIN_MODAL":
            return SignInModal
        case "SIGNUP_MODAL":
            return SignUpModal
        default:
            return null;
    }
}

export default selectModal