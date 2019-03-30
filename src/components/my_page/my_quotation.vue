<template>
	<div class="mr-fullslider" style="background-image:url(/img/coffee-cup-books-home.jpg)">


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