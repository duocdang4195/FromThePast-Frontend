
import api from '@/plugins/axios';
import { genFormData } from '@/ultils/formData.js';

export default {
	async signOut({ commit }) {
    commit('logout');
  },
	async afterLogin({ commit }, profile) {
		// localStorage.setItem('token', profile.token);
    commit('saveToken', profile.token);
  },
	async logIn({dispatch}, input) {
		try {
			const response = await api.post('/auth/login', input);
			await dispatch('afterLogin', response.data);
			return { ok: true, data: response.data};
		} catch (error) {
			return { ok: false, error };
		}
  },
  async signUp({ dispatch }, input) {
		try {
			const response = await api.post('/auth/register', input);
			return { ok: true, data: await dispatch('logIn', input)};
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
			commit('updateQuotations', response.data[0].content)
			return { ok: true};
		} catch (error) {
			return { ok: false, error };
		}
	},
	async getCommentsQuotations({}) {
		try {
		const response = await api.get('/quotation_comment');
			console.log('ress', response)
			return { ok: true};
		} catch (error) {
			return { ok: false, error };
		}
	},
	async createEmotions({}, { data }) {
    const formData = genFormData(data);
    try {
      const response = await api.post(`/competition/addons/${competition_uuid}/photos/`, formData, {
        headers: {
          Accept: 'multipart/form-data',
        },
      });
      const media = response.data;
      return { ok: true, media };
    } catch (error) {
      return { ok: false, error };
    }
  },
}
