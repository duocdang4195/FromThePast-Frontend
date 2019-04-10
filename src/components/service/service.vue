
<template>
	<div class="mr-emotion-list mr-serviceList-wr">
	
		<button class="mr-pre"><img src="../../assets/images/chevron-left.svg" alt=""></button>
		
		<div class="mr-article-wr">
			<div class=" col-md-12">
				<div class="mr-serviceList">	
					<ul>
						<li>
							<div class="mr-serviceList-img"><img src="../../assets/images/OCERHB0-490.jpg" alt=""></div>
							<div class="mr-servicntn">
								<h3>Service 1</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								<br><br>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
								
								<br><br>
								voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
							</div>
							<button class="mr-bookservice">Book Service</button>
						</li>
					</ul>
				</div>
			</div>
		</div><!-- ./.mr-article-wr  -->

		<button  class="mr-next"><img src="../../assets/images/chevron-right.svg" alt=""></button>
	</div>
</template>
<style lang="scss" scoped>
	%full-width {
		position: relative;
		display: inline-block;
		width: 100%;
	}
	button::focus {
		outline: none;
		border: none;
	}
	.mr-emotion-list {
		position: relative;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;	
		width: 100vw;
		min-height: 100vh;
		height: 100%;
		background-size: cover;
		bacground-position: center center;
		background-repeat: no-repeat;
		justify-content: center;
		flex-direction: row;
		align-items: center;
		font-family: 'IBM Plex Sans', 'sans-serif' !important;
		font-weight: 300;
		> button {
			position: relative;
			display: inline-block; 
			border: 0;
			background-color: transparent;
			color: #fff;

			i {
				font-size: 100px;		
			}
		}
		.mr-pre {
			margin-right: 20px;
			&:focus{
				outline: none;
			}
			> img {
				position: relative;
				width: 100px;
				height: 100px;
			}
		}
		.mr-next {
			margin-left: 20px;
			&:focus{
				outline: none;
			}
			> img {
				position: relative;
				width: 100px;
				height: 100px;
			}
		}
		.mr-article-wr {
			position: relative;
			display: inline-block;
			width: 60vw;
			height: calc(100vh - 80px);
			background-color: rgba(255,255,255,0.9);
			border-top: 20px solid transparent;
			border-bottom: 20px solid transparent;
			padding: 60px;
			overflow: auto;
			cursor: pointer;

			.mr-header {
				@extend %full-width;
				font-size: 20px;
				color: #333;
				margin: 0 0 30px 0;
				font-weight: bold;
				
				span {
					position: relative;
					display: inline-block;
					font-size: 20px;
					font-weight: bold;
					
				}
				.mr-ttl {
					margin-left: 20px;
				}
			}

			.mr-article-cntn {
				position: relative;
				display: inline-block;
				width: 100%;
				line-height: 1.5;
				font-size: 17px;
			}
		}
	}
	.mr-serviceList-wr {		
		background-image:url('../../assets/images/watchmen-1613267.png');
		.mr-article-wr {
			max-height: calc(100vh - 120px);
			overflow: auto;
			border: 60px solid transparent;
			border-left: 0;
			border-right: 0;
			padding: 0 60px;
		}
		
		.mr-serviceList {
			@extend %full-width;

			ul {
				@extend %full-width;
				margin:  0;
				
				li {
					position: relative;
					display: -webkit-flex;
					display: -moz-flex;
					display: -ms-flex;
					display: -o-flex;
					display: flex;	
					flex-direction: column;

					.mr-serviceList-img {
						flex: 1 0 100%;
						text-align: center;

						img {
							position: relative;
							display: inline-block;
							width: auto;
							max-width: 100%;
						}
					}
					.mr-servicntn {
						flex: 1 0 100%;
						margin-top: 50px;

						h3 {
							position: relative;
							display: inline-block;
							font-size: 30px;
							font-weight: 700;
							margin-bottom: 20px;
							text-transform: uppercase;
						}

						p {
							font-size: 20px;
							line-height: 1.5;
							text-align: justify;

						}


					}
					.mr-bookservice {
						position: relative;
						display: inline-block;
						float: right;
						width: 150px;
						height: 40px;
						background-color: #456789;
						color: #fff;
						border: 0;
						font-size: 17px;
						text-transform: uppercase;
						margin-top: 25px;
						order: 2;
						margin-left: auto;
					}
				}
			}
		}
	}

</style>