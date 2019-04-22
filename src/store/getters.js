export default {
  accessToken(state) {
    return state.token;
  },
	quotationRandom(state) {
		return state.newQuotations;
	},
	isAuthenticated(state) {
		return !!state.token;
	},
	comentQuotationsList(state) {
		return state.comentQuotations;
	},
	comentEmotionsList(state) {
		return state.comentEmotions;
	},
	contentMyQuotations(state) {
		return state.myQuotations;
	},
	listEmotionsAll(state) {
		return state.allEmotions;
	},
	getProfile(state) {
		return state.profile
	},
	getAbout(state) {
		return state.about
	},
	getAboutById(state) {
		return state.aboutID
	},
	getAllMyQuotationsList(state) {
		return state.allMyQuotations
	},
	getAllMyQuotationsCreate(state) {
		return state.allMyQuotationsCreate
	},
	getAllMyQuotationsCreateByID(state) {
		return state.allMyQuotationsCreateByID
	}
}