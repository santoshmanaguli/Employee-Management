import { createRouter, createWebHistory } from "vue-router";
import DashBoard from "./components/DashBoard"
import RPage from "./components/RPage"
import EditEmp from "./components/EditEmp"

const routes = [
    {
        name: "DashBoard",
        path: "/dashboard",
        component: DashBoard
    },
    {
        path: "/rpage",
        component: RPage
    },
    {
        name:"EditEmp",
        path:"/editemp/:id",
        component: EditEmp
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;