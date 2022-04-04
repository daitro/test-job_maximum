const citiesModule = {
  namespaced: true,
  state: () => ({
    listOfCities: [],
  }),
  getters: {
    citiesNames(state) {
      return state.listOfCities.map((elem) => elem.title);
    },
  },
  mutations: {
    setListOfCities(state, list) {
      state.listOfCities = list;
    },
  },
  actions: {
    getListOfCities(context) {
      return fetch("https://6196084574c1bd00176c6ff1.mockapi.io/api/v1/cities")
        .then((response) => response.json())
        .then((arr) => {
          context.commit("setListOfCities", arr);
        })
        .catch((error) => alert(error));
    },
  },
};

export default citiesModule;
