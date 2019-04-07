<template>
	<div>
		<div class="mr-about-wr">
			<div class="mr-aboutList">
				<div class="mr-about-pos">
					<div class="mr-aboutCol mr-col1">
						<h3>Product</h3>
						<ul>
							<li><a href="#">Item 1</a></li>
							<li><a href="#">Item 2</a></li>
							<li><a href="#">Item 3</a></li>
						</ul>
					</div>
					<div class="mr-aboutCol mr-col2">
						<h3>Company</h3>
						<ul>
							<li><a href="#">Item 1</a></li>
							<li><a href="#">Item 2</a></li>
							<li><a href="#">Item 3</a></li>
						</ul>
					</div>
					<div class="mr-aboutCol mr-col3">
						<h3>Community</h3>
						<ul>
							<li><a href="#">Item 1</a></li>
							<li><a href="#">Item 2</a></li>
							<li><a href="#">Item 3</a></li>
						</ul>
					</div>
					<div class="mr-aboutCol mr-col4">
						<h3>Support</h3>
						<ul>
							<li><a href="#">Item 1</a></li>
							<li><a href="#">Item 2</a></li>
							<li><a href="#">Item 3</a></li>
						</ul>
					</div>
					<div class="mr-aboutCol mr-col5">
						<h3></h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						<p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						<ul class="about-sns">
							<li><a href=""><i class="fab fa-facebook-f"></i></a></li>
							<li><a href=""><i class="fab fa-google-plus-g"></i></a></li>
							<li><a href=""><i class="fab fa-instagram"></i></a></li>
							<li><a href=""><i class="fab fa-twitter"></i></a></li>
							<li class="mr_slogan"><a href="#"><img src="img/logo-dark.svg" alt=""></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'About_list',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
	.mr-about-wr {position: relative; display: inline-block; width: 100%; height: auto;min-height: 100vh; margin: 0; padding: 0; background-color: #f1f1f1;}
	.mr-aboutList {position: relative; display: block; width: 100%; max-width: 1010px; min-width: 320px; padding: 0 15px; margin: 200px auto 100px;  -webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;}
	.mr-about-pos {position: relative; display: flex; width: 100%;     flex-wrap: wrap; font-family: 'Karla', sans-serif;}
	.mr-aboutList .mr-aboutCol {position: relative; flex: 1 0 18%; min-width:120px;margin-bottom: 15px;}
	.mr-aboutList .mr-col5 {flex: 1 0 28%}
	.mr-aboutList .mr-aboutCol h3 {text-transform: uppercase; font-size: 18px; font-weight: bold; color: #444;}
	.mr-aboutList .mr-aboutCol ul {position: relative; display: inline-block; width: 100%;margin-top: 15px;}
	.mr-aboutList .mr-aboutCol > ul > li {position: relative; display: inline-block; width: 100%; margin-bottom: 7px;}
	.mr-aboutList .mr-aboutCol a {text-decoration: none; color: #545454; font-size: 17px;}
	.mr-aboutList .mr-col5 p{font-size: 14px; line-height: 1.3; margin-bottom: 15px; text-align: justify;}
	.mr-aboutList .mr-col5  .about-sns {position: relative; display: inline-block; width: 100%;}
	.mr-aboutList .mr-col5  .about-sns li {position: relative; display: inline; float: left; width: auto;  margin-right: 15px;}
	.mr-aboutList .mr-col5  .about-sns li i {font-size: 19px; color: #545454;}
	.mr-aboutList .mr-col5  .about-sns li.mr_slogan {float: right; width: 145px;margin-right: 0;}
	.mr-aboutList .mr-col5  .about-sns li.mr_slogan img {position: relative; display: inline-block; width: 100%;}
	@media only screen and (max-width: 768px){
		.mr-aboutList .mr-aboutCol {position: relative; flex: 1 0 50%}
		.mr-aboutList .mr-col5 {flex: 1 0 100%}
	}

</style>