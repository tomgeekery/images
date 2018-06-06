const state = {
  image: []
};

const getter = {
  allImages: state => state.images
};

const mutations = {
  setImages(state, images) {
    state.images = images;
  }
};

const actions = {
  fetchImages() {}
}

export default {
  state,
  getter,
  mutations,
  actions,
}