//ajax err message
const ajaxerrmsg = res => {
    const extractError = obj => {
        for (let key in obj) {
            const val = obj[key];
            if(typeof val === "string" || Array.isArray(val)){
                return Array.isArray(val) ? val[0] : val
            } else {
                extractError(val);
            }
        }
    }
    return typeof res === "object" ? extractError(res) : "Something went wrong";
}

export default ajaxerrmsg