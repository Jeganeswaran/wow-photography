import axios from "axios";

const dev_domain = "wowadmin.clusterbooks.com";
const prod_domain = "wowadmin.clusterbooks.com";

//rest
const devUrl = `http://${dev_domain}/`;
const prodUrl = `http://${prod_domain}/`;

export const baseURL = process.env.NODE_ENV === "development" ? devUrl : prodUrl;

const {CancelToken, create, isCancel} = axios;

const apiInstance = create({ baseURL });

export { CancelToken, isCancel }

export default apiInstance;