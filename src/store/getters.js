export default {
	isAuthenticated(state) {
		return !!state.hasId;
	},
}