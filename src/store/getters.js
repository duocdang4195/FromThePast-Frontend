export default {
  accessToken(state) {
    return state.token;
  },
	quotationRandom(state) {
		return state.newQuotations;
	},
	isAuthenticated(state) {
		return !!state.token;
	}
}