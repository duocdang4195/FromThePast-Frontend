<template>

    <div id="login" class="section parallax no-border" style="background-image:url(../img/road-sun-rays-path.jpg)">
        <div class="container">
            <div class="col-md-offset-3 col-md-6 col-sm-12 bg-white pdd-horizon-70 pdd-vertical-70">
                <h1 class="mrg-btm-70 heading">register</h1>
                <h5>Username:</h5>
                <input type="text" class="form-control" name="name" placeholder="">

                <h5 class="mrg-top-30">Email</h5>
                <input type="text" class="form-control" name="email" placeholder="">

                <h5 class="mrg-top-30">Password:</h5>
                <input type="password" class="form-control" name="password" placeholder="">

				<h5 class="mrg-top-30">Retype password:</h5>
                <input type="password" class="form-control" name="password" placeholder="">

            

                <div class="text-center mrg-top-30">
                    <a class="btn btn-block btn-style-2" href="#">Sign Up</a>
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

  name: 'register',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
</style>