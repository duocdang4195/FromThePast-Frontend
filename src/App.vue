<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'app',
  data () {
    return {
      //
    }
	},
	async created() {
		await this.getBackground()
		await this.getProfileUser()
		await this.getQuotations()
		await this.getCommentsQuotations()
		await this.getCommentsEmotions()
  },
	methods: {
		...mapActions(['getBackground', 'getProfileUser', 'getQuotations', 'getCommentsQuotations', 'getCommentsEmotions'])
	}
}
</script>

<style>
	@import url('https://cdn.linearicons.com/free/1.0.0/icon-font.min.css');
	@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400&subset=vietnamese');
	@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400&subset=vietnamese');
	@import url('https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap&subset=vietnamese');
	img {
		max-width: 100% !important;
	}
	body {
		font-family: 'IBM Plex Sans', sans-serif !important;
		font-weight: 300;
	}
	/* width */
	::-webkit-scrollbar {
	  width: 5px;
	}

	/* Track */
	::-webkit-scrollbar-track {
	  background: #f1f1f1; 
	}
	 
	/* Handle */
	::-webkit-scrollbar-thumb {
	  background: #888; 
	  border-radius: 5px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
	  background: #555; 
	}
	button::focus {
		outline: none;
		border: none;
	}
	ul {
		padding: 0;
		margin: 0;
	}
	.vue-typer .custom.char.typed {
		color: #fff;
	}
	.swal2-popup {
		border-radius: 0 !important;
		padding: 2.5em 1.25em !important;
	}
	.swal2-icon.swal2-error,
	.swal2-icon.swal2-success {
		display: none !important;
	}
	.swal2-styled.swal2-confirm {
		background-color: #333 !important;
		border: 0 !important;
		border-radius: 0 !important;

	}
	.swal2-title {
		font-size:20px !important;
		font-weight: 400 !important;
	}
	.swal2-actions {
		margin: 1.5em auto 0 !important;
	}
	.swal2-styled:focus {
		box-shadow: 0 0 0 transparent !important;
	}
</style>

