<template>
  <div class="login">
    <h2 class="login__title">
      SIGNUP
    </h2>
    <div class="login__input">
      <v-text-field
        v-model="userName"
        label="USER NAME"
      ></v-text-field>
    </div>
    <div class="signup__input">
      <v-text-field
        v-model="password"
        label="PASSWORD"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      userName: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .login {
    background: #fff;
    width: 500px;
    margin: 0 auto;
    padding: 30px 60px;
    text-align: center;
    border-radius: 5px;
    &__title {
      font-size: 24px;
      margin-bottom: 10px;
    }
    &__input {
      p {
        text-align: left;
      }
    }
  }
</style>

