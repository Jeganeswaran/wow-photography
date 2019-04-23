//date formating
const dateFormat = (date, options = {}) => {
    return new Date(date).toLocaleDateString("en-IN", options);
}

export default dateFormat;