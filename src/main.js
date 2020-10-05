import Vue from "vue";
import App from "./App.vue";
import { Button, Input } from "buefy";
import "buefy/dist/buefy.css";
import VueRouter from "vue-router";
import SearchChat from "./components/SearchChat.vue";
import Main from "./components/Main.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/searchchat",
    name: "searchchat",
    component: SearchChat,
  },
  {
    path: "/",
    name: "main",
    component: Main,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});
Vue.use(Button);
Vue.use(Input);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
