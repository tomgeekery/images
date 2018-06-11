import api from "../../api/imgur";
import { router } from "../../main";

const state = {
  images: []
};

const getters = {
  allImages: state => state.images
};

const mutations = {
  setImages(state, images) {
    state.images = images;
  }
};

const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    
    console.log(response);

    // Store image response.
    commit("setImages", response.data.data);
  },
  async uploadImages({ rootState }, images) {
    // Get access token
    const { token } = rootState.auth;

    // Upload image to imgur.
    await api.uploadImages(images, token);

    // Send user to gallery.
    router.push("/");
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}