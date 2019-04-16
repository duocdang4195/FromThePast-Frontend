
import api from '@/plugins/axios';

export default {
	async logIn({}, input) {
		try {
			const response = await api.post('/auth/login', input);
			return { ok: true};
		} catch (error) {
			return { ok: false, error };
		}
  },
  async signUp({}, input) {
		try {
      const response = await api.post('/auth/register', input);
			return { ok: true};
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
  async createQuotations({ commit }, data) {
		try {
      const response = await api.post('/quotation', data);
      commit('updateQuotations', response.data[0].content)
			return { ok: true};
		} catch (error) {
			return { ok: false, error };
		}
  },
  async getQuotations({ commit }) {
		try {
	  const response = await api.get('/quotation');
	  console.log('ré', response)
      commit('updateQuotations', response.data[0].content)
			return { ok: true};
		} catch (error) {
			return { ok: false, error };
		}
	},
}
