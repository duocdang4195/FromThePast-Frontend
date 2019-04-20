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
	getProfile(state) {
		return state.profile
	}
}