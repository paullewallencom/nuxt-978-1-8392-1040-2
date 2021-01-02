import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      headlines: [],
      loading: false,
      category: "",
      country: "us"
    },
    mutations: {
      setHeadlines(state, headlines) {
        state.headlines = headlines;
      },
      setLoading(state, loading) {
        state.loading = loading;
      },
      setCategory(state, category) {
        state.category = category;
      },
      setCountry(state, country) {
        state.country = country;
      }
    },
    actions: {
      async loadHeadlines({ commit }, apiUrl) {
        commit("setLoading", true);
        const { articles } = await this.$axios.$get(apiUrl);
        commit("setLoading", false);
        commit("setHeadlines", articles);
      },
      async authenticateUser({ commit }, userPayload) {
        try {
          commit("setLoading", true);
          const authUserData = await this.$axios.$post(
            "/register/",
            userPayload
          );
          console.log(authUserData);
          commit("setLoading", false);
        } catch (err) {
          console.error(err);
          commit("setLoading", false);
        }
      }
    },
    getters: {
      headlines: state => state.headlines,
      loading: state => state.loading,
      category: state => state.category,
      country: state => state.country
    }
  });
};

export default createStore;
