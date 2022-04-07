import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: LoginView,
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/DashboardView.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

/*router.beforeEach((to, from, next) => {
  const loggedIn = router.store.getters.isUserLogged;
  const isAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isHide = to.matched.some((record) => record.meta.hideForAuth);

  if (isAuth && !loggedIn) {
    return next({ path: "/" });
  } else if (isHide && loggedIn) {
    return next({ path: "/dashboard" });
  }
  next();
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (router.store.getters.isUserLogged) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});*/

export default router;
