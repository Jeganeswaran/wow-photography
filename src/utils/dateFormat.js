//date formating
const dateFormat = (date, options = {}) => {
    const sevenDays = 604800000;  //in ms
    const oneDay = sevenDays / 7;
    const oneHour = oneDay / 24;
    const oneMin = oneHour / 60;
    try {
        const dt = new Date(date);
        const now = new Date();
        const diff = now.getTime() - dt.getTime();
        if (diff < sevenDays && diff >= 0) {
            if (diff > oneDay) {
                const days = parseInt(diff / oneDay, 10);
                return `${days} day${days > 1 ? 's' : ''} ago`
            } else {
                if (diff > oneHour) {
                    const hrs = parseInt(diff / oneHour, 10);
                    return `${hrs} hour${hrs > 1 ? 's' : ''} ago`
                }
                return `${parseInt(diff / oneMin, 10)} min ago`
            }
        } else {
            return dt.toLocaleDateString("en-IN", options);
        }
    } catch (err) {
        console.log(err);
        return "";
    }
}

export default dateFormat;