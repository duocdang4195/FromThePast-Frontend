
<template>
	<div class="mr-emotion-list mr-serviceList-wr">
		
		<div class="mr-article-wr">
			<div class=" col-md-12">
				<div class="mr-serviceList">	
					<div class="mr-servicntn">
						<h3>Become writer</h3>

						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
					<div class="mr-regiter-writer">
						<div class="">
							<div class="">
					          <v-text-field
					            v-model="Name"
					            label="Name"
           						color="rgba(0,0,0,0.9)"
					            @keydown.enter.prevent="signIn"
					          ></v-text-field>
					        </div>

					        <div class="">
					          <v-text-field
					            v-model="email"
					            label="Email"
           						color="rgba(0,0,0,0.9)"
					            @keydown.enter.prevent="signIn"
					          ></v-text-field>
					        </div>

					        <div class="signup__input">
					          <v-text-field
					            v-model="phone_number"
					            label="Phone number"
           						color="rgba(0,0,0,0.9)"
					            type="text"
					            @keydown.enter.prevent="signIn"
					          ></v-text-field>
					        </div>
					        <v-textarea class="mr-sample-blog"
					          name="input-7-1"
					          label="Write your article here"
           					  color="rgba(0,0,0,0.9)"
					          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
					          resize="false"
					        ></v-textarea>

					        <div class="reg__btn">
					          <v-btn  :block="true" >Send</v-btn>
					        </div><!-- ./.login__btn  -->
					     </div>
					</div><!-- ./.mr-regiter-writer -->	
				</div>
			</div>
		</div><!-- ./.mr-article-wr  -->
	</div>
</template>
<style lang="scss" scoped>
	%full-width {
		position: relative;
		display: inline-block;
		width: 100%;
	}

    %default-button {
    margin: 0 10px;
    background-color:#212121 !important;
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

			
			.mr-regiter-writer {
				.mr-sample-blog {
					textarea {
						resize: none;
					}
				}

			}	
			.mr-servicntn {
				flex: 1 0 100%;

				h3 {
					position: relative;
					display: inline-block;
					font-size: 30px;
					font-weight: 400;
					margin-bottom: 20px;
					text-transform: uppercase;
				}

				p {
					font-size: 16px;
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
	.reg__btn {
		button {
			margin-left:0;
			color: #fff;
			@extend %default-button;
		 &:hover {
          background-color: #fff !important;
         }
         &:before {
          display: none !important;
         }
		}

		
	}

</style>