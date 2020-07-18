import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login";
import BookSearching from "../components/bookSearching";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    children: [
      {
        path: "/bookSearching",
        name: "bookSearching",
        component: BookSearching
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
