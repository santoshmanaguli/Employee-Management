import { createRouter, createWebHistory } from "vue-router";
import DashBoard from "./components/DashBoard.vue"
import RPage from "./components/RPage.vue"
import EditEmp from "./components/EditEmp.vue"

const routes = [
    {
        name: "DashBoard",
        path: "/dashboard",
        component: DashBoard
    },
    {
        name: "RPage",
        path: "/rpage",
        component: RPage
    },
    {
        name: "EditEmp",
        path: "/editemp/:id",
        component: EditEmp
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;