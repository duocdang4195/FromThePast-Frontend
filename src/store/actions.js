
import api from '@/plugins/axios';

export default {
	async afterLogin({ commit }, profile) {
    commit('accessToken', profile.id);
  },
	async logIn({dispatch}, input) {
		try {
			const response = await api.post('/auth/login', input);
			console.log('ré', response)
			await dispatch('afterLogin', response.data);
			return { ok: true, data: response.data};
		} catch (error) {
			return { ok: false, error };
		}
  },
  async signUp({ dispatch }, input) {
		try {
      const response = await api.post('/auth/register', input);
      console.log(response)
			return { ok: true, data: await dispatch('afterLogin', response.data)};
		} catch (error) {
			return { ok: false, error };
		}
	},
	async checkAccount({}, input) {
		try {
			const response = await api.post('/auth/check', input);
			return { ok: true};
		} catch (error) {
			return { ok: false, error };
		}
	},
}
