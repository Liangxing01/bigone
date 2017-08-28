import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['../components/Login'], resolve)
    },
    {
    	path: '/index',
    	component: resolve => require(['../components/index'], resolve),
      beforeEnter: (to, from, next) =>{
        var token = window.localStorage.getItem('token');
        var uid = window.localStorage.getItem('uid');
        var kind = window.localStorage.getItem('kind');
        if(token && uid && kind){
          next();
        }else{
          next('/');
        }
      },
    	children:[
    		{
    			path: 'Hello',
    			component: resolve => require(['../components/Hello'], resolve)
    		}
    	]
    }
  ]
})
