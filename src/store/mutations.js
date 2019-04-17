import Vue from "vue";

export default {
  updateQuotations(state, newQuotations) {
      state.newQuotations = newQuotations
  },
  accessToken(state, hasId) {
    state.hasId = hasId;
  },
}
