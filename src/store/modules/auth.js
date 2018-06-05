import api from "../../api/imgur";
import qs from "qs";

const state = {
  token: null
};

const getters = {
  isLoggedIn: state => !!state.token
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

const actions = {
  login: () => {
    api.login();
  },

  finalizeLogin({ commit }, hash) {
    const query = qs.parse(hash.replace("#", ""));
    commit("setToken", query.access_token);
  },

  logout: ({ commit }) => {
    commit("setToken", null);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
