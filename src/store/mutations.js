import Vue from "vue";

export default {
  logout(state) {
    state.token = ''
  },
  updateQuotations(state, newQuotations) {
    state.newQuotations = newQuotations
  },
  accessToken(state, token) {
    state.token = token;
  },
}
