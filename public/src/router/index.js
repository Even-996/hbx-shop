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
const Problem = () => import('../views/help/help-children/Problem');
const Payment = () => import('../views/help/help-children/Payment');
const Return = () => import('../views/help/help-children/Return');
const Rule = () => import('../views/help/help-children/Rule');
const Tax = () => import('../views/help/help-children/Tax');
const Register = () => import('../views/login/loginitem/Register');
const ExLogin = () => import('../views/login/loginitem/ExLogin');
const DetailHave = ()=> import('../views/detail/DetailHave')
const DetailSold=() => import('../views/detail/DetailSold')

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
	    component: Login,
		 children: [
            {
                path: '',
                redirect: 'exlogin'
            },
            {
                path: 'register',
                component: Register
            },
            {
                path: 'exlogin',
                component: ExLogin
            },

        ],
	},
	{
	    path: '/help',
	    component: Help,
		children:[
			{
				path: '',
				redirect: 'problem'
			},
			{
				path: 'problem',
				component: Problem
			},
			{
				path: 'payment',
				component: Payment
			},
			{
				path: 'return',
				component: Return
			},
			{
				path: 'rule',
				component: Rule
			},
			{
				path: 'tax',
				component: Tax
			}
		]
	},
	{
	    path: '/bags',
	    component: Bags
	},
	{
		path: '/detail-have',
		component: DetailHave
	},
	{
		path: '/detail-sold',
		component: DetailSold
	}
    

]

const router = new vueRouter({
    routes,
    mode: 'history'
})

export default router