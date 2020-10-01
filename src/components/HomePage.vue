<template>
  <section class="section1">
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
.button {
  width: 10%;
}
.button-spacing {
  text-align: center;
}
</style>
