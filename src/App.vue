<template>
  <div id="app">
    <HomePage />
    <footer class="footer">
      <div class="content has-text-centered is-size-5">
        Made with ❤️, thank you to the community and Jikan API for this
        projects' success!
      </div>
    </footer>
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";
import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Buefy);
export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style>
.footer {
  position: relative;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: aquamarine;

  padding: 1rem 8rem 1rem;
}
</style>
