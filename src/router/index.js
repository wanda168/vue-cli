import { createRouter, createWebHistory } from "vue-router";
import BodyComponent from "./../components/BodyComponent.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: BodyComponent,
    },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
