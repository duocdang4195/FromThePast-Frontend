<template>
  <div class="login">
    <h2 class="login__title">
      LOGIN
    </h2>
    <div class="login__input">
      <v-text-field
        v-model="email"
        label="USER NAME"
        @keydown.enter.prevent="signIn"
      ></v-text-field>
    </div>
    <div class="signup__input">
      <v-text-field
        v-model="password"
        label="PASSWORD"
        type="password"
        @keydown.enter.prevent="signIn"
      ></v-text-field>
    </div>
    <div class="login__btn">
      <v-btn @click="signIn" :block="true" color="#cecece">LOGIN</v-btn>
    </div>
    <div class="login__link">
      <p>Don't have an account? <router-link :to="{name: 'signup'}" > Sign Up Now! </router-link></p>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import Swal from 'sweetalert2';

  export default {
    data() {
      return {
        password: '',
        email: ''
      }
    }, 
    methods: {
      ...mapActions(["logIn"]),
      signIn() {
        this.logIn({
          email: this.email,
          password: this.password
        }).then( res => {
          if(!res.ok) {
            Swal.fire({
              title: 'username or password invalid',
              type: 'error',
            })
          } else {
            this.$router.push({name: 'home'})
          }
        })
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

