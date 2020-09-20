<template>
  <section class="hero">
    <div class="parent-1">
      <h1 class="title is-1">Compare two animes! :)</h1>
    </div>
    <div class="columns">
      <div class="column">
        <b-field class="label" label="Anime 1">
          <b-input value="Enter the first anime!"></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field class="label" label="Anime 2">
          <b-input value="Enter the second anime!"></b-input>
        </b-field>
      </div>
    </div>
    <div class="button-spacing">
      <b-button class="button" type="is-primary">Compare!</b-button>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy);
export default {
  methods: {},
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
