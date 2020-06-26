<template>
  <div class="home" id="home">
    <div>
      <b-navbar toggleable="lg" type="light" variant="info">
        <b-navbar-brand href="#">Laberinto TV</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="large"
                class="mr-sm-2 text-center"
                placeholder="Titulo, Categoría"
              ></b-form-input>
              <b-button size="large" class="my-2 my-sm-0" type="submit">Ver</b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <h5 class="mt-3 auto ml-2">Recomendadas</h5>

    <div class="container">
      <div class="row">
        <!--ordenado para firestore-->
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
  </div>
</template>

<script>
import Show from "@/components/Show.vue";
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState(["shows"])
  },
  methods: {
    ...mapActions(["setShows", "makeLike"])
  },
  created() {
    axios.get("http://api.tvmaze.com/shows").then(data => {
      data.data.length = 12;
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
      this.setShows(shows);
    });
  },
  components: {
    Show
  }
};
</script>

<style lang="scss" scope>
#home {
  background: #d18a07;
  text-align: left;
}

#nav {
  padding: 30px;

  #a {
    font-weight: bold;
    color: #fff;

    #router-link {
      color: #000;
    }
  }
}
</style>