<template>
	<div class="mr-emotion-list">			
		<div class="mr-featured-post">
			<h3>Featured writing</h3>
			<div class="mr-writing-box">
				<img  src="../../assets/images/pexels-photo-1051073-2560-1600.jpg" alt="" class="">
				<h4>Why We Spend Our Brief Lives Indoors, Alone, and Typing</h4>
				<p class="rh-date">2018-12-25</p>
				<div class="mr-content">
					I worry about what to tell Kate.

					For most of my students, knowing how to write well will just be an unfair advantage in whatever career they choose — I tell them it’s like being rich, or pretty. But Kate takes art personally: she loves the Dadaists but also thinks they’re a bit cliqueish and silly; in her emails she quotes Rilke and Hurston. She’s one of those students so passionate about writing and literature it makes me feel, briefly, younger to be around her. It also secretly breaks my heart. I once unprofessionally confessed to Kate my misgivings about training her in an art form as archaic as stained glass. She tells me she still thinks about this all the time.
				</div>
			</div>
			<div class="mr-writing-box">
				<img  src="../../assets/images/pexels-photo-1051073-2560-1600.jpg" alt="" class="">
				<h4>Working Out Is Powerful Brain Training</h4>
				<p class="rh-date">2018-12-25</p>
				<div class="mr-content">
					Life is hard, and you’ll be better off if you practice doing hard things — like making your body purposefully uncomfortable.
					Last year, I fell on my face more times than I had in all the previous years of my life combined. Over time, my body became peppered with tiny bruises as I crashed to the floor again and again.
				</div>
			</div>
		</div>
		<div class="mr-article-wr">
			<h3>My emotion</h3>
			<div class="mr-current-post">
				<img  src="../../assets/images/pexels-photo-1051073-2560-1600.jpg" alt="" class="">
				<div class="mr-header">
					<span class="mr-ttl">
						Is Sharing Your Feelings Always Healthy?
					</span>
				</div><!-- ./.mr-header  -->
				<div class="mr-article-cntn">
					In an influential study, a group of Stanford researchers asked pairs of unacquainted people to watch and then discuss a documentary about the World War II bombings of Hiroshima and Nagasaki. <br/>
					As part of the study, some participants were asked to “behave in such a way that your partner does not know you are feeling any emotions at all.” Compared to the people who were free to express emotions, those who were told to hide their feelings experienced spikes in blood pressure and distraction. Also, compared to the pairs who were allowed to express themselves naturally, both people in the emotion “suppression” groups tended to feel less rapport and less positivity toward each other.
				</div><!-- ./.mr-article-cntn -->
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
	/*	background-image:url('../../assets/images/pexels-photo-1084188-1920.jpg');	*/
		background-color: #f9f9f9;

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
	

		.mr-featured-post {
			position: relative;
			display:flex;
			flex-flow: row wrap;
			width: calc(40vw - 20px);
			height: 80vh;
			min-height: 500px;
			padding: 0px;
			margin-right: 20px;
			flex-direction:row;

			h3 {
				flex: 2 0 100%;
				width: 100%;
			}

			> div {
				flex: 1;
				width: calc(50% - 20px);
				padding: 15px;
				margin: 0 10px;
				background-color: #fff;
				box-shadow: 2px 2px 4px 1px rgba(180, 180, 180, 0.4);

				h4 {
					position: relative;
					display: inline-block;
					width: 100%;
					margin-top: 15px;	
					margin-bottom:0;
					font-size: 17px;
					font-weight:600;
					height: 1.5rem;
					text-overflow: ellipsis;
					overflow:hidden;
					white-space: nowrap;
				}

				.mr-content {
					position: relative;
					height: 105px;
					overflow: hidden;
					text-overflow:ellipsis;
					text-align: justify;

					&:after {
						content:'...';
						position:absolute;
						display:inline-block;
						bottom:0;
						right: 0;
						background-color: #fff;
						font-size:16px;
						color: #3e3e3e;
					}
				}
			}
		}
		.mr-article-wr {
			position: relative;
			display: inline-block;
			width: 40vw;
			height: 80vh;
			min-height: 500px;
			cursor: pointer;

			.mr-current-post {	
				padding: 20px;			
				background-color: #fff;
				box-shadow: 2px 2px 4px 1px rgba(180, 180, 180, 0.4);

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
					width: 100%;
					height: 100%;
					line-height: 1.5;
					font-size: 17px;
				}
			}
		}
	}
</style>




