import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000;	//网络请求延迟
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:8080/';


//添加请求拦截器
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    //在发送请求之前做某事
    return config;
},(error) =>{
	//请求错误时做些事
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) =>{
    if(!res.data.success){
        return Promise.reject(res);
    }
    //对响应数据做些事
    return res;
}, (error) => {
	 //请求错误时做些事
    return Promise.reject(error);
});

export default axios;