export default {

	quotationRandom(state) {
		return state.newQuotations;
	},
	isAuthenticated(state) {
		return !!state.hasId;
	}
}