import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000;	//网络请求延迟

let token = window.localStorage.getItem('token');
let uid = window.localStorage.getItem('uid');
let kind = window.localStorage.getItem('kind');
if(token){
    axios.defaults.headers.common['token']= token
}
if(uid){
    axios.defaults.headers.common['uid']= uid
}
if(kind){
    axios.defaults.headers.common['kind']= kind
}

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:8080/';


//添加请求拦截器
axios.interceptors.request.use((config) => {
    //在发送请求之前做某事
    return config;
},(error) =>{
	//请求错误时做些事
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) =>{
    
    //对响应数据做些事
    return res;
}, (error) => {
    alert(error);
	 //请求错误时做些事
    return Promise.reject(error);
});

export default axios;