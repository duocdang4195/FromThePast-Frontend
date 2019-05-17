<template>
	<div class="mr-about-wr">
		<div class="mr-about-view-cntn">
			<h3>{{ getAboutById.title }}</h3>
			<div class="mr-about-flexbox">
				<div class="mr-cntnBox">
					<p>{{ getAboutById.content }}</p>
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

<style lang="css">
	.mr-about-view-wr {position: relative; display: inline-block; width: 100%; height: auto; min-height: 100%; margin: 0; padding: 0;background-color: #f1f1f1;}
	.mr-about-view-cntn {position: relative; display: inline-block; width: calc(100% - 30px); padding: 15px; margin: 15px;font-family: 'Karla', sans-serif;-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;}
	.mr-about-view-cntn  h3 {position: relative; display: inline-block; width: 100%; font-size: 30px; margin: 40px 0 40px 0; color: #555; font-weight: bold; text-align: center;}
	.mr-about-flexbox {position: relative; display: flex; width: 100%;  flex-wrap:wrap;}
	.mr-about-flexbox > div {position: relative;width: 100%;padding: 15px;     box-sizing: border-box; font-size: 16px; color: #444;}
	.mr-about-flexbox > div h5 {position: relative; display: inline-block; width: 100%; text-align: left; font-size: 20px; margin-bottom: 15px;color: #191919; }
	.mr-img-box img {position: relative; display: inline-block; width: 100%; }
	.mr-about-flexbox > div p {font-size: 17px; color: #444; line-height: 1.5;}

	@media only screen and (min-width: 1024px){
		.mr-about-view-cntn {position: absolute; display: inline-block; width: 980px; height: 800px; top: 0; left: 0; right: 0; bottom: 0; margin: auto; padding: 40px; }

	}
</style>