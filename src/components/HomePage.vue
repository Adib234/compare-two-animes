<template>
  <section class="section1">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="is-size-1">Compare 2 Anime</div>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-light">
              <router-link to="/searchchat">
                <strong>Join a chat room!</strong>
              </router-link>
            </a>

            <a class="button is-light">
              <router-link to="/searchchat">
                Video chat!
              </router-link>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <div class="hero">
      <div class="parent-1">
        <h1 class="title is-1">Compare two animes! :)</h1>
      </div>

      <div class="columns is-mobile">
        <div class="column">
          <b-field class="label" label="Anime 1">
            <b-input
              value="Enter the first anime!"
              v-model="placeholderAnime1"
            ></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field class="label" label="Anime 2">
            <b-input
              value="Enter the second anime!"
              v-model="placeholderAnime2"
            ></b-input>
          </b-field>
        </div>
      </div>
      <div class="button-spacing is-mobile">
        <b-button class="button" type="is-primary" @click="checkComplete"
          >Compare!</b-button
        >
      </div>
    </div>
    <Info :anime1="anime1" :anime2="anime2" v-if="success"></Info>
  </section>
</template>

<script>
import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import Info from "./Info.vue";
Vue.use(Buefy);
export default {
  components: {
    Info,
  },
  data() {
    return {
      placeholderAnime1: "",
      placeholderAnime2: "",
      anime1: "",
      anime2: "",
      success: false,
    };
  },
  methods: {
    checkComplete() {
      if (
        this.placeholderAnime1.length > 0 &&
        this.placeholderAnime2.length > 0
      ) {
        this.success = true;
        this.anime1 = this.placeholderAnime1;
        this.anime2 = this.placeholderAnime2;
        this.placeholderAnime1 = "";
        this.placeholderAnime2 = "";
        return this.$buefy.toast.open({
          message: "Yay, just a moment now!",
          type: "is-success",
          position: "is-bottom",
          duration: 3000,
        });
      }
      this.success = false;
      return this.$buefy.toast.open({
        duration: 3000,
        message: `Please fill out both fields`,
        position: "is-bottom",
        type: "is-danger",
      });
    },
  },
};
</script>

<style>
.title.is-1 {
  text-align: center;
}
.parent-1 {
  margin-top: 10%;
}
.columns {
  margin-top: 2%;
  margin-right: 10%;
  margin-left: 10%;
}
.label {
  text-align: center;
}

.button-spacing {
  text-align: center;
}
</style>
