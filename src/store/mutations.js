import Vue from "vue";

export default {
  logout(state) {
    state.token = ''
  },
  profileUser(state, profile) {
    state.profile = profile
  },
  updateQuotations(state, newQuotations) {
    state.newQuotations = newQuotations
  },
  saveToken(state, token) {
    state.token = token;
  },
  updateComentQuotations(state, comentQuotations) {
    state.comentQuotations = comentQuotations
  },
  updateComentEmotions(state, comentEmotions) {
    state.comentEmotions = comentEmotions
  },
  updateMyQuotations(state, myQuotations) {
    state.myQuotations = myQuotations
  }
}
