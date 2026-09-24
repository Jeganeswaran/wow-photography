//date formating
const dateFormat = (date, options = { year: 'numeric', month: 'short', day: 'numeric' }) => {
    return new Date(date).toLocaleDateString("en-IN", options);
}

export default dateFormat;