import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login";
import BookSearching from "../components/bookSearching";
import SeatOrdering from "../components/seatOrdering";
import borrowManagement from "../components/borrowManagement";
import myOrder from "../components/myOrder";
import bookStatistics from "../components/bookStatistics";
import orderStatistics from "../components/orderStatistics";
import personInfo from "../components/personInfo";
import userManagement from "../components/userManagement";

Vue.use(VueRouter);

//防止多次点击menuitem报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
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
        path: "/borrowManagement",
        name: "borrowManagement",
        component: borrowManagement
      },
      {
        path: "/seatOrdering",
        name: "seatOrdering",
        component: SeatOrdering
      },
      {
        path: "/myOrder",
        name: "myOrder",
        component: myOrder
      },
      {
        path: "/bookStatistics",
        name: "bookStatistics",
        component: bookStatistics
      },
      {
        path: "/orderStatistics",
        name: "orderStatistics",
        component: orderStatistics
      },
      {
        path: "/userManagement",
        name: "userManagement",
        component: userManagement
      }
    ]
  },
  {
    path: "/personInfo",
    name: "personInfo",
    component:personInfo
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
