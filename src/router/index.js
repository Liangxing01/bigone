import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
//	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['../components/Login'], resolve)
    },
    {
    	path: '/user',
    	component: resolve => require(['../components/index'], resolve),
    	children:[
    		{
    			path: 'index',
    			component: resolve => require(['../components/Hello'], resolve)
    		},
    		{
    			path: 'gateway',
    			component: resolve => require(['../components/gateway'], resolve)
    		},
    		{
    			path: 'application',
    			component: resolve => require(['../components/application'], resolve)
    		},
    		{
    			path: 'map',
    			component: resolve => require(['../components/map'], resolve)
    		},
    		{
    			path: 'personal',
    			component: resolve => require(['../components/personal'], resolve)
    		}
    	]
    }
  ]
})
