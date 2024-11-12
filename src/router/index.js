import { createRouter, createWebHistory } from "vue-router";

const scrollBehavior = () => {
  return {
    top: 0,
    behavior: "smooth",
  };
};

const routes = [
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "not-found",
  //   component: () => import("../pages/not-found.vue"),
  // },
  {
    path: "/",
    component: () => import("../layouts/default.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../pages/Home.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
});

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem("access_token");
//   const role = localStorage.getItem("role");

//   if (to.name == "home" && Boolean(token)) {
//     if (role === "driver") {
//       next({ name: "driver-profile" });
//     } else {
//       next({ name: "passenger-home" });
//     }
//   } else if (
//     to.name !== "home" &&
//     to.name !== "passenger_login" &&
//     to.name !== "driver_regis" &&
//     to.name !== "passenger_regis" &&
//     to.name !== "driver_verify" &&
//     to.name !== "FAQ" &&
//     to.name !== "about" &&
//     to.name !== "driver_login" &&
//     to.name !== "passenger_verify" &&
//     to.name !== "user" &&
//     !token
//   ) {
//     next({ name: "home" });
//   } else {
//     next();
//   }
// });

export default router;
