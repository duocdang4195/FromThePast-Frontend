<template>
		<div class="mr-about-wr">
			<div class="mr-aboutList">
				<div class="mr-about-pos">
					<div class="mr-aboutCol mr-col1" v-for="(item, index) in getAbout" :key="index">
						<h3>{{ item.name }}</h3>
						<ul>
							<li   v-for="(list, index) in item.about" :key="index">
                <router-link :to="{name: 'about_view', params: { id: list.id }}">{{ list.title }}</router-link>
              </li>
						</ul>
					</div>
					<div class="mr-aboutCol mr-col5">
						<h3></h3>
						<p v-html="content">{{ content }}</p>
						<ul class="about-sns">
							<li><a href=""><i class="fab fa-facebook-f"></i></a></li>
							<li><a href=""><i class="fab fa-instagram"></i></a></li>
							<li><a href=""><i class="fab fa-twitter"></i></a></li>
							<li class="mr_slogan"><a href="#"><img src="img/logo-dark.svg" alt=""></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AboutView from '@/components/about/AboutView.vue';

export default {
  name: 'About_list',
  components: {
    AboutView
  },
  data () {
    return {
		content: ''
    }
  },
  async created() {
	await this.getAllAbout()
	await this.getDescription().then(res => {
		this.content = res.data.content
	})
  },
  methods: {
    ...mapActions(['getAllAbout', 'getAllAboutById', 'getDescription'])
  },
  computed: {
    ...mapGetters(['getAbout'])
  }
}
</script>


<style lang="scss" scoped>
	.mr-about-wr {
		position: relative; 
		display: inline-block; 
		width: 100%; 
		height: auto;
		min-height: 100vh; 
		margin: 0; 
		padding: 0; 
		background-color: #f1f1f1;
	}
	.mr-aboutList {
		position: relative;
		display: block; 
		width: 100%; 
		max-width: 1010px; 
		min-width: 320px; 
		padding: 0 15px; 
		margin: 200px auto 100px;  
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	.mr-about-pos {
		position: relative; 
		display: flex; 
		width: 100%;     
		flex-wrap: wrap; 
		font-family: 'Montserrat', sans-serif;
	}
	.mr-aboutList .mr-aboutCol {
		position: relative; 
		flex: 1 0 18%; 
		min-width:120px;
		margin-bottom: 15px;
	}

	ul {
		padding-left:0 !important;
	}

	.mr-aboutList .mr-col5 {flex: 1 0 28%}
	.mr-aboutList .mr-aboutCol h3 {
		text-transform: uppercase; 
		font-size: 18px; 
		font-weight: bold; 
		color: #444;
	}
	.mr-aboutList .mr-aboutCol ul {
		position: relative; 
		display: inline-block; 
		width: 100%;
		margin-top: 15px;
		padding: 0;
	}
	.mr-aboutList .mr-aboutCol > ul > li {
		position: relative; 
		display: inline-block;
		 width: 100%; 
		 margin-bottom: 7px;
		}
	.mr-aboutList .mr-aboutCol a {
		text-decoration: none; 
		color: #545454; 
		font-size: 14px;
	}
	.mr-aboutList .mr-col5 p{
		font-size: 14px; 
		line-height: 1.3; 
		margin-bottom: 15px; 
		text-align: justify;
	}
	.mr-aboutList .mr-col5  .about-sns {
		position: relative; 
		display: inline-block;
		 width: 100%;
	}
	.mr-aboutList .mr-col5  .about-sns li {
		position: relative; 
		display: inline; 
		float: left; 
		width: auto;  
		margin-right: 15px;
	}
	.mr-aboutList .mr-col5  .about-sns li i {
		font-size: 19px; 
		color: #545454;
	}
	.mr-aboutList .mr-col5  .about-sns li.mr_slogan {
		float: right; 
		width: 145px;
		margin-right: 0;
	}
	.mr-aboutList .mr-col5  .about-sns li.mr_slogan img {
		position: relative; 
		display: inline-block; 
		width: 100%;
	}
	@media only screen and (max-width: 768px){
		.mr-aboutList .mr-aboutCol {
			position: relative; 
			flex: 1 0 50%
		}
		.mr-aboutList .mr-col5 {flex: 1 0 100%}
	}

</style>