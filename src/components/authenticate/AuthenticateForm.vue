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
    background: url('https://image.shutterstock.com/image-photo/wood-wall-bulb-lights-lamp-260nw-551746348.jpg') no-repeat center center fixed; 
    background-size: cover;
    width: 100%;
    height: 100%;
    padding: 100px 0;
  }
</style>
