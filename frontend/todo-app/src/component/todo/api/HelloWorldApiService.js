import { apiClient } from './ApiClient'
// export function retriveHelloWorldBean(){
//     return axios.get('http://localhost:8080/hello-world')
// }



export const retriveHelloWorldBean = () => apiClient.get('/hello-world-bean')

// Response to preflight request doesn't pass access control check => Authorization header
export const retriveHelloWorldPathVariable 
    = (username) => apiClient.get(`/hello-world/path-variable/${username}`)

