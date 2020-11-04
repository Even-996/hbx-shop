import axios from 'axios'

export function request(config) {
    //初始化一个实例
    const instance = axios.create({
        baseURL: 'http://localhost:10086/hbx/api',
        timeout: 5000
    })
    //axios的拦截器
    instance.interceptors.request.use(config =>{
        return config;
    },error => {
        console.log(error);
    })

    //响应拦截
    instance.interceptors.response.use(config=>{
        return config;
    },error => {
        console.log(error);
    })
    return instance(config);
}
