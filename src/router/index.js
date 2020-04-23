import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = () => import('../views/home/Home.vue')
const Cart = () => import('../views/cart/Cart.vue')
const CateGory = () => import('../views/category/CateGory.vue')
const Profile = () => import('../views/profile/Profile.vue')


const routes=[
    {
        path:"",
        redirect:'/home'
    },
    {
        path:"/home",
        component:Home
    },
    {
        path:"/cart",
        component:Cart
    },
    {
        path:"/category",
        component:CateGory
    },
    {
        path:"/profile",
        component:Profile
    },
    

]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router