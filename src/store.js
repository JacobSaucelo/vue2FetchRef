import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    pets: [
      { id: 1, name: "Shero", type: "Dog" },
      { id: 3, name: "Pomi", type: "Dog" },
      { id: 2, name: "Kato", type: "Cat" },
    ],
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    addPet(state, pet) {
      state.pets.push(pet);
    },
    removePet(state, id) {
      state.pets = state.pets.filter((pet) => pet.id !== id);
    },
    updatePet(state, updatedPet) {
      const index = state.pets.findIndex((pet) => pet.id === updatedPet.id);
      if (index !== -1) {
        state.pets.splice(index, 1, updatedPet);
      }
    },
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 1000);
    },
    addPet({ commit }, pet) {
      commit("addPet", pet);
    },
    removePet({ commit }, id) {
      commit("removePet", id);
    },
    updatePet({ commit }, updatedPet) {
      commit("updatePet", updatedPet);
    },
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
});
