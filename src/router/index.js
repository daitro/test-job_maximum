import Vue from "vue";
import VueRouter from "vue-router";
import FormPage from "../pages/FormPage.vue";
import SuccessfulRequest from "../pages/SuccessfulRequestPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "FormPage",
    component: FormPage,
  },

  {
    path: "/success",
    name: "Success",
    component: SuccessfulRequest,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
