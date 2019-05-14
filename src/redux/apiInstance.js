import axios from "axios";

const dev_domain = "192.168.0.110:8000";
const prod_domain = "wowphotolive.billioncart.com";

//rest
const devUrl = `http://${dev_domain}/`;
const prodUrl = `https://${prod_domain}/`;

export const baseURL = process.env.NODE_ENV === "development" ? devUrl : prodUrl;

const { CancelToken, create, isCancel } = axios;

const apiInstance = create({ baseURL });

export { CancelToken, isCancel }

export default apiInstance;