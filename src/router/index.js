import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login";
import BookSearching from "../components/bookSearching";
import SeatOrdering from "../components/seatOrdering";
import borrowManagement from "../components/borrowManagement";

Vue.use(VueRouter);

//防止多次点击menuitem报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

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
      },
      {
        path: "/seatOrdering",
        name: "seatOrdering",
        component: SeatOrdering
      },
      {
        path:'/borrowManagement',
        name:'borrowManagement',
        component:borrowManagement
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
