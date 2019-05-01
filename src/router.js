import Vue from 'vue';
import Router from 'vue-router';
import HomeRoot from './components/HomeRoot.vue'
import Home from './components/views/Home.vue';
import main from './components/views/main.vue';
import search from './components/views/search.vue';
import AuthenticateForm from './components/authenticate/AuthenticateForm.vue';
import setup_pass from './components/authenticate/setup_pass.vue';
import verify_account from './components/authenticate/verify_account.vue';
import about_list from './components/about/about_list.vue';
import AboutView from './components/about/AboutView.vue';
import my_info from './components/my_page/my_info.vue';
import my_profit from './components/my_page/my_profit.vue';
import my_quotation from './components/my_page/my_quotation.vue';
import my_writing from './components/my_page/my_writing.vue';
import my_service from './components/my_page/my_service.vue';
import contact_list from './components/my_page/contact_list.vue';
import Emotion_write from './components/emotion/Emotion_write.vue';
import Emotion_list from './components/emotion/Emotion_list.vue';
import Emotion_view from './components/emotion/Emotion_view.vue';
import booking from './components/checkout/booking.vue';
import checkout from './components/checkout/checkout.vue';
import order_detail from './components/checkout/order_detail.vue';
import finish_booking from './components/checkout/finish_booking.vue';
import service from './components/service/service.vue';
import become_writer from './components/service/become_writer.vue';

import { ifNotAuthenticated, ifAuthenticated } from './plugins/authenticate-logic.js';

Vue.use(Router);

export default new Router ({
	mode: 'history',
	routes: [
		{
			path: '/home',
			component: HomeRoot,
			children: [
				{
					path: '',
					name: 'home_root',
					component: main,
				},
				{
					path: '/about_list',
					name: 'about_list',
					component: about_list,
				},
				{
					path: '/about_view/:id',
					name: 'about_view',
					component: AboutView,
				},
				{
					path: '/my_info',
					name: 'my_info',
					component: my_info,
				},
				{
					path: '/my_profit',
					name: 'my_profit',
					component: my_profit,
				},
				{
					path: '/my_quotation',
					name: 'my_quotation',
					component: my_quotation,
				},
				{
					path: '/my_service',
					name: 'my_service',
					component: my_service,
				},
				{
					path: '/my_writing',
					name: 'my_writing',
					component: my_writing,
				},
				{
					path: '/Emotion_write',
					name: 'Emotion_write',
					component: Emotion_write,
				},
				{
       				 path: '/Emotion_list',
					name: 'Emotion_list',
					component: Emotion_list,
				},
				{
					path: '/Emotion_view/:id',
					name: 'Emotion_view',
					component: Emotion_view,
				},
				{
					path: '/service',
					name: 'service',
					component: service,
				},
				{
					path: '/search',
					name: 'search',
					component: search,
				},
				{
					path: '/become_writer',
					name: 'become_writer',
					component: become_writer,
				},
				{
					path: '/booking',
					name: 'booking',
					component: booking,
				},
				{
					path: '/checkout',
					name: 'checkout',
					component: checkout,
				},
				{
					path: '/finish_booking',
					name: 'finish_booking',
					component: finish_booking,
				},
				{
					path: '/order_detail',
					name: 'order_detail',
					component: order_detail,
				},
				{
					path: '/contact_list',
					name: 'contact_list',
					component: contact_list,
				},
				{
					path: '/verify_account',
					name: 'verify_account',
					component: verify_account,
				},
				{
					path: '/setup_pass',
					name: 'setup_pass',
					component: setup_pass,
				},
      ],
      beforeEnter: ifAuthenticated,
		},
		{
			path: '/',
			name: 'home',
      component: Home,
		},
		{
			path: '/login',
			name: 'login',
      component: AuthenticateForm,
      beforeEnter: ifNotAuthenticated,
		},
		{
			path: '/signup',
			name: 'signup',
      component: AuthenticateForm,
      beforeEnter: ifNotAuthenticated,
		},
	]
})