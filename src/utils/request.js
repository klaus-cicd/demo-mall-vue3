import axios from 'axios'

// 1. 创建axios对象
let service = axios.create();

// 2. 配置请求拦截器
service.interceptors.request.use(config => {
    // 通过修改config来配置请求需要设置, 比如在header内加入Token

    let url = config.url;
    console.log('正在请求:' + url)
    return config;
}, error => {
    Promise.reject(error);
})

// 3. 响应拦截器配置
service.interceptors.response.use(response => {
    // 比如根据业务去做响应code校验
    return response.data;
}, error => {
    return Promise.reject(error);
})


export default service;

export function get(url, queryParamsMap = {}, headerMap = {}) {
    if (queryParamsMap instanceof Map) {
        let urlParams;
        let index = 0;
        for (const [key, value] of queryParamsMap.entries()) {
            if (index === 0) {
                urlParams = '?';
            } else {
                urlParams += '&';
            }
            urlParams += (key + '=' + value)
            index++;
        }
        url += urlParams
    }

    return axios.get(url)
}

export function post(url, data) {
    return axios.post(url, data)
}