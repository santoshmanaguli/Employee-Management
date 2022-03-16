import {createRouter, createWebHistory} from "vue-router";
import DashBoard from "./components/DashBoard"
import RPage from "./components/RPage"

const routes = [
    {
        path: "/dashboard",
        component: DashBoard
    },
    {
        path: "/rpage",
        component: RPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;