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
      <v-btn @click="signIn" :block="true" >LOGIN</v-btn>
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
    %mr-heading {
      position: relative;
      display: inline-block;
      width: 100%;
      font-family: 'Montserrat', sans-serif;
      font-weight: 300;
      color: #3e3e3e;
      text-transform: uppercase;
      font-size: 17px;
      letter-spacing: 2px;
      margin-bottom: 60px;

      &:before {
        content:"";
        position: absolute;
        display: block;
        width: 30px;
        height: 2px;
        left: 0;
        right: 0;
        margin: auto;
        bottom: -10px;
        background-color: #3e3e3e;
      }

      &:after {
        content:"";
        position: absolute;
        display: block;
        width: 40px;
        height: 1px;
        left: 0;
        right: 0;
        margin: auto;
        bottom: -17px;
        border-bottom:1px solid #3e3e3e;
      }
    }
    %default-button {
    margin: 0 10px;
    background-color:#212121 !important;
    border: 1px solid #212121;
    color: #fff;
    text-transform:uppercase;
    font-size:12px;
    letter-spacing:1px;
    font-family: 'Montserrat', sans-serif;
    transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    &:hover {
            background-color: #fff;
            color: #212121;
        }
    }
  .login {
    background: #fff;
    width: 500px;
    margin: 0 auto;
    padding: 30px 60px;
    text-align: center;
    border-radius: 5px;
    &__title {
      @extend  %mr-heading;
    }
    &__input {
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
      p {
        text-align: left;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
      }
    }
    label {
      font-family: 'Montserrat', sans-serif;
      font-weight: 300;
    }
    &__btn {
      margin-bottom: 20px;
         margin-top: 20px;
      .v-btn--block {
         margin: 0;
         @extend  %default-button ;
         border-radius: 0;

         &:hover {
          background-color: #fff !important;
         }
         &:before {
          display: none !important;
         }
      }
     
    }
  }
</style>

