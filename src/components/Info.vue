<template>
  <section>
    <div class="tile is-ancestor">
      <div class="tile">
        <div class="column">
          <img :src="url1" alt="./assets/notFound.png" />
        </div>
      </div>

      <div class="tile">
        <div class="column">
          <img :src="url2" alt="./assets/notFound.png" />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="column">
        <div class="box">
          <div class="is-size-3">Title: {{ title1 }}</div>
        </div>
      </div>

      <div class="column">
        <div class="box">
          <div class="is-size-3">Title: {{ title2 }}</div>
          <div class="is-size-5"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import Vue from "vue";
Vue.use(Buefy);

export default {
  props: {
    anime1: String,
    anime2: String,
  },
  data() {
    return {
      url1: "",
      url2: "",
      title1: "",
      title2: "",
      trailerUrl1: "",
      trailerUrl2: "",
      episodes1: "",
      episodes2: "",
      duration1: "",
      duration2: "",
      rating1: "",
      rating2: "",
      aired1: "",
      aired2: "",
      score1: "",
      score2: "",
      rank1: "",
      rank2: "",
      popularity1: "",
      popularity2: "",
      synopsis1: "",
      synopsis2: "",
      genres1: [],
      genres2: [],
      openingTheme1: [],
      openingTheme2: [],
      endingTheme1: [],
      endingTheme2: [],
      error: "",
    };
  },
  methods: {
    animeFind(anime, data, info) {
      axios
        .get(`https://api.jikan.moe/v3/search/anime?q=${anime}`)
        .then((response) => {
          const id = response.data["results"][0]["mal_id"];
          axios
            .get(`https://api.jikan.moe/v3/anime/${id}`)
            .then((response) => (this[data] = response.data[info]));
        })
        .catch((error) => {
          this.error = error; // take care of this later
        });
    },
  },

  watch: {
    anime1: {
      immediate: true,
      // eslint-disable-next-line no-unused-vars
      handler(newVal, oldVal) {
        this.animeFind(newVal, "url1", "image_url");
        this.animeFind(newVal, "title1", "title_english");
      },
    },
    anime2: {
      immediate: true,
      // eslint-disable-next-line no-unused-vars
      handler(newVal, oldVal) {
        this.animeFind(newVal, "url2", "image_url");
        this.animeFind(newVal, "title2", "title_english");
      },
    },
  },
};
</script>

<style>
.tile.is-ancestor {
  display: flex;
  margin-top: 2%;
  margin-left: 19rem;
  margin-right: 2rem;
}
.is-size-3 {
  text-align: center;
}
.container {
  display: flex;
}
</style>
