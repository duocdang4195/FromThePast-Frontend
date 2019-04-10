
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
      console.log(response)
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
  async createQuotations({}, data) {
		try {
      const response = await api.post('/api/quotation/', data);
      console.log('res', response)
			return { ok: true};
		} catch (error) {
      console.log('error', error)
			return { ok: false, error };
		}
	},
}
