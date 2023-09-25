//load user from localstorage
export const loadLocalState = () => {
    try {
        const serializedState = localStorage.getItem('user');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

//save user to localstorage
export const saveLocalState = (state) => {
    try {
        const data = loadLocalState() || {};
        const serializedState = JSON.stringify({...data, ...state});
        localStorage.setItem('user', serializedState);
    } catch (err) {
        // Ignore write errors.
    }
};