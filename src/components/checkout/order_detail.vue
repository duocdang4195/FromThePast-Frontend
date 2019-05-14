<template>
  <div class="mr-order-detail-wr">
	<v-container>
		<v-layout row wrap>
			<v-flex xs12>
  				<h5>Order detail</h5>
  				<h6>
  					<span class="mr-order-num">#{{getDetailOrder.id}}</span> -
  					<span class="mr-order-stt" v-text="checkStatus(getDetailOrder.state)"></span>
  				</h6>
			</v-flex>
  		</v-layout row wrap>
  		<v-layout row wrap>
	  		 <v-flex xs6>
			  	<div class="mr-orderer-info">
			  		<h6>Recipient</h6>
			  		<ul>
			  			<li>
			  				<strong>Name:</strong>
			  				<span>{{getDetailOrder.name}}</span>
			  			</li>
			  			<li>
			  				<strong>Address:</strong>
			  				<span>{{getDetailOrder.address}}, {{getDetailOrder.ward}}, {{getDetailOrder.dist}}, {{getDetailOrder.city}}</span>
			  			</li>
			  			<li>
			  				<strong>Phone:</strong>
			  				<span>{{getDetailOrder.phone}}</span>
			  			</li>
			  			<li>
			  				<strong>Email:</strong>
			  				<span>{{getDetailOrder.email}}</span>
			  			</li>
			  		</ul>
			  	</div>
			  	<div class="mr-orderer-info" v-if="showSender">
			  		<h6>Sender</h6>
			  		<ul>
			  			<li>
			  				<strong>Name:</strong>
			  				<span>{{ getDetailOrder.from_name }}</span>
			  			</li>
			  			<li>
			  				<strong>Address:</strong>
			  				<span>{{getDetailOrder.from_address}}, {{getDetailOrder.from_ward}}, {{getDetailOrder.from_dist}}, {{getDetailOrder.from_city}}</span>
			  			</li>
			  			<li>
			  				<strong>Phone:</strong>
			  				<span>{{getDetailOrder.from_phone}}</span>
			  			</li>
			  			<li>
			  				<strong>Email:</strong>
			  				<span>{{getDetailOrder.from_email}}</span>
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
			  				<strong>Payer status:</strong>
			  				<span v-text="checkStatusPay(getDetailOrder.state)"></span>
			  			</li>
			  		</ul>
			  	</div>
		  	</v-flex><!-- ./.v-flex -->

		  	<v-flex xs6 class="mr-right-col">
		  		<div class="mr-service">
		  			<h6>Service detail</h6>
		  			<ul class="mr-time-info">
		  				<li>
		  					<span>Booking date</span>
		  					<strong>{{getDetailOrder.created_at | moment("dddd, MMMM Do YYYY")}}</strong>
		  				</li>
		  				<li>
		  					<span>Delivering date</span>
		  					<strong>{{getDetailOrder.time_end | moment("dddd, MMMM Do YYYY")}}</strong>
		  				</li>
		  			</ul>
		  			<ul class="mr-money">
		  				<li>
		  					<span>Stored time</span>
		  					<strong>{{ getDetailOrder.store_time }} day</strong>
		  				</li>
		  				<li>
		  					<span>Delivery distance</span>
		  					<strong>{{ getDetailOrder.distance }} km</strong>
		  				</li>
		  				<li>
		  					<span>Total</span>
		  					<strong>{{ getDetailOrder.total_price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) }}</strong>
		  				</li>
		  			</ul>
		  		</div><!-- ./.mr-service -->

			  	<v-layout row wrap>
			  		<v-btn @click="backToList" class="mr-backBtn" color="rgba(0,0,0)">Back to list</v-btn>
			  	</v-layout>

		  	</v-flex><!-- ./.v-flex -->
		  </v-layout row wrap>


  	</v-container><!-- ./.mr-orderer-detail  -->
  </div><!-- ./.mr-order-detail-wr  -->
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			type: '',
			showSender: false
		}
	},
	created() {
		this.type = this.$store.state.type;
    if (this.type === "1") {
      this.showSender = true;
    }
	},
	computed: {
		...mapGetters(['getDetailOrder'])
	},
	methods: {
		backToList() {
			this.$router.push({name: 'Emotion_list'})
		},
		checkStatus(state) {
      if(state === '1') {
        return this.type = 'submit'
      }
      if(state === '2') {
        return this.type = 'payment'
      }
      if(state === '3') {
        return this.type = 'paid '
      }
      if(state === '4') {
        return this.type = 'delivering'
      }
      if(state === '5') {
        return this.type = 'complete '
      }
		},
		checkStatusPay(state) {
			if(state > parseInt("3")) {
        return this.type = 'paid'
      } else {
				return this.type = 'not paid'
			}
		}
	}
}
</script>


<style lang="scss" scoped>
	%mr-heading {
		position: relative;
		display: inline-block;
		width: 100%;
		font-family: 'Montserrat', sans-serif;
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
	    letter-spacing:2px;
	    font-family: 'Montserrat', sans-serif;
	    transition: all 0.4s ease-in-out;
	    -webkit-transition: all 0.4s ease-in-out;
	    &:hover {
	            background-color: #fff !important;
	            border: 0 !important;
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
			width: 100%;
			font-size: 30px;
			font-weight: bold;
			text-transform: uppercase;
			color: #3e3e3e;
			font-family: "IBM Plex Sans", sans-serif;
			text-align: center;
		}
		h6 {
			position: relative;
			margin-bottom: 50px;
			font-weight: 300;
			font-size: 16px;

			.mr-order-num {
				color: #4473fb;
				font-style: italic;
			}
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
							width: 30%;
						}
						strong {
							align-self: flex-end;
							text-align: right;
							width: 70%;
						}

						&:first-child {
							padding-top: 0;
						}

						&:last-child {
							border-bottom: 0;
							font-weight:400;
							font-size: 16px;
						}
					}
					&.mr-time-info {
						margin-bottom: 50px;
						li {
							&:first-child {
								padding-top: 0;
								strong {
									width: 100%;
									text-align: right;
								}
							}
							&:last-child{
								border-bottom: 1px solid #d9d9d9;
								font-size: 14px;
								font-weight: 300;
							}
						}
					}
				}
			}
			.mr-backBtn {
				position:relative;
				display: inline-block;
				width: 100%;
				height: 47px;
				margin-right: 0;
				margin-top: 30px;
				line-height: 47px;
				color:#fff;
				background-color: #000;
				@extend %default-button;

			}
		}
		
	}
</style>>