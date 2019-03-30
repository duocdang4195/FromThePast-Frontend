<template>
	<div class="mr-myinformation-wr">

	<div class="mr-myinformation">

		<div class="mr-quote">
			<p class="mr-greeting">Welcom Krum</p>
			<div class="mr-wc-quotation">
				<p>Choose your heroes or they will be chosen for you.
					<br/>
					<i>Author</i>
				</p>
			</div>
			<div class="mr-welcomequestion">
				<input type="text" placeholder="How are you today?">
			</div>
		</div><!-- ./. mr-quote  -->

		<div class="mr-basicinfo mr-basic-profit">
			<h5>My profit</h5>
			<ul class="mr-profit-board">
				<li class="mr-head">
					<span class="mr-col1">Subject</span>
					<span class="mr-col2">Profit</span>
					<span class="mr-col3">Purchases</span>
				</li>
				<li>
					<span class="mr-col1"><a href="#">Why So Many Americans Are Turning to Buddhism</a></span>
					<span class="mr-col2">$23.00</span>
					<span class="mr-col3">10 times</span>
				</li>
				<li>
					<span class="mr-col1"><a href="#">Why So Many Americans Are Turning to Buddhism</a></span>
					<span class="mr-col2">$23.00</span>
					<span class="mr-col3">10 times</span>
				</li>
				<li>
					<span class="mr-col1"><a href="#">Why So Many Americans Are Turning to Buddhism</a></span>
					<span class="mr-col2">$23.00</span>
					<span class="mr-col3">10 times</span>
				</li>
			</ul>
		</div><!-- ./. mr-basicinfo -->

	</div><!-- ./.mr-myinformation  -->

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
		background: linear-gradient(100deg, #121212 50%, #ffffff 50%);
		justify-content: center;
		  font-family: "IBM Plex Sans", sans-serif;

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

		> .mr-myinformation {

		.mr-basic-profit {
			padding-left: 50px; 

			h5 {
				text-align: center;
			}

			.mr-profit-board {
				@extend %full-width;
				
					
				.mr-head {
					.mr-col1 {
						text-align: center;
					}
					> span {
						color: #333;
						
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
						border-bottom: 1px solid #a9a9a9;
						font-size: 19px;
					}
					
					.mr-col1 {
						width: 60%;
						text-align: left;

						> a {
							color: #333;
							font-size: 20px;

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