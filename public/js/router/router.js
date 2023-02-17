import Home from "../components/Home.js";
import Sobre from "../components/Sobre.js";
import Login from "../components/Login.js";


let isAuthenticated = true;


//************************************************************ */
const routes = [
    { path: '/', name:"Home", component: Home },
    
    { path: '/login', name:"Login", component: Login },

    { path: '/sobre', name:"Sobre", component: Sobre}
];

const router = VueRouter.createRouter({

    history: VueRouter.createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
    else next()
});


export default router;
