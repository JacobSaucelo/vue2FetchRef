import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/Comp.GetUsers.vue";
import PostUser from "./components/Comp.UserPost.vue";
import FormTest from "./components/Comp.FormTest.vue";
import DisplayStorage from "./components/Comp.DisplayStorage.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/post/:id", component: PostUser },
  { path: "/formTest", component: FormTest },
  { path: "/display", component: DisplayStorage },
];

const router = new VueRouter({
  routes,
});

export default router;
