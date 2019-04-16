import Ip from "./ip";
import TextArea from "./textArea";
import SelectIp from "./selectip";

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
        case "select":
            return SelectIp
        default:
            return Ip
    }
}

export default renderInput