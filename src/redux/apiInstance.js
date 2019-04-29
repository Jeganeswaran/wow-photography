import axios from "axios";

const dev_domain = "192.168.1.7:8000";
const prod_domain = "wowadmin.clusterbooks.com";

//rest
const devUrl = `http://${dev_domain}/`;
const prodUrl = `https://${prod_domain}/`;

export const baseURL = process.env.NODE_ENV === "development" ? devUrl : prodUrl;

const { CancelToken, create, isCancel } = axios;

const apiInstance = create({ baseURL });

export { CancelToken, isCancel }

export default apiInstance;