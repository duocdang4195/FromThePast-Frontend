<template>
    <div class="authenticate-wr">
      <Login v-if="$route.name === 'login'" />
      <SignUp v-if="$route.name === 'signup'" />
    </div>
</template>

<script>
  import SignUp from '@/components/authenticate/SignUp.vue';
  import Login from '@/components/authenticate/Login.vue';
  export default {
    components: {
      SignUp,
      Login
    }
  }
</script>

<style lang="scss" scoped>
  .authenticate-wr {
    width: 100%;
    height: 100%;
    padding: 100px 0;
  }
  .theme--light.application {
    background-color: #fff;
  }
</style>
