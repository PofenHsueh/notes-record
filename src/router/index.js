import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HelloWorld",
     component: () =>
          import(/* webpackChunkName: "Home" */ "../components/HelloWorld.vue")
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;