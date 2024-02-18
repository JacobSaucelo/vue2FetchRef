import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/Comp.GetUsers.vue";
import PostUser from "./components/Comp.UserPost.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/post/:id", component: PostUser },
];

const router = new VueRouter({
  routes,
});

export default router;
