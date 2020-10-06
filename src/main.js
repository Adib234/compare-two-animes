import Vue from "vue";
import App from "./App.vue";
import { Button, Input } from "buefy";
import "buefy/dist/buefy.css";
import VueRouter from "vue-router";
import SearchChat from "./components/SearchChat.vue";
import Main from "./components/Main.vue";
import NotFound from "./components/NotFound.vue";
import Chat from "./components/Chat.vue";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
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
    {
      path: "*",
      component: NotFound,
    },
    { path: "/chat", component: Chat },
  ],
});
Vue.use(Button);
Vue.use(Input);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
