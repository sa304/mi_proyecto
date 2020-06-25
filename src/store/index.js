import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shows : []
  },
  mutations: {
    SET_SHOWS(state, shows){
      state.shows = shows
    },
    MAKE_LIKE(state, index){
      let show = state.shows[index]
      show.like = !show.like
    }
  },
  actions: {
    setShows({commit}, shows){
      commit('SET_SHOWS', shows)
    },
    makeLike({commit, state},id) {
      state.shows.forEach((s, index) => {
        s.id === id ? commit('MAKE_LIKE',index): false;
      });
    },
  },
  modules: {
  }
})
