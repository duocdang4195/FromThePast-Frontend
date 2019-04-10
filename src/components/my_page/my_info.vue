<template>
	<div>
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

				<div class="mr-basicinfo">
					<h5>My information</h5>
					<ul>
						<li>
							<strong>Email:</strong>
							<span>email@tuquakhu.com</span>
						</li>
						<li>
							<strong>Phone:</strong>
							<span class="mr-underline">Add your number</span>
							<span style="display: none;">0946 89 89 89</span>
						</li>
						<li>
							<strong>Address:</strong>
							<span class="mr-underline">Add your number</span>
							<span style="display: none;">98 Truong Trinh street, Ward 10, Tan Binh District, Ho Chi Minh city</span>
						</li>
						<li>
							<strong>Password:</strong>
							<span><input type="password" placeholder="Input new password" class="mr-edit-pass"></span>
						</li>
						<li>
							<strong>Your budget:</strong>
							<span>232,34 $</span>
						</li>
						<li>
							<strong>Contact list:</strong>
							<span>100 <a href="#">(See list)</a></span>
						</li>
						<li>
							<strong>Your order:</strong>
							<span>14 <a href="#">(See list)</a></span>
						</li>
						<li style="display: none;"><button>Change password</button></li>
					</ul>
				</div><!-- ./. mr-basicinfo -->

			</div><!-- ./.mr-myinformation  -->

		</div><!--./. mr-myinformation-wr-->
	</div>
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
			.mr-basicinfo {
				padding-left: 150px;
				margin-top: 50px;
				
				h5 {
					position: relative;
					display: inline-block;
					width: 100%;
					text-align: left;
					font-size: 30px;
					font-weight: bold;
					font-family: "IBM Plex Sans", sans-serif;
				}
				ul {
					position: relative;
					display: inline-block;
					width: 100%;
					margin-top: 30px;

					li {
						position: relative;
						display: inline-block;
						width: 100%;
						margin: 10px 0;
						line-height: 1.4;

						strong {
							color: #121212;
							font-size: 25px;
						}
						span {
							color: #999;
							font-size: 22px;
							font-weight: 300;
							margin-left: 7px;

							.mr-edit-pass {
								position: relative;
								display: inline-block;
								width: 200px;
								border:0;
								border-bottom: 1px solid #d9d9d9;
								font-size: 20px;
								font-weight: 300;
								
								&::placeholder{
									font-size: 20px;
									color: #999;
									font-weight: 300;
								}
							}

						}

						.mr-underline {
							cursor: pointer;
							display: inline-block;
							border-bottom: 1px solid #d9d9d9;
						}

						&:last-child {
							button  {
								border: 0;
								background: transparent;
								float: right;
							}
						}
					}
				}
			}
		}
	}
</style>