<template>
	<div>
		<div id="" class="mr-checkout-session">
	        <div class="mr-container">

	            <div class="mr-left-col">
	                <h3 class="mr-heading-left">From</h3>
	                <div class="row">
	                    <div class="col-sm-12">
	                        <label>Full name</label>
	                        <input class="mr-input" type="text" placeholder="What is your full name">
	                    </div>
	                    <!-- column -->
						
	                    <div class="col-sm-12">
	                        <label class="mrg-top-30">Address</label>
	                        <input class="mr-input" type="text" placeholder="Number and street name">
	                    </div>
	                    <!-- column -->

	                    <div class="col-sm-6">
	                         <label class="mrg-top-30">District *</label>
	                        <select name="country" id="country" class="mr-input" required="">
	                            <option value="" selected=""> Select District </option>
	                            <option value="244">Aaland Islands</option>
	                        </select>
						</div>
						<div class="col-sm-6">
	                        <label class="mrg-top-30">City *</label>
	                        <select name="country" id="country" class="mr-input" required="">
	                            <option value="" selected=""> Select District </option>
	                            <option value="244">Aaland Islands</option>
	                        </select>
	                    </div>
	                    <!-- /column -->

	                    <div class="col-sm-12">
	                        <label class="mrg-top-30">Phone *</label>
	                        <input class="mr-input" type="text" placeholder="">
	                    </div>
	                    <!-- column -->

	                    <div class="col-sm-12">
	                        <label class="mrg-top-30">Email *</label>
	                        <input class="mr-input" type="email" placeholder="your@email.com">
	                    </div>
	                    <!-- column -->                  

	                </div>
	                <!-- /row -->

					 <h3 class="mr-heading-left-2 ">To</h3>
	                <div class="row">
						<div class="col-sm-12">
							<label class="mr-radio-style" for="mysefl">
								Mysefl
								<input type="radio" id="mysefl" name="sendto">
								<span></span>
							</label>
							<label class="mr-radio-style" for="others">
								Other
								<input type="radio" id="others" name="sendto">
								<span></span>
							</label>
	                    </div>
	                    <!-- column -->

					    <div class="col-sm-12">
	                        <label class="mrg-top-30">Delivery on *</label>
	                        <input class="mr-input" type="date" placeholder="dd/mm/yyyy">
	                    </div>
	                    <!-- column -->    


	                    <div class="col-sm-12">
	                        <label class="mrg-top-30">Full name</label>
	                        <input class="mr-input" type="text" placeholder="What is your full name">
	                    </div>
	                    <!-- column -->
						
	                    <div class="col-sm-12">
	                        <label class="mrg-top-30">Address</label>
	                        <input class="mr-input" type="text" placeholder="Number and street name">
	                    </div>
	                    <!-- column -->

	                    <div class="col-sm-6">
	                         <label class="mrg-top-30">District *</label>
	                        <select name="country" id="country" class="mr-input" required="">
	                            <option value="" selected=""> Select District </option>
	                            <option value="244">Aaland Islands</option>
	                        </select>
						</div>
						<div class="col-sm-6">
	                        <label class="mrg-top-30">City *</label>
	                        <select name="country" id="country" class="mr-input" required="">
	                            <option value="" selected=""> Select District </option>
	                            <option value="244">Aaland Islands</option>
	                        </select>
	                    </div>
	                    <!-- /column -->

	                    <div class="col-sm-12">
	                        <label class="mrg-top-30">Phone *</label>
	                        <input class="mr-input" type="text" placeholder="">
	                    </div>
	                    <!-- column -->

	                    <div class="col-sm-12">
	                        <label class="mrg-top-30">Email *</label>
	                        <input class="mr-input" type="email" placeholder="your@email.com">
	                    </div>
	                    <!-- column -->                  

	                </div>
	                <!-- /row -->
					<div class="mr-action-btn">
	                        <a href="#" class="">Order</a>
	                    </div>
	            </div>
	            <!-- ./. mr-left-col -->

	            <div class="mr-right-col">
	                <div class="mr-sum-board">
	                    <h3 class="">Booking serivce</h3>

	                    <table class="mr-sum-tbl">
	                        <tbody>
	                        	 <tr>
	                                <th colspan="2"><b> The New Anxiety Therapy That’s All About Accepting Your Fears</b></th>
	                            </tr>

	                            <tr>
	                                <th>Service name</th>
	                                <td><b>Hand writing letter</b></td>
	                            </tr>

	                            <tr>
	                                <th>Stored time</th>
	                                <td><b>1.5 years</b></td>
	                            </tr>

	                            <tr>
	                                <th>Distance</th>
	                                <td><b>15km</b></td>
	                            </tr>

	                            <tr class="grand-total">
	                                <th class="">Order Total</th>
	                                <td class="">$ 118</td>
	                            </tr>

	                        </tbody>
	                    </table>
	                </div>
	                <!-- /cart-totals -->

	            


	            </div>
	            <!-- /mr-right-col -->

	        </div>
	        <!-- /container -->
	    </div>
    <!-- /Checkout -->
	</div>
</template>
<style  lang="scss" scoped>
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

	/* Customize the label (the container) */
	.mr-radio-style {
		display: inline-block;
		position: relative;
		padding-left: 35px;
		margin-bottom: 12px;
		margin-right: 20px;
		cursor: pointer;
		font-size: 15px;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;

		input {
			position: absolute;
			opacity: 0;
			cursor: pointer;
			height: 0;
			width: 0;
		}
		span {
			position: absolute;
			top: 0;
			left: 0;
			height: 20px;
			width: 20px;
			background-color: #fff;
			border-radius: 50%;
			-webkit-border-radius:50%;
			 -moz-border-radius:50%;
			border: 1px solid #ced4da;
		}
		span:after {
			content: "";
			position: absolute;
			display: none;
		}
		input:checked ~ span:after {
		  display: block;
		}
		span:after {
			left: 4px;
			top: 4px;
			width: 10px;
			height: 10px;
			background-color: #3e3e3e;
			border-radius: 50%;
			-webkit-border-radius:50%;
			 -moz-border-radius:50%;
			-webkit-transform: rotate(45deg);
			-ms-transform: rotate(45deg);
			transform: rotate(45deg);
			}
	}


	
	.mr-checkout-session {
		position: relative;
		display: flex;
		width: 100%;
		margin-top: 100px;
		justify-content: center;

		.mr-container {
			position: relative;
			display: flex;
			flex-direction: row;
			max-width: 1200px;
			width: 100%;
			padding: 0 15px;
			margin-bottom: 60px;

			> div {
				position: relative;
				padding: 0 15px;
			}
			.mr-left-col {
				width: 58%;

				.mr-heading-left {
					@extend %mr-heading;

					&:before {
						height: 2px;
					}

					&:after {
						height: 1px;
						border-bottom:1px solid #3e3e3e;
					}
				}
				.mr-heading-left-2 {
					@extend %mr-heading;
					margin-top: 30px;

					&:before {
						height: 1px;
					}

					&:after {
						height: 1px;
						border-bottom:1px solid #3e3e3e;
					}
				}

				[class*="col-"]{
					margin-bottom:20px;

					label {
						text-transform:uppercase;
						font-family: 'Montserrat', sans-serif;
						font-weight: 300;
						letter-spacing:1px;
						text-rendering:optimizelegibility;
						text-size-adjust:100%;
						text-transform:uppercase;
						font-smooth: antialiased;
						-webkit-font-smoothing:antialiased;
						tap-highlight-color:rgba(0, 0, 0, 0);
						-webkit-tap-highlight-color:rgba(0, 0, 0, 0);
						color: #3e3e3e;
					}
				}
				.mr-input {
					position: relative;
					display: inline-block;
					width: 100%;
					height: 34px;
					padding: 0.5rem;
					border: 1px solid #ced4da;
					background-color: #fff;
				}

				.mr-action-btn {
					position:relative;
					display: inline-block;
					width: 100%;
					margin-top:30px;
					text-align:center;
					a {
						position:relative;
						display: inline-block;
						width: 130px;
						height: 47px;
						line-height: 47px;
						color:#fff;
						@extend %default-button;

						&:hover {
							text-decoration: none;
						}
					}
				}
			}
			.mr-right-col {
				width: 42%;


				.mr-sum-board {
					position: relative;
					display: inline-block;
					width: 100%;
					height: auto;
					padding: 30px;
					border: 1px solid #e9e9e9;

					h3 {
						@extend %mr-heading;

						&:before {
							height: 1px;
							background-color:transparent;
							border-bottom:1px solid #3e3e3e;
						}

						&:after {
							height: 2px;
							border-bottom:2px solid #3e3e3e;
						}
					}
				}

				.mr-sum-tbl {
					position: relative;
					width: 100%;
					table-layout: fixed;
					border-collapse: collapse;

					tr td, tr th {
						padding: 15px 8px;
						font-size:15px;
						border-bottom: 1px solid #e9e9e9;
					}
					tr:last-child td, tr:last-child th {
						border-bottom: 0;
						font-weight: 600;
					}
					tr td {
						text-align:right;
					}
					tr:last-child td {
						font-size:20px;
					}
				}

			}

		}
	}
</style>
