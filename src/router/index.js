import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import UserSettings from '../components/UserSettings.vue'
import WishList from '../components/WishList.vue'
import Contact from '../components/Contact.vue'
import ShoppingCart from '../components/ShoppingCart.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, 
    props: true
  },
  {
    path: '/usersettings',
    name: 'UserSettings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: UserSettings
  },
  {
    path: '/wishlist',
    name: 'WishList',
    component: WishList
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/shopping',
    name: 'ShoppingCart',
    component: ShoppingCart,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
