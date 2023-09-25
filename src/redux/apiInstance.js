import axios from 'axios'

const dev_domain = 'admin.wowtamilnadu.com'
const prod_domain = 'admin.wowtamilnadu.com'

//rest
const devUrl = `https://${dev_domain}/`
const prodUrl = `https://${prod_domain}/`

export const baseURL = process.env.NODE_ENV === 'development' ? devUrl : prodUrl

const { CancelToken, create, isCancel } = axios

const apiInstance = create({ baseURL })

export { CancelToken, isCancel }

export default apiInstance
