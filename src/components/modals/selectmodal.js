import SignInModal from "./signinmodal"

const selectModal = modalName => {
    switch (modalName) {
        case "SIGNIN_MODAL":
            return SignInModal
        default:
            return null;
    }
}

export default selectModal