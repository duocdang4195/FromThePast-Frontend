<template>
	<div class="mr-myinformation-wr">

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

		> .mr-myinformation   {
			display: flex;
			width: 100%;
			padding: 120px 15px;
			justify-content: center;
			
			> div {
				flex: 1 0 50%;
				position: relative;
			}
			.mr-quote {

				text-align: center;
				color: #fff;
				padding: 75px;

				.mr-greeting {
					position: relative;
					display: inline-block;
					width: 100%; 
					text-align: left;
					font-size: 13px;
				}

				.mr-wc-quotation {
					position: absolute;
					display: inline-block;
					height: 200px;
					width: calc(100% - 150px);
					padding-right: 50px;
					margin-top: auto;
					margin-bottom: auto;
					top:0 ;
					bottom:0;
					left: 75px;

					textarea {
						position: relative;
						display: inline-block;
						width: 100%;
						height: 200px;
						background: transparent;
						border: none;
						resize: none;
						font-size: 35px;
						color: #fafafa;
						line-height: 1.3;

						&::placeholder {
							font-size: 35px;
							color: #fafafa;
							line-height: 1.3;
						}

						&:focus {
							outline: none;
						}
					}

					i {
						position: relative;
						display: inline-block;
						width: 100%;
						text-align: right;
					}
					
					p {
						position: relative;
						display: inline-block;
						font-size: 35px;
						line-height: 1.3;

					
					}
					
				}

				.mr-welcomequestion {
					position: absolute;
					display: inline-block;
					width: 100%;
					bottom: 0px;
					left: 0;

					input {
						position: relative;
						display: inline-block;
						width: 100%;
						text-align: center;
						background-color: transparent;
						font-size: 17px;
						color: #9e9e9e;
						border: 0;

						&::placeholder {
							font-size: 17px;
							color: #9e9e9e;						
						}
					}
				}
			}
		}
	}
	.mr-myinformation-wr {
		position: relative;
		display: flex;
		width:100vw;
		height: 100%;
		min-height: 100vh;
		flex-direction: row;
		flex-wrap: wrap;
		background: linear-gradient(100deg, #121212 20%, #ffffff 0%);
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
			padding-left: 0px; 
			width: 80%;
			margin-left: 20%;

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

			.mr-profit-board {
				position: relative;
				display: inline-block; 
				width: 100%;
				padding: 0;
				background-color:rgba(255,255,255,0.95);
				
					
				.mr-head {
					font-weight: 400;
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
					
					.mr-col0 {
						width: 20%;
					}
					.mr-col1 {
						width: 20%;
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
</style>