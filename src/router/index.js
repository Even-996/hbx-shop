import vue from 'vue'
import vueRouter from 'vue-router'
vue.use(vueRouter)


const Home = () => import('../views/home/Home');
const Man = () => import('../views/man/Man');
const Women = () => import('../views/women/Women');
const Kid = () => import('../views/kid/Kid');
const Times = () => import('../views/times/Times');
const Newest = () => import('../views/newest/Newest');
const Discount = () => import('../views/discount/Discount');
const Login = () => import('../views/login/Login');
const Help = () => import('../views/help/Help');
const Bags = () => import('../views/bags/Bags');


const routes = [
    {
       path: '',
       redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
	{
	    path: '/man',
	    component: Man
	},
	{
	    path: '/women',
	    component: Women
	},
	{
	    path: '/kid',
	    component: Kid
	},
	{
	    path: '/times',
	    component: Times
	},
    {
        path: '/newest',
        component: Newest
    },
	{
	    path: '/discount',
	    component: Discount
	},
	{
	    path: '/login',
	    component: Login
	},
	{
	    path: '/help',
	    component: Help
	},
	{
	    path: '/bags',
	    component: Bags
	}
    

]

const router = new vueRouter({
    routes,
    mode: 'history'
})

export default router