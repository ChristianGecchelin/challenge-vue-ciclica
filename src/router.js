import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home";
import Form from "@/views/Form";
import Error from "@/views/Error";
const history = createWebHistory();
export default createRouter({
  history,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/form",
      name: "form",
      component: Form,
    },
    {
      path: "/:catchAll(.*)",
      name: "Error",
      component: Error,
    },
  ],
});
