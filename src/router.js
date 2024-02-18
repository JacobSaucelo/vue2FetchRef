import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/Comp.GetUsers.vue";
import PostUser from "./components/Comp.UserPost.vue";
import FormTest from "./components/Comp.FormTest.vue";
import DisplayStorage from "./components/Comp.DisplayStorage.vue";
import CrudTest from "./components/Comp.CrudTest.vue";
import CookiesNoLibrary from "./components/Comp.CookiesNoLibrary.vue";
import CookiesLibrary from "./components/Comp.CookiesJsCookie.vue";
import CompVueX from "./components/Comp.VuexTest.vue";
import CompPetsX from "./components/Comp.VueXPets.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/post/:id", component: PostUser },
  { path: "/formTest", component: FormTest },
  { path: "/display", component: DisplayStorage },
  { path: "/crudtest", component: CrudTest },
  { path: "/cookies-nolibrary", component: CookiesNoLibrary },
  { path: "/cookies-library", component: CookiesLibrary },
  { path: "/comp-vuex", component: CompVueX },
  { path: "/comp-petsx", component: CompPetsX },
];

const router = new VueRouter({
  routes,
});

export default router;
