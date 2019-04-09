import Ip from "./ip";
import TextArea from "./textArea";

const renderInput = (type) => {
    switch (type) {
        case "tel":
        case "number":
        case "text":
        case "email":
        case "password":
            return Ip
        case "textarea":
            return TextArea
        default:
            return Ip
    }
}

export default renderInput