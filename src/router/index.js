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
    },
    {
        path: '/adminLogin', component: resolve => require(['../components/admin/adminLogin'], resolve)
    },
    {
        path: '/admin', component: resolve => require(['../components/admin/admin'], resolve),
        beforeEnter: (from, to, next) =>{
            if(!localStorage.getItem('username')){
                next('/adminLogin');
            }
            next();
        },
        children:[
            {
                path: 'tem', component: resolve => require(['../components/admin/tem'], resolve)
            },
            {
                path: 'jingai', component: resolve => require(['../components/admin/jingai'], resolve)
            },
            {
                path: 'smoke', component: resolve => require(['../components/admin/smoke'], resolve)
            },
            {
                path: 'dici', component: resolve => require(['../components/admin/dici'], resolve)
            },
            {   
                    path: 'send', component: resolve => require(['../components/admin/send'], resolve)
            },
            {
                path: 'raw', component: resolve => require(['../components/admin/raw'], resolve)
            },
            {
                path: 'weather', component: resolve => require(['../components/admin/weather'], resolve)
            },
            {
                path: 'lorascan', component: resolve => require(['../components/admin/lorascan'], resolve)
            }
        ]
    }
  ]
})
