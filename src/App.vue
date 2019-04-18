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
	@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400&subset=vietnamese');
	* {
		font-family: 'IBM Plex Sans', sans-serif ;
		font-weight: 300;
		text-rendering:optimizelegibility;
		text-size-adjust:100%;
		-webkit-font-smoothing:antialiased;
		-webkit-tap-highlight-color:rgba(0, 0, 0, 0);
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
</style>

