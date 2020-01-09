import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  // {
  //   path: "/buy",
  //   name: "buybuy",
  //   component: Buy
  // },
  {
    path: "/solution",
    name: "solution",
    redirect: "/solution/s",
    component: Home,
    children: [
      {
        path: "/solution/s",
        name: "solution/s"
        // component: () =>
        //   import(/* webpackChunkName: "solution" */ )
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
