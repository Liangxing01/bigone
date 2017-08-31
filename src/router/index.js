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
    			path: 'myApplication',
    			component: resolve => require(['../components/myApplication'], resolve)
    		},
            {
                path: 'parking',
                component: resolve => require(['../components/park'], resolve)
            },
    		{
    			path: 'map',
    			component: resolve => require(['../components/map'], resolve)
    		},
    		{
    			path: 'personal',
    			component: resolve => require(['../components/personal'], resolve)
    		},
            {
                path: 'cover',
                component: resolve => require(['../components/cover'], resolve)
            },
            {
                path: 'temperature',
                component: resolve => require(['../components/temperature'], resolve)
            },
            {
                path: 'smoke',
                component: resolve => require(['../components/smoke'], resolve)
            }
    	]
    }
  ]
})
