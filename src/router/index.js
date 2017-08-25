import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['../components/Login'], resolve)
    },
    {
    	path: '/index',
    	component: resolve => require(['../components/index'], resolve),
    	children:[
    		{
    			path: 'Hello',
    			component: resolve => require(['../components/Hello'], resolve)
    		}
    	]
    }
  ]
})
