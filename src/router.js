import Vue from 'vue';
import Router from 'vue-router';
import { ifNotAuthenticated } from './plugins/authenticate-logic';
import Home from './components/views/Home.vue';

Vue.use(Router);

export default new Router ({
		mode: 'history',
		routes: [
			{
				path: '/',
				name: 'home',
        component: Home,
        beforeEnter: ifNotAuthenticated,
			},
		]
})