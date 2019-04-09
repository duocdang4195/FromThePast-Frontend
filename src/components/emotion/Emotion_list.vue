<template>
	<div class="mr-emotion-list">			
		<button class="mr-pre"><i class="ti-angle-left"></i></button>			
		<div class="mr-article-wr">
			<div class="mr-header">
				<span>2019-02-18</span>
				<span class="mr-ttl">
					Is Sharing Your Feelings Always Healthy?
				</span>
			</div><!-- ./.mr-header  -->
			<div class="mr-article-cntn">
				In an influential study, a group of Stanford researchers asked pairs of unacquainted people to watch and then discuss a documentary about the World War II bombings of Hiroshima and Nagasaki. <br/>
				As part of the study, some participants were asked to “behave in such a way that your partner does not know you are feeling any emotions at all.” Compared to the people who were free to express emotions, those who were told to hide their feelings experienced spikes in blood pressure and distraction. Also, compared to the pairs who were allowed to express themselves naturally, both people in the emotion “suppression” groups tended to feel less rapport and less positivity toward each other.
			</div><!-- ./.mr-article-cntn -->
		</div><!-- ./.mr-article-wr  -->
		<button  class="mr-next"><i class="ti-angle-right"></i></button>
	</div>	 
</template>
<style lang="scss" scoped>
	%full-width {
		position: relative;
		display: inline-block;
		width: 100%;
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
		background-image:url('../../assets/images/pexels-photo-1084188-1920.jpg');	
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
		.mr-pre {
			margin-right: 20px;
		}
		.mr-next {
			margin-left: 20px;
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
</style>




