<template>
  <div class="mr-order-detail-wr">
	<v-container>
		<v-layout row wrap>
			<v-flex xs12>
  				<h5>Order detail</h5>
			</v-flex>
  		</v-layout row wrap>
  		<v-layout row wrap>
	  		 <v-flex xs6>
			  	<div class="mr-orderer-info">
			  		<h6>Recipient</h6>
			  		<ul>
			  			<li>
			  				<strong>Name:</strong>
			  				<span>Người nhận</span>
			  			</li>
			  			<li>
			  				<strong>Address:</strong>
			  				<span>184 Nguyễn Xí, Ward 25, Binh Thanh District, Ho Chi Minh City</span>
			  			</li>
			  			<li>
			  				<strong>Phone:</strong>
			  				<span>0868822947</span>
			  			</li>
			  			<li>
			  				<strong>Email:</strong>
			  				<span>recipient@email.com</span>
			  			</li>
			  		</ul>
			  	</div>
			  	<div class="mr-orderer-info">
			  		<h6>Sender</h6>
			  		<ul>
			  			<li>
			  				<strong>Name:</strong>
			  				<span>Reciver</span>
			  			</li>
			  			<li>
			  				<strong>Address:</strong>
			  				<span>184 Nguyễn Xí, Ward 25, Binh Thanh District, Ho Chi Minh City</span>
			  			</li>
			  			<li>
			  				<strong>Phone:</strong>
			  				<span>0868822947</span>
			  			</li>
			  			<li>
			  				<strong>Email:</strong>
			  				<span>recipient@email.com</span>
			  			</li>
			  		</ul>
			  	</div>

			  	<div class="mr-orderer-info">
			  		<h6>Payment information</h6>
			  		<ul>
			  			<li>
			  				<strong>Payment method: </strong>
			  				<span>COD</span>
			  			</li>
			  			<li>
			  				<strong>Payer:</strong>
			  				<span>Payer name</span>
			  			</li>
			  			<li>
			  				<strong>Payment address:</strong>
			  				<span>184 Nguyễn Xí, Ward 25, Binh Thanh District, Ho Chi Minh City</span>
			  			</li>
			  			<li>
			  				<strong>Email:</strong>
			  				<span>recipient@email.com</span>
			  			</li>
			  		</ul>
			  	</div>
		  	</v-flex><!-- ./.v-flex -->

		  	<v-flex xs6 class="mr-right-col">
		  		<div class="mr-service">
		  			<h6>Service detail</h6>
		  			<ul>
		  				<li>
		  					<strong>The New Anxiety Therapy That’s All About Accepting Your Fears</strong>
		  				</li>
		  				<li>
		  					<span>Hand writing letter</span>
		  					<strong>$$</strong>
		  				</li>
		  				<li>
		  					<span>Stored time</span>
		  					<strong>1.5 years - $$</strong>
		  				</li>
		  				<li>
		  					<span>Delivery distance</span>
		  					<strong>5km - $$</strong>
		  				</li>
		  				<li>
		  					<span>Total</span>
		  					<strong>$$</strong>
		  				</li>
		  			</ul>
		  		</div><!-- ./.mr-service -->

			  	<v-layout row wrap>
			  		<v-btn class="mr-backBtn" color="rgba(0,0,0,0.5)">Back to list</v-btn>
			  	</v-layout>

		  	</v-flex><!-- ./.v-flex -->
		  </v-layout row wrap>


  	</v-container><!-- ./.mr-orderer-detail  -->
  </div><!-- ./.mr-order-detail-wr  -->
</template>
<style lang="scss" scoped>
	%mr-heading {
		position: relative;
		display: inline-block;
		width: 100%;
		font-family: 'Montserrat', sans-serif;
		font-weight: 300;
		color: #3e3e3e;
		text-transform: uppercase;
		font-size: 15px;
		letter-spacing: 2px;
		margin-bottom: 60px;

		&:before {
			content:"";
			position: absolute;
			display: block;
			width: 30px;
			height: 2px;
			left: 0;
			bottom: -10px;
			background-color: #3e3e3e;
		}

		&:after {
			content:"";
			position: absolute;
			display: block;
			width: 40px;
			height: 1px;
			left: 0;
			bottom: -17px;
			border-bottom:1px solid #3e3e3e;
		}
	}
	%default-button {
	    margin: 0 10px;
	    background-color:#212121;
	    border: 1px solid #212121;
	    color: #fff;
	    text-transform:uppercase;
	    font-size:12px;
	    letter-spacing:1px;
	    font-family: 'Montserrat', sans-serif;
	    transition: all 0.4s ease-in-out;
	    -webkit-transition: all 0.4s ease-in-out;
	    &:hover {
	            background-color: #fff;
	            color: #212121;
	        }
	}

	.mr-order-detail-wr {
		position: relative;
		display: flex;
		width: 100%;
		text-align: center;

		h5 {
			position: relative;
			display: inline-block;
			margin-top: 100px;
			margin-bottom: 30px;
			width: 100%;
			font-size: 30px;
			font-family: "IBM Plex Sans", sans-serif;
			text-transform: uppercase;
			font-weight: 400;
			letter-spacing: 1px;
		}
		.mr-orderer-info {
			position: relative;
			width: 100%;
			h6 {
				position: relative;
				display: inline-block;
				width: 100%;
				text-align: left;
				margin-bottom: 30px;
				font-size: 15px;
				font-weight: 300;
				@extend %mr-heading;
			}

			ul {
				list-style-type: none;
				text-align: left;
				padding: 0;
				margin: 0 0 50px 0;

				li {
					padding: 5px 0;
					strong {
						position: relative;
						display: inline-block;
						margin-right: 5px;
					}
				}
			}
			.mr-backBtn {
				position:relative;
				display: inline-block;
				width: 130px;
				height: 47px;
				line-height: 47px;
				color:#fff;
				background-color: #000;
				@extend %default-button;

			}
		}
		.mr-right-col {
			padding: 0 15px;

			.mr-service {
				position: relative;
				display: inline-block;
				width: 100%;
				background-color: #f6f6f6;
				border: 1px solid #f0f0f0;
				padding: 20px;


				h6 {
					text-align: left;
					@extend %mr-heading;
				}

				ul {
					list-style-type: none;
					text-align: left;
					padding: 0;
					margin: 0;

					li {
						display: flex;
						padding: 10px 0;
						border-bottom: 1px solid #d9d9d9;

						span {
							align-self: flex-start;
							width: 50%;
						}
						strong {
							align-self: flex-end;
							text-align: right;
							width: 50%;
						}

						&:first-child {
							padding-top: 0;
							strong {
								width: 100%;
								text-align: left;
							}
						}

						&:last-child {
							border-bottom: 0;
							font-weight:400;
							font-size: 16px;
						}
					}
				}
			}
		}
		
	}
</style>>