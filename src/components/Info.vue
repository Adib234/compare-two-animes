<template>
  <section>
    <img :src="url1" alt="./assets/notFound.png" width="100" height="100" />
    <img :src="url2" alt="./assets/notFound.png" width="100" height="100" />
  </section>
</template>

<script>
import axios from "axios";

export default {
  props: {
    anime1: String,
    anime2: String,
  },
  data() {
    return {
      url1: "",
      url2: "",
      error: "",
    };
  },
  methods: {
    animeFind(anime, data) {
      axios
        .get(`https://api.jikan.moe/v3/search/anime?q=${anime}`)
        .then((response) => {
          const id = response.data["results"][0]["mal_id"];
          axios
            .get(`https://api.jikan.moe/v3/anime/${id}`)
            .then((response) => (this[data] = response.data["image_url"]));
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
        this.animeFind(newVal, "url1");
      },
    },
    anime2: {
      immediate: true,
      // eslint-disable-next-line no-unused-vars
      handler(newVal, oldVal) {
        this.animeFind(newVal, "url2");
      },
    },
  },
};
</script>
