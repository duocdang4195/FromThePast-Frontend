<template>
	<div>
		<div class="mr-fullslider" style="">
			<div class="mr-mywriting-wr">
				<ul>
					<li>
						<span class="mr-post-thumb" style="background-image:url('../../assets/images/bloom-blossoms-buds-87452.jpg');"></span>
						<div class="mr-content">
							<h5>Title of Post</h5>
							
							<span class="mr-timer">Jan 20 2019</span>
							<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
					</li>
					<li>
						<span class="mr-post-thumb" style="background-image:url('../../assets/images/pexels-photo-386007.jpeg');"></span>
						<div class="mr-content">
							<h5>Title of Post</h5>
							
							<span class="mr-timer">Jan 20 2019</span>
							<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
					</li>
					<li>
						<span class="mr-post-thumb" style="background-image:url('../../assets/images/bulb-2124338.png');"></span>
						<div class="mr-content">
							<h5>Title of Post</h5>
							
							<span class="mr-timer">Jan 20 2019</span>
							<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
					</li>
					<li>
						<span class="mr-post-thumb"></span>
						<div class="mr-content">
							<h5>Title of Post</h5>
							
							<span class="mr-timer">Jan 20 2019</span>
							<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
					</li>
					
				</ul>
			</div>
		

		</div><!-- ./. mr-fullslider -->
	</div>
</template>

<script>
export default {

  name: 'my_writing',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.mr-fullslider {
	position: relative;
	display: flex;
	width: 100vw;
	min-height: 100vh;
	height: 100%;
	background-size: cover;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image:url(../../assets/images/bird-3860034_1920.jpg);	
	font-family: "IBM Plex Sans", sans-serif;
	font-weight: 300;
}
.mr-mywriting-wr {
	position: relative;
	display: inline-block;
	max-width: 1200px;
	height: auto;
	max-height: calc(100vh - 160px);
	margin-top: 40px;
	margin-bottom: 40px;
	width: 100%;
	padding: 50px;
	background-color: rgba(255,255,255,0.9);
	border: 1px solid #e3e3e3;
	box-shadow: 1px 3px 5px rgba(180,180,180,0.5);
	overflow: auto;

	ul  {
		> li {
		position: relative;
		display: flex;
		width: 100%;
		margin: 0;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		border-bottom: 1px dashed #afafaf;
		padding: 25px 0;

		&:last-child {
			border-bottom: 0;
		}
		
			.mr-post-thumb {
				position: relative;
				display: inline-block;
				width: 200px;
				height: 200px;
				background-size: cover;
				background-position: center center
			}
			.mr-content {
				width: calc(100% - 300px);
				padding-left: 20px;
				cursor: pointer;

				h5 {
					font-size: 17px;
					color: #333;
					line-height: 1;
					margin-bottom: 10px;
					
				}
				&:hover  h5 {
						font-weight: bold;
					}
				
				.mr-timer {
					font-style: italic;
				}

				p {
					position: relative;
					width: 100%;
					margin-top: 7px;
					font-size: 16px;
					color: #444;
					line-height: 1.5;
				}
			}
			
		}
	}
}
.mr-mywriting-wr ul > li .mr-content:hover p {
	display: inline-block;
}
/*------ S E A R C H -----*/
.mr-search {
	position: absolute;
	background-color: none;
	right: 20px;
	bottom: 20px;

	.mr-icon {
		position: relative;
		display: inline-block;

		 img {
			position: relative;
			display: inline-block;
			width: 20px;
			height: 20px;
			cursor: pointer;
		 }
	}
	
	.mr-input-search {
		position: absolute;
		display: inline-block;
		width: 320px;
		height: 35px;
		padding: 7px 15px;
		right: 0;
		bottom: 0;
		background-color: #fff;
		border: 0;
		 font-size: 15px;

		&::placeholder{ font-size: 15px;}
	}
}

</style>