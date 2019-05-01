<template>
	<div class="mr-myinformation-wr">
		<v-container class="mr-container">
			<div class="mr-myinformation">

			

				<div class="mr-basicinfo mr-basic-profit">
					<h5>My service</h5>
					<ul class="mr-profit-board">
						<li class="mr-head">
							<span class="mr-col0">Order code</span>
							<span class="mr-col1">Service</span>
							<span class="mr-col2">Date</span>
							<span class="mr-col3">Fee</span>
							<span class="mr-col4">Status</span>
						</li>
						<li>
							<span class="mr-col0"><a href="#"> #1111111</a></span>
							<span class="mr-col1"><a href="#"> Hand-writing letter</a></span>
							<span class="mr-col2">2019-12-09</span>
							<span class="mr-col3">$23.00</span>
							<span class="mr-col4">Finished</span>
						</li>
						<li>
							<span class="mr-col0"><a href="#">#2222222 </a></span>
							<span class="mr-col1"><a href="#">Save letter</a></span>
							<span class="mr-col2">2019-12-09</span>
							<span class="mr-col3">$15.00</span>
							<span class="mr-col4">Storing</span>
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
		.mr-container {
			margin: 120px 0;
			.mr-myinformation   {
				display: flex;
				width: 100%;
				padding: 0px;
				justify-content: center;
				
				


			.mr-basic-profit {
				padding-left: 0px; 
				width: 100%;

				h5 {
					position: relative;
					display: inline-block;
					margin-bottom: 20px;
					width: 100%;
					font-size: 30px;
					font-weight:400;
					text-transform: uppercase;
					color: #3e3e3e;
					font-family: "IBM Plex Sans", sans-serif;
					text-align: center;
				}

				.mr-profit-board {
					position: relative;
					display: inline-block; 
					width: 100%;
					padding: 0;
					background-color:rgba(255,255,255,0.95);
					
						
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
							font-size: 14px;
						}
						
						.mr-col0 {
							width: 120px;

							> a {
								text-decoration: none;
							}
						}
						.mr-col1 {
							width: 20%;
							text-align: left;

							> a {
								color: #333;
								font-size: 14px;
								text-decoration: none;

								&:hover {
									color: #333;
								}
							}
						}
						.mr-col2 {
							width: calc(40% - 120px);
						}
						.mr-col3 {
							width: 20%;
						}
						.mr-col4 {
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
	}
</style>