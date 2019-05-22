<template>
  <v-content class="mr-contact-wr">
    <v-container >
    	<h5>Contact list</h5>
    	<ul class="mr-contact-list">
    		<li class="mr-list-head">
    			<span>No.</span>
    			<span>Name</span>
    			<span>Phone number</span>
    			<span>Address</span>
    			<span>Email</span>
    		</li>
    		<li>
    			<span>01.</span>
    			<span>Nguyen Keo Kiệt</span>
    			<span>031297845</span>
    			<span>contact1@contact.com</span>
    			<span>91  Vo Văn Kiệt, 13 Ward, District, Ho Chi Minh city</span>
    		</li>
    	</ul>
    </v-container>
  </v-content>
</template>
<style lang="scss" scoped>
	%full-width{
		position: relative;
		display: inline-block;
		width: 100%;
	}
	.mr-contact-wr {		
		font-family: "IBM Plex Sans", sans-serif;

		&:before {
			content: ' ';
			position: absolute;
			width: 100vw;
			height: 70px;
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
			margin-bottom: 20px;
			width: 100%;
			font-size: 30px;
			font-family: "IBM Plex Sans", sans-serif;
			font-weight:400;
			text-transform: uppercase;
			letter-spacing: 1px;	
			text-align: center;		
		}
		.mr-contact-list {
			@extend %full-width;
			padding: 0;
			margin: 0;

			li {
				position: relative;
				display: flex;
				width: 100%;
				padding: 10px 0;
				list-style-type: none;
				margin: 0;
				border-bottom: 1px solid #ececec;

				&.mr-list-head {
					font-weight: 400;
					text-align: center;

					> span {
						border-right: 0;
					}
				}
				> span {
					position: relative;
					padding: 0px 7px;

					&:nth-child(1){
						width: 50px;
						text-align: center;
					}
					&:nth-child(2){
						width:25%;
						min-width: 100px;
					}
					&:nth-child(3){
						width: 130px;
						text-align: center;
					}
					&:nth-child(4){
						width: 200px;
						text-align: center;
					}
					&:nth-child(5){
						width: calc(75% - 380px);
						border-right: none;
					}
				}
			}
		}
	}
</style>