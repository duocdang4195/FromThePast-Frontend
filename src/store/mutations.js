import Vue from "vue";

export default {
  logout(state) {
    state.token = ''
  },
  getToken(state, profile) {
    state.profile = profile
  },
  profileUser(state, userProfile) {
    state.userProfile = userProfile
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
  },
  getIdBookEmotions(state, idEmotion) {
    state.idEmotion = idEmotion
  },
  updateSearchAll(state, search) {
    state.search = search
  },
  updateOrderDetail(state, detailOrder) {
    state.detailOrder = detailOrder
  },
  updateIdBooking(state, idBooking) {
    state.idBooking = idBooking
  },
  updateBackground(state, backgroundPage) {
    state.backgroundPage = backgroundPage
  },
  set_randomQuotation(state, newValue) {
    state.newQuotations = newValue;
  }
}
