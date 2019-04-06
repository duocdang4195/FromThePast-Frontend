import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/views/Home.vue';
import AuthenticateForm from './components/authenticate/AuthenticateForm.vue'

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
			path: '/login',
			name: 'login',
			component: AuthenticateForm,
		},
		{
			path: '/signup',
			name: 'signup',
			component: AuthenticateForm,
		},
	]
})