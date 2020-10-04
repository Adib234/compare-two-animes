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
      <div class="column ">
        <div class="box">
          <div class="video">
            <iframe
              width="420"
              height="315"
              :src="trailerUrl1"
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            >
            </iframe>
          </div>
          <div class="is-size-3"><strong>Title:</strong> {{ title1 }}</div>
          <div class="is-size-4">
            <strong>Synopsis:</strong>
            {{ synopsis1.replace("[Written by MAL Rewrite]", "") }}
          </div>
          <table class="table is-bordered is-fullwidth">
            <tbody>
              <tr>
                <th>Episodes</th>
                <td>{{ episodes1 != null ? episodes1 : "Ongoing" }}</td>
              </tr>
              <tr>
                <th>Duration</th>
                <td>{{ duration1 }}</td>
              </tr>
              <tr>
                <th>Rating</th>
                <td>{{ rating1 }}</td>
              </tr>
              <tr>
                <th>Aired</th>
                <td>{{ aired1["string"] }}</td>
              </tr>
              <tr>
                <th>Score</th>
                <td>{{ score1 }}</td>
              </tr>
              <tr>
                <th>Favourites</th>
                <td>{{ favorites1 }}</td>
              </tr>
              <tr>
                <th>Genres</th>
                <td>{{ genres1.map((genre) => genre.name).toString() }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="box">
          <div class="is-size-2">Opening Theme Songs</div>
          <ul id="example-1">
            <li v-for="song in openingTheme1" :key="song">
              <!-- <iframe :src="getFrameSrc(song)"> </iframe> -->
              {{ song.slice(song.indexOf(":") + 1).replace(/['"]+/g, "") }}
            </li>
          </ul>
        </div>
        <div class="box">
          <div class="is-size-2">Ending Theme Songs</div>
          <ul id="example-1">
            <li v-for="song in endingTheme1" :key="song">
              <!-- <iframe :src="getFrameSrc(song)"> </iframe> -->
              {{ song.slice(song.indexOf(":") + 1).replace(/['"]+/g, "") }}
            </li>
          </ul>
        </div>
      </div>

      <div class="column">
        <div class="box">
          <div class="video">
            <iframe
              width="420"
              height="315"
              :src="trailerUrl2"
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            >
            </iframe>
          </div>
          <div class="is-size-3"><strong>Title:</strong> {{ title2 }}</div>
          <div class="is-size-4">
            <strong>Synopsis:</strong>
            {{ synopsis2.replace("[Written by MAL Rewrite]", "") }}
          </div>
          <table class="table is-bordered is-fullwidth">
            <tbody>
              <tr>
                <th>Episodes</th>
                <td>{{ episodes2 != null ? episodes2 : "Ongoing" }}</td>
              </tr>
              <tr>
                <th>Duration</th>
                <td>{{ duration2 }}</td>
              </tr>
              <tr>
                <th>Rating</th>
                <td>{{ rating2 }}</td>
              </tr>
              <tr>
                <th>Aired</th>
                <td>{{ aired2["string"] }}</td>
              </tr>
              <tr>
                <th>Score</th>
                <td>{{ score2 }}</td>
              </tr>
              <tr>
                <th>Favourites</th>
                <td>{{ favorites2 }}</td>
              </tr>
              <tr>
                <th>Genres</th>
                <td>{{ genres2.map((genre) => genre.name).toString() }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="box">
          <div class="is-size-2">Opening Theme Songs</div>
          <ul id="example-1">
            <li v-for="song in openingTheme2" :key="song">
              <!-- <iframe :src="getFrameSrc(song)"> </iframe> -->
              {{ song.slice(song.indexOf(":") + 1).replace(/['"]+/g, "") }}
            </li>
          </ul>
        </div>
        <div class="box">
          <div class="is-size-2">Ending Theme Songs</div>
          <ul id="example-1">
            <li v-for="song in endingTheme2" :key="song">
              <!-- <iframe :src="getFrameSrc(song)"> </iframe> -->
              {{ song.slice(song.indexOf(":") + 1).replace(/['"]+/g, "") }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script src="https://apis.google.com/js/api.js"></script>
<script src="https://apis.google.com/js/client.js?onload=handleClientLoad"></script>
<script>
/* global gapi */
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
      favorites1: "",
      favorites2: "",
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
    // getFrameSrc(q) {
    //   q = q.slice(q.indexOf(":") + 1).replace(/['"]+/g, "");
    //   gapi.client.setApiKey("---------------------------------------");
    //   return gapi.client
    //     .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
    //     .then(
    //       function() {
    //         return gapi.client.youtube.search
    //           .list({
    //             part: ["snippet"],
    //             q: q,
    //           })
    //           .then(
    //             function(response) {
    //               return `https://www.youtube.com/watch?v=${response["result"]["items"]["0"]["id"]["videoId"]}`;
    //             },
    //             function(err) {
    //               console.error("Execute error", err);
    //             }
    //           );
    //       },
    //       function(err) {
    //         console.error("Error loading GAPI client for API", err);
    //       }
    //     );
    // },
  },

  watch: {
    anime1: {
      immediate: true,
      // eslint-disable-next-line no-unused-vars
      handler(newVal, oldVal) {
        this.animeFind(newVal, "url1", "image_url");
        this.animeFind(newVal, "title1", "title_english");
        this.animeFind(newVal, "episodes1", "episodes");
        this.animeFind(newVal, "synopsis1", "synopsis");
        this.animeFind(newVal, "duration1", "duration");
        this.animeFind(newVal, "rating1", "rating");
        this.animeFind(newVal, "aired1", "aired");
        this.animeFind(newVal, "score1", "score");
        this.animeFind(newVal, "favorites1", "favorites");
        this.animeFind(newVal, "genres1", "genres");
        this.animeFind(newVal, "trailerUrl1", "trailer_url");
        this.animeFind(newVal, "openingTheme1", "opening_themes");
        this.animeFind(newVal, "endingTheme1", "ending_themes");
      },
    },
    anime2: {
      immediate: true,
      // eslint-disable-next-line no-unused-vars
      handler(newVal, oldVal) {
        this.animeFind(newVal, "url2", "image_url");
        this.animeFind(newVal, "title2", "title_english");
        this.animeFind(newVal, "episodes2", "episodes");
        this.animeFind(newVal, "synopsis2", "synopsis");
        this.animeFind(newVal, "duration2", "duration");
        this.animeFind(newVal, "rating2", "rating");
        this.animeFind(newVal, "aired2", "aired");
        this.animeFind(newVal, "score2", "score");
        this.animeFind(newVal, "favorites2", "favorites");
        this.animeFind(newVal, "genres2", "genres");
        this.animeFind(newVal, "trailerUrl2", "trailer_url");
        this.animeFind(newVal, "openingTheme2", "opening_themes");
        this.animeFind(newVal, "endingTheme2", "ending_themes");
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
.video {
  text-align: center;
}
.container {
  justify-content: space-around;
  display: flex;
}
.table {
  margin-top: 2rem;
}
</style>
