<template>


    	<div>
	 <div class="mr-emt-wrtie-wr" style="background-image:url('/img/sea-3438648_1920.jpg');">

	   <div class="mr-write-area">
			<input type="text" class="mr-subj" placeholder="Subject ...">
			<textarea name="" id="" class="mr-cntn" placeholder="How is your feeling today?"></textarea>
			<input type="file" class="mr-upload-img">
			<input type="text" class="mr-hashtag" placeholder="Hashtag">
			<button class="mr-submit">Post</button>
	   </div>

	</div><!-- ./.mr-emt-wrtie-wr  -->


	<div class="mr-search">
		<span class="mr-icon"><img  src="/img/logo-icon.svg" alt="from the past" class="mr-ft-logo"></span>
		<input type="text" class="mr-input-search" placeholder="What do you want to find?" style="display: none;">
	</div>
</div>
  

</template>

<script>
export default {
	
}
</script>

<style lang="scss" scoped>


.mr-emt-wrtie-wr {
	position: relative;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
	width: 100%;
	height: 100%;
	min-height: 100vh;
	justify-content: center;
	align-items: center;
	backgorund-position: 0 0;
	background-size: cover;

	.mr-write-area {
		position: relative;
		display: inline-block;
		width: 50%;
		min-width: 500px;
		height: auto;
		background-color: #fff;		
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;

		.mr-subj {
			position: relative;
			display: inline-block;
			width: 100%;
			background-color: #e2dfdf;
			border: 1px solid #e0e0e0;
			border-bottom: 0;
			padding: 20px;
			font-size: 20px;
			color:#535353;
			border-top-left-radius: 5px;
			border-top-right-radius: 5px;

			&::placeholder {
				font-size:  20px;
				color: #757575;
			}

		}

		textarea.mr-cntn {
			position: relative;
			display: inline-block;
			width: 100%;
			height: 500px;
			resize: none;
			border: 0;
			padding: 15px;
			font-size: 16px;
			color: #535353;
			line-height: 1.5;

			&:focus{outline: none;}
			&:active {outline: none;}
			&::placeholder {
				font-size:  20px;
			}
		}

		.mr-submit {
			position: relative;
			display: inline-block;
			float: right;
			margin-right: 15px;
			margin-bottom: 15px;
			width:75px;
			height: 30px;
			border: 0;
			background-color: #7b7b7b;
			color: #fafafa;
			font-size: 14px;
			font-weight: bold;
			letter-spacing: 1px;
			border-radius: 3px;
		}

		.mr-upload-img {
			position: relative;
			display: inline-block;
			float: left;
			width: 75px;
			margin-left: 15px;
			color: transparent;

			&:focus{outline: none;}
			&:active {outline: none;}
			
		}
		.mr-hashtag {
			position: relative;
			display: inline-block;
			width: calc(100% - 212px);
			max-width: calc(100% - 212px);
			margin-left: 15px;
			background-color: #f9f9f9;
			border: 1px solid #f1f2f3;
			padding: 0px;
			height: 30px;
			font-size: 13px;

			.ti-input{
				border: 0;
				padding: 0;
				margin: 0;
				.ti-new-tag-input-wrapper {
					padding: 0;

					input {
						height: 25px;
						padding: 5px;
					}
				}
			}
		}
		.mr-upload-img::-webkit-file-upload-button {
		  visibility: hidden;
		}
		.mr-upload-img::before {
		  content: 'Image';
		  color: black;
		  display: inline-block;
		  background: #e2dfdf;
		  border: 1px solid #e2dfdf;
		  border-radius: 3px;
		  padding:7px 15px;;
		  outline: none;
		  white-space: nowrap;
		  -webkit-user-select: none;
		  cursor: pointer;
		  font-weight: 700;
		  font-size: 10pt;
		  color: #666;
		}
		.mr-upload-img:active {
		  outline: 0;
		}

	}
}
</style>




