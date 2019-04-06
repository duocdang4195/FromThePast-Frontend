
import api from '@/plugins/axios';

export default {
	async logIn({}, input) {
		try {
			const response = await api.post('/auth/login', input);
			console.log('res', response)
			return { ok: true};
		} catch (error) {
			console.log('err', error)
			return { ok: false, error };
		}
	},
	async checkAccount({}, input) {
		try {
			const response = await api.post('/auth/check', input);
			console.log('res', response)
			return { ok: true};
		} catch (error) {
			console.log('err', error)
			return { ok: false, error };
		}
	},
}
