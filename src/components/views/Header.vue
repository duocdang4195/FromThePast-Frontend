<template>
	<div>
		
		 <div id="loading" style="position: fixed; z-index:99999; left:0; top:0;right: 0;bottom: 0;background: #fff; content: ''; "></div>
		    <section id="app">
		    <!-- Navigation -->
		        <div id="openHeader" style="position: fixed;height: 100px;width: 100%; z-index:9998;" @mouseover="setHeader(true)" @mouseout="setHeader(false)" >
		          <transition name="slide" enter-active-class="slideInDown"
		          leave-active-class="slideOutUp">            
		                <nav class="main-nav op-nav menu-light js-transparent menu-transparent" v-cloak v-show="isHeader">
		                    <div class="container">
		                        <div class="navbar">

		                            <div class="brand-logo">
		                                <router-link to="/" exact tag="a" class="navbar-brand">
		                                    <img class="mr-head-logo" src="../img/logo-dark.svg" alt="From The Past">
		                                </router-link>
		                            </div>
		                            <!-- brand-logo -->

		                            <div class="navbar-header">
		                                <div class="inner-nav right-nav">
		                                    <ul>
		                                        <li class="navbar-toggle">
		                                            <button type="button" data-toggle="collapse" data-target=".collapse">
		                                                <span class="sr-only"></span>
		                                                <i class="ti-menu"></i>
		                                            </button>
		                                        </li>
		                                    </ul>
		                                    <form action='#' id='search' method='get'>
		                                        <div class="input">
		                                            <div class="container">
		                                                <input class="search" placeholder='Search...' type='text'>
		                                                <button class="submit ti-search" type="submit" value="close"></button>
		                                            </div>
		                                            <!-- /container -->
		                                        </div>
		                                        <!-- /input -->
		                                        <button class="ti-close" id="close" type="reset"></button>
		                                    </form>
		                                </div>
		                                <!-- /right-nav -->
		                            </div>
		                            <!-- navbar-header -->

		                            <div class="custom-collapse navbar-collapse collapse inner-nav">
		                                <ul class="nav navbar-nav">
		                                      <li>
		                                        <router-link tag="a" to="/home" exact>
		                                            Home
		                                        </router-link>
		                                      </li>
		                                    <!-- /dropdown -->

		                                    <li>
		                                        <router-link tag="a" to="/emotion" exact>
		                                            Emotion
		                                        </router-link>                                                                                
		                                    </li>
		                                    <!-- /dropdown -->

		                                    <li>
		                                        <router-link tag="a" to="/services" exact>
		                                            Services
		                                        </router-link>
		                                    </li>
		                                    <!-- /dropdown -->

		                                    <li>
		                                        <router-link tag="a" to="/emotion_write" exact>
		                                            Become a writer
		                                        </router-link>                                        
		                                    </li>
		                                    <li>
		                                        <router-link tag="a" to="/about" exact>
		                                            About
		                                        </router-link>                                        
		                                    </li>
		                       
		                                </ul>
		                                <!-- /nav -->
		                            </div>
		                            <!-- /collapse -->
		                        </div>
		                        <!-- /navbar -->
		                    </div>
		                    <!-- /container -->
		                </nav>
		             </transition>
		        </div>
		   
		    
		    <!--/#Navigation-->      
		    <transition name="fade">  
		        <router-view></router-view>   
		    </transition>
		    <div id="test" style="width:100px; position: fixed; top:0; bottom: 0; right: 0; z-index: 9999;" @mouseover="setMenu(true)" @mouseout="setMenu(false)">
		        <Slide right :is-open="isMenu" :burger-icon="false">
		          <router-link tag="a" to="/user/profile">
		                <span>My Info</span>
		          </router-link>
		          <router-link tag="a" to="/user/profile">
		                <span>My Profit</span>
		          </router-link>
		          <router-link tag="a" to="/emotion">
		                <span>My Writing</span>
		          </router-link>  
		          <router-link tag="a" to="/user/my_quote">
		                <span>My Quotation</span>
		          </router-link> 
		          <router-link tag="a" to="/user/my_services">
		                <span>My Services</span>
		          </router-link> 
		          <router-link tag="a" to="/user/my_album">
		                <span>My Album</span>
		          </router-link>                             
		        </Slide>
		    </div>
	</div>
</template>

<script>
export default {

  name: 'Header',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.main-nav-hidden {
	top: -80px;
}
/*login page*/
.brand-logo {
	.mr-head-logo {
		position: relative;
		display: inline-block;
		width: 140px;
	}
}

.main-nav.menu-light {
	    box-shadow: 1px 3px 3px rgba(180,180,180,0.3) !important;
}
.main-nav.menu-light .inner-nav > ul > li > a, .main-nav.menu-light .navbar-toggle i {color: #0a0a0a;}
.main-nav .inner-nav > ul > li > a {line-height: 80px;}
.main-nav {height: 80px;}
.menu-transparent {
	background-color: rgba(255, 255, 255, 0.9) !important;
}
</style>