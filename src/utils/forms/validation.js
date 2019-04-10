//form validation
export const validate = (list, dispatch) => {
    let isErr = false;
    list.forEach(({ inputProps, isOptional, customValid }) => {
        if (!isOptional) {
            let invalid = false;
            invalid = isValid(inputProps, list, customValid);
            if (customValid) {
                const customErr = customValid(list, inputProps.value);
                if(customErr){
                    invalid = customErr
                }
            } 
            if (invalid) {
                dispatch({ type: "SET_ERROR", err: invalid, name: inputProps.name })
                isErr = true;
            }
        }
    });
    return isErr;
}

//check validity
export const isValid = ({ type, value }) => {
    if (type === "email") {
        return emailValid(value) ? '' : "Email is invalid";
    }
    if (type === "password") {
        return pwdValid(value) ? '' : "Password must have atleast 8 characters";
    }
    if (type === "tel") {
        return phoneValid(value) ? '' : "Phone number is invalid";
    }
    if (type === "date") {
        return dateValid(value) ? '' : "Date is invalid";
    }
    if (type === "hidden") {
        return '';
    }
    return value ? '' : 'This field is required'
}

//reduce form to values
export const reduceForm = (list = []) => {
    return list.reduce((acc, {reduceTo, inputProps}) => {
        const val = reduceTo ? reduceTo() : {[inputProps.name]: inputProps.value}
        return {
            ...acc,
            ...val
        }
    }, {})
}

//get value by name
export const getValByName = (list, name) => {
    return list.filter(x => x.inputProps.name === name)[0].inputProps.value
}

//check email
export const emailValid = val => {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(val);
}

export const emptyValid = val => val.length > 0

export const phoneValid = val => {
    var re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return re.test(val);
}

export const pwdValid = val => {
    return val.length >= 8;
}

export const minLengthValid = (val, minLength) => {
    return val.length > minLength;
}

export const dateValid = val => val && val.getMonth !== undefined