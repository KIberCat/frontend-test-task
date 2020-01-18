
export const state = () => ({
  breedAll: null,
  breed: null,
  images: null,
  buttonBreed: null
});

export const mutations = {
  setBreedAll(state, data) {
    state.breedAll = data;
  },
  setBreed(state, data) {
    state.breed = data;
  },

  setImages(state, data) {
    state.images = data;
  },
  updateImages(state, data) {
    state.images = state.images.concat(data);
  },

  setButtonBreed(state, data) {
    state.buttonBreed = data;
  },
  clearButtonBreed(state) {
    state.buttonBreed = null;
  },
};

export const actions = {
  async getBreedAll({commit}) {
    try {
      const response = await this.$axios.$get('https://dog.ceo/api/breeds/list/all');
      commit('setBreedAll', Object.keys(response.message));
    } catch (e) {
      throw e;
    }
  },

  async getBreed({commit}, name) {
    try {
      const response = await this.$axios.$get(`https://dog.ceo/api/breed/${name}/images/random/20`);
      const data = response.message.map(item => ({src: item}));
      commit('setBreed', data);
    } catch (e) {
      throw e;
    }
  },

  async getImages({commit}, mutation = 'setImages') {
    try {
      const response = await this.$axios.$get('https://dog.ceo/api/breeds/image/random/20');
      const data = response.message.map(item => ({src: item}));

      commit(mutation, data);
    } catch (e) {
      throw e;
    }
  }
};

export const getters = {
  breedAll: s => s.breedAll,
  breed: s => s.breed,
  images: s => s.images,
  imagesOne: s => s.images[0],
  imagesRest: s => s.images.slice(1),
  buttonBreed: s => s.buttonBreed
};