<template>
	<div class="mr-about-view-wr">
		<div class="mr-about-view-cntn">
			<h3 v-html="getAboutById.title" >{{ getAboutById.title }}</h3>
			<div class="mr-about-flexbox">
				<div class="mr-cntnBox">
					<p v-html="getAboutById.content">{{ getAboutById.content }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'about_view',
  data () {
    return {

    }
	},
	created() {
		const id = this.$route.params.id
		this.getAllAboutById({id})
	},
	computed: {
		...mapGetters(['getAboutById'])
	},
  methods: {
    ...mapActions(['getAllAboutById'])
  }
}
</script>

<style lang="css" scoped>

	.application--wrap {
		background-color: #f1f1f1;
	}
	.mr-about-view-wr {
		position: relative; 
		display: flex; 
		width: 100%; 
		height: 100%; 
		margin: 0; 
		padding: 0;
		background-color: #f1f1f1;
		justify-content: center;
	}
	.mr-about-view-cntn {
		position: relative; 
		display: inline-block; 
		width: 100%; 
		height: auto;
		max-width: 1170px;
		min-width: 1080px;
		padding:0 15px; 
		margin: 0;
		text-align: justify;
		font-family: 'Montserrat', sans-serif;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	.mr-about-view-cntn  h3 {
		position: relative; 
		display: inline-block; 
		width: 100%; 
		font-size: 30px; 
		margin: 90px 0 40px 0; 
		color: #555; 
		font-weight: bold; 
		text-align: center;
	}
	.mr-about-flexbox {
		position: relative; 
		display: flex; 
		width: 100%;  
		flex-wrap:wrap;
	}
	.mr-about-flexbox > div {
		position: relative;
		width: 100%;
		padding: 15px;     
		box-sizing: border-box; 
		font-size: 16px; 
		color: #444;
	}
	.mr-about-flexbox > div h5 {
		position: relative; 
		display: inline-block; 
		width: 100%; 
		text-align: left; 
		font-size: 20px; 
		margin-bottom: 15px;
		color: #191919; 
	}
	.mr-img-box img {
		position: relative; 
		display: inline-block; 
		width: 100%; 
	}
	.mr-about-flexbox > div p {
		font-size: 17px; 
		color: #444; 
		line-height: 1.5;
	}


	@media only screen and (min-width: 1024px){


	}
</style>