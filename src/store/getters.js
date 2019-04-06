export default {
	isAuthenticated(state) {
		return !!state.access_token;
	},
}