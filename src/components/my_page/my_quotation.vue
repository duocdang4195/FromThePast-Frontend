<template>
	<div class="mr-fullslider">
		<div class="mr-mywriting-wr">
			<ul class="mr-myQuotation">
				<li>
					<span class="mr-timer">17:20<br/>
						<span class="mr-date">Jan 20  2019</span>
					</span>
					<div class="mr-content">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						
						<p class="rh-interactions">
							<span class="mr-comment-count"><i class="ti-comment-alt"></i> 6 comments</span>
							<span class="mr-likes"><i class="ti-heart"></i> 56 likes</span>
						</p>

						<ul class="mr-comment">
							<li>							
								<span class="mr-cmt-author">Mr.Author</span>
								<span class="mr-cmt-time">2019-01-12   17:20</span>
								<br/>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
							</li>
							
							<li>							
								<span class="mr-cmt-author">Mr.Author</span>
								<span class="mr-cmt-time">2019-01-12   17:20</span>
								<br/>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
							</li>
							
							<li>							
								<span class="mr-cmt-author">Mr.Author</span>
								<span class="mr-cmt-time">2019-01-12   17:20</span>
								<br/>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
							</li>
						</ul><!-- ./. mr-comment  -->
					</div><!-- /./. mr-content  -->
				</li>
				
				<li>
					<span class="mr-timer">17:20<br/>
						<span class="mr-date">Jan 20  2019</span>
					</span>
					<div class="mr-content">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						
						<p class="rh-interactions">
							<span class="mr-comment-count"><i class="ti-comment-alt"></i> 6 comments</span>
							<span class="mr-likes"><i class="ti-heart"></i> 16 likes</span>
						</p>
					</div>
				</li>
				
			</ul>
		</div>
		

</div><!-- ./. mr-fullslider -->
</template>

<script>
export default {

  name: 'component_name',

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
	background-image:url('../../assets/images/seeds-3412027_1920.jpg');
	background-size: cover;
	flex-direction: column;
	justify-content: center;
	align-items: center;	
	font-family: "IBM Plex Sans", sans-serif;
	font-weight: 300;

	.mr-mystatus {
		position: relative;
		height: auto;
		width: 65%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		background-color: rgba(0,0,0,0.5);
		padding:  60px;
	}
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
.mr-mywriting-wr {
	.mr-myQuotation {
		> li {
			
			.mr-timer {
				font-size: 17px;
			    text-transform: capitalize;
			}
			.mr-content {
				padding-bottom: 15px;

				p {
					display: inline-block;
				}

				p.rh-interactions  {
					margin-top: 7px;

					.mr-comment-count {
						cursor: pointer;

						.ti-comment-alt {
							position: relative;
							top: 2px;
						}
					}
					.mr-likes {
						position: relative;
						display: inline-block;
						margin-left: 30px;

						.ti-heart {
							position: relative;
							top: 2px;
						}
					}
				}

				ul.mr-comment {
					position: relative;
					display: inline-block;
					width: 100%;
					padding-left: 20px;
					margin: 0;

					> li {
						position: relative;
						display: inline-block;
						width: 100%;
						margin-bottom: 20px;
						line-height: 1.5;
						font-size: 15px; 

						.mr-cmt-author {
							font-weight: bold;
						}

						.mr-cmt-time {
							position: relative;
							display: inline-block;
							font-style:italic;
							margin-left: 15px;
						}
						p {
							display: inline-block;
						}

					}
				}
			}
		}
	}
}
</style>