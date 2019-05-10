<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
	name: 'app',
  data () {
    return {
      //
    }
  }
}
</script>

<style>
	@import url('https://cdn.linearicons.com/free/1.0.0/icon-font.min.css');
	@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400&subset=vietnamese');
	@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400&subset=vietnamese');
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

		li {
			list-style: none;
		}
	}
</style>

