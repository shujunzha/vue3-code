import axios from "axios";
import qs from "qs";
//创建axios实例
const request = axios.create({
    //API请求的默认前缀
    baseURL:'https://api.oioweb.cn/api',
    timeout:60000//请求超时时间
})

//请求拦截器
request.interceptors.request.use(config=>{
    if(config.method === 'post'){
        config.data = qs.stringify(config.data)

    }
    return config;
},
error=>{
    return Promise.reject(error);
}
)
//响应拦截器
request.interceptors.response.use(res=>
    res.status === 200? Promise.resolve(res.data):Promise.reject(res.data),
    error=>{
        const {response} = error;
        if(response){
            errorHandel(response.status,response.data.message);
            return Promise.reject(response);
        }else{
            console.log('请求失败');
        }
    }
);
const errorHandel = (status, other) => {
    switch (status) {
        case 400:
            console.log("信息校验失败");
            break;
        case 401:
            console.log("认证失败");
            break;
        case 403:
            console.log("token校验失败");
            break;
        case 404:
            console.log("请求的资源不存在");
            break;
        default:
            console.log(other);
            break;

    }
}

export default request