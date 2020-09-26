<template>
  <section class="hero">
    <div class="parent-1">
      <h1 class="title is-1">Compare two animes! :)</h1>
    </div>

    <div class="columns">
      <div class="column">
        <b-field class="label" label="Anime 1">
          <b-input value="Enter the first anime!" v-model="anime1"></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field class="label" label="Anime 2">
          <b-input value="Enter the second anime!" v-model="anime2"></b-input>
        </b-field>
      </div>
    </div>
    <div class="button-spacing">
      <b-button class="button" type="is-primary" @click="checkComplete"
        >Compare!</b-button
      >
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
      anime1: "",
      anime2: "",
      success: false,
    };
  },

  methods: {
    checkComplete() {
      if (this.anime1.length > 0 && this.anime2.length > 0) {
        this.success = true;
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
