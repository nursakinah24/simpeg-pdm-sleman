import axios from "axios";

export default {
  state: {
    families: [],
  },
  mutations: {
    SET_FAMILIES(state, families) {
      state.families = families;
    },
  },
  actions: {
    async fetchFamilies({ commit }) {
      try {
        const response = await axios.get("families");
        commit("SET_FAMILIES", response.data.families);
      } catch (error) {
        console.error("Error fetching families:", error);
      }
    },
    async createFamilies(_, familyData) {
      try {
        await axios.post("families", familyData);
      } catch (error) {
        console.error("Error creating families:", error);
        throw error;
      }
    },
    async updateFamilies(_, { id, ...familyData }) {
      try {
        await axios.patch(`families/${id}`, familyData);
      } catch (error) {
        console.error("Error updating families:", error);
        throw error;
      }
    },
    async deleteFamilies(_, id) {
      try {
        await axios.delete(`families/${id}`);
      } catch (error) {
        console.error("Error deleting families:", error);
        throw error;
      }
    },
  },
};
