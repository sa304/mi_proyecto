<template>
  <div class="home container">
    <div class="row">
      <Show
        v-for="(show, index) in shows"
        :key="index"
        :id="show.id"
        :img="show.image"
        :name="show.name"
        :description="show.summary"
        :like="show.like"
        @makeLike="makeLike"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Show from "@/components/Show.vue";
import axios from "axios";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState(["shows"])
  },
  methods: {
    ...mapActions(['setShows','makeLike'])
  },
  created() {
    axios.get("http://api.tvmaze.com/shows").then(data => {
      data.data.length = 10;
      let shows = [];
      data.data.forEach(s => {
        shows.push({
          id: s.id,
          name: s.name,
          image: s.image.medium,
          summary: s.summary,
          like: false
        });
      });
      this.setShows(shows)
    });
  },
  components: {
    Show
  }
};
</script>