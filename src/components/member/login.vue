<template>
	<div id="login" class="section parallax no-border" style="background-image:url(../img/road-sun-rays-path.jpg)">
        <div class="container">
            <div class="col-md-offset-3 col-md-6 col-sm-12 bg-white pdd-horizon-70 pdd-vertical-70">
                <h1 class="mrg-btm-70 heading">Login</h1>
                <h5>Username:</h5>
                <input type="text" class="form-control" name="name" placeholder="">

                <h5 class="mrg-top-30">Password:</h5>
                <input type="password" class="form-control" name="password" placeholder="">

                <div class="col-sm-12 no-padding-horizon mrg-btm-15">
                    <label class="mrg-top-15">
                        <input type="checkbox" name="agree-checkbox" id="agree-checkbox"> Remember me
                    </label>

                    <a class="pull-right mrg-top-15 font-weight-normal" href="#">Forget Password?</a>
                </div>
                <!--/ column -->

                <div class="text-center">
                    <a class="btn btn-block btn-style-2" href="#">Sign In</a>
                    <p class="mrg-top-50">Don't have an account? <a href="#"><b>Sign Up Now!</b></a></p>
                </div>

            </div>
            <!-- /column  -->
        </div>
        <!-- /container -->
    </div>
    <!-- /Login -->
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
.brand-logo {
	.mr-head-logo {
		position: relative;
		display: inline-block;
		width: 140px;
	}
}
#login.section {
	position: relative;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;	
	width: 100%;
	height: 100vh;
	justify-content: center;
	align-items: center;
	padding: 0;
}
</style>