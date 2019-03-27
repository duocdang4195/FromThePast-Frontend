import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/views/Home.vue';
import Emotion_view from './components/emotion/Emotion_view.vue';
import login from './components/member/login.vue';

Vue.use(Router);

export default new Router ({
		mode: 'history',
		routes: [
			{
				path: '/',
				name: 'home',
				component: Home,
			},
			{
				path: '/emotion',
				name: 'emotion_view',
				component: Emotion_view,
			},
			{
				path: '/member',
				name: 'login',
				component: login,
			},
		]
})