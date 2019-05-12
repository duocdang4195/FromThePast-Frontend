import api from "@/plugins/axios";

export default {
  async signOut({ commit }) {
    commit("logout");
  },
  async afterLogin({ commit }, profile) {
    commit("saveToken", profile.token);
  },
  async logIn({ dispatch }, input) {
    try {
      const response = await api.post("/auth/login", input);
      await dispatch("afterLogin", response.data);
      return { ok: true, data: response.data };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async changePassword({ dispatch }, input) {
    try {
      const response = await api.post("/profile/change_password", input);
      return { ok: true };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async signUp({ commit, dispatch }, input) {
    try {
      const response = await api.post("/auth/register", input);
      commit("getToken", response.data);
      return { ok: true, data: await dispatch("logIn", input) };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async getProfileUser( { commit }, ) {
    try {
      const response = await api.get("/profile");
      commit('profileUser', response.data)
      return { ok: true };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async checkAccount({}, input) {
    try {
      const response = await api.post("/auth/check", input);
      return { ok: true, response };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async createQuotations({ commit }, data) {
    try {
      const response = await api.post("/quotation", data);
      return { ok: true, response };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async getQuotations({ commit }) {
    try {
      const response = await api.get("/quotation");
      commit("updateQuotations", response.data[0].content);
      return { ok: true, response };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async getAllQuotations({ commit }) {
    try {
      const response = await api.get("/all_quotation");
      return { ok: true, response };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async getAllMyQuotations({ commit }) {
    try {
      const response = await api.get("/quotations");
      commit("updateAllMyQuotations", response.data);
      return { ok: true };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async getMyQuotations({ commit }) {
    try {
      const response = await api.get("/quotations/62");
      commit("updateMyQuotations", response.data);
      return { ok: true };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async getCommentsQuotations({ commit }) {
    try {
      const response = await api.get("/quotation_comment");
      commit("updateComentQuotations", response.data);
      return { ok: true };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async getMyEmotionsCreate({ commit }) {
    try {
      const response = await api.get("/emotion");
      commit("updateMyEmotionsCreate", response.data);
      return { ok: true, response };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async getMyEmotionsByID({ commit }, { id }) {
    try {
      const response = await api.get(`/emotion/${id}`);
      commit("updateMyEmotionsCreateByID", response.data);
      commit("getIdBookEmotions",  response.data.id)
      return { ok: true, media };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async getCommentsEmotions({ commit }) {
    try {
      const response = await api.get("/emotion_comment");
      commit("updateComentEmotions", response.data);
      return { ok: true };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async createEmotions({}, { data }) {
    try {
      const response = await api.post("/emotion", data);
      return { ok: true, data };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async getEmotionsAll({ commit }) {
    try {
      const response = await api.get("/emotion");
      commit("updateAllEmotions", response.data);
      return { ok: true };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async createCommentEmotions({ commit }, data) {
    try {
      const response = await api.post("/emotion_comment", data);
      commit("updateComentEmotions", response.data);
      return { ok: true, data: response.data };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async getAllAbout({ commit }) {
    try {
      const response = await api.get("/about_category");
      commit("allAbout", response.data);
      return { ok: true };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async getAllAbout({ commit }) {
    try {
      const response = await api.get("/about_category");
      commit("allAbout", response.data);
      return { ok: true };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async getAllAboutById({ commit }, { id }) {
    try {
      const response = await api.get(`/about/${id}`);
      commit("allAboutById", response.data);
      return { ok: true };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async getListCity() {
    try {
      const response = await api.get(`/getCity`);
      return { ok: true, response };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async getListDist({}, id) {
    try {
      const response = await api.get(`/getDist/${id}`);
      return { ok: true, response };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async getListWard({}, id) {
    try {
      const response = await api.get(`/getWard/${id}`);
      return { ok: true, response };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async getProfit({},) {
    try {
      const response = await api.get(`/profit`);
      return { ok: true, response };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async getPrice({}, data) {
    try {
			const response = await api.post(`/booking_price`, data);
      return { ok: true, response };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async becomeWriter({}, data) {
    try {
      const response = await api.post(`/become_writer`, data);
      return { ok: true, response };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async createBooking({}, data) {
    try {
			const response = await api.post(`/booking`, data);
      return { ok: true, response };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async getBooking({}, id) {
    try {
			const response = await api.get(`/booking/${id}`);
      return { ok: true, response };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async getOrderDetail({},) {
    try {
			const response = await api.get(`/booking`);
      return { ok: true, response };
    } catch (error) {
      return { ok: false, error };
    }
  },
  async searchAll({}, input) {
    try {
			const response = await api.post(`/search`, input);
      return { ok: true, response };
    } catch (error) {
      return { ok: false, error };
    }
  }
};
