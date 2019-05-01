export const urlParams = url => {
    let keys = {};
    let params = decodeURIComponent(url).replace("?", "").replace(/&amp;/g, '&').split("&");
    params.forEach(par => {
        let x = par.split("=");
        keys[x[0]] = x[1];  
    })
    return keys;
}