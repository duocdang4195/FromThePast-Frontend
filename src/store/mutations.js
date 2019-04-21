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
  },
  allAbout(state, about) {
    state.about = about
  },
  allAboutById(state, aboutID) {
    state.aboutID = aboutID
  },
  updateAllEmotions(state, allEmotions) {
    state.allEmotions = allEmotions
  },
  updateAllMyQuotations(state, allMyQuotations) {
    state.allMyQuotations = allMyQuotations
  },
  updateMyEmotionsCreate(state, allMyQuotationsCreate) {
    state.allMyQuotationsCreate = allMyQuotationsCreate
  },
  updateMyEmotionsCreateByID(state, allMyQuotationsCreateByID) {
    state.allMyQuotationsCreateByID = allMyQuotationsCreateByID
  }
}
