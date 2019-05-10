<template>
	<div class="mr-myinformation-wr">
		<v-container class="mr-container">
			<div class="mr-myinformation">

				<div class="mr-basicinfo mr-basic-profit">
					<h5>My profit</h5>
					<ul class="mr-profit-board">
						<li class="mr-head">
							<span class="mr-col0">No.</span>
							<span class="mr-col1">Subject</span>
							<span class="mr-col2">Profit</span>
							<span class="mr-col3">Purchases</span>
						</li>
						<li>
							<span class="mr-col0">01.</span>
							<span class="mr-col1"><a href="#">Why So Many Americans Are Turning to Buddhism</a></span>
							<span class="mr-col2">$23.00</span>
							<span class="mr-col3">10 times</span>
						</li>
						<li>
							<span class="mr-col0">02.</span>
							<span class="mr-col1"><a href="#">Why So Many Americans Are Turning to Buddhism</a></span>
							<span class="mr-col2">$23.00</span>
							<span class="mr-col3">10 times</span>
						</li>
						<li>
							<span class="mr-col0">03.</span>
							<span class="mr-col1"><a href="#">Why So Many Americans Are Turning to Buddhism</a></span>
							<span class="mr-col2">$23.00</span>
							<span class="mr-col3">10 times</span>
						</li>
					</ul>
				</div><!-- ./. mr-basicinfo -->

			</div><!-- ./.mr-myinformation  -->
		</v-container>
	</div><!-- -./. mr-myinformation-wr-->
</template>

<script>
export default {

  name: 'my_profit',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
	.mr-myinformation-wr {
		position: relative;
		display: flex;
		width:100vw;
		height: 100%;
		min-height: 100vh;
		flex-direction: row;
		flex-wrap: wrap;
		background: #fff;
		justify-content: center;
		font-family: "IBM Plex Sans", sans-serif;
		font-weight: 300;

		&:before {
			content: ' ';
			position: absolute;
			width: 100vw;
			height: 40px;
			top: 0;
			left: 0;
			background-color: #121212;
		}

		&:after {
			content: ' ';
			position: absolute;
			width: 100vw;
			height: 40px;
			bottom: 0;
			left: 0;
			background-color: #fff;
		}

		.container {
			margin: 120px auto;
		}
		h5 {
			position: relative;
			display: inline-block;
			width: 100%;
			font-size: 30px;
			font-weight: bold;
			text-transform: uppercase;
			color: #3e3e3e;
			font-family: "IBM Plex Sans", sans-serif;
			text-align: center;
		}
		.mr-myinformation   {
			display: flex;
			width: 100%;
			padding: 0;
			justify-content: center;
			
			> div {
				flex: 1 0 50%;
				position: relative;
			}

			.mr-basic-profit {
				padding-left: 0px; 

				h5 {
					margin-bottom: 20px;
					text-align: center;
					font-weight:400;
				}

				.mr-profit-board {
					position: relative;
					display: inline-block; 
					width: 100%;
					padding: 0;
					font-size: 14px;
					font-family: "IBM Plex Sans", sans-serif;
					
						
					.mr-head {
						.mr-col1 {
							text-align: center;
						}
						> span {
							color: #333;
							font-weight: 400;
							
						}
					}
					> li {
						position: relative;
						display: -webkit-flex;
						display: -moz-flex;
						display: -ms-flex;
						display: -o-flex;
						display: flex;	
						width: 100%;
						margin: 0;
						flex-direction: row;
						flex-wrap:wrap;
						text-align: center;
						justify-content: center;				
					
						> span {
							position: relative;
							display: flex;
							flex-direction: column;
							flex: 1 0 auto;
							height: auto;
							margin: 0;
							padding: 10px 0;
							border-bottom: 1px solid #ececec;
						}
						.mr-col0  {
							width: 50px;
							text-align: center;	
						}
						.mr-col1 {
							width: calc(60% - 50px);
							text-align: left;

							> a {
								color: #333;
								text-decoration: none;

								&:hover {
									color: #333;
								}
							}
						}
						.mr-col2 {
							width: 20%;
						}
						.mr-col3 {
							width: 20%;
						}
					}
				}
				
			}
			
			.mr-address-list {
				.mr-profit-board {
					li {
						.mr-col1 {
							width: 30%;
						}
						.mr-col2 {
							width: 40%;
						}
						.mr-col3 {
							width: 30%;
						}
					}
				}
			}
		}
	}
</style>