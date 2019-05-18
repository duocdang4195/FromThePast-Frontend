<template>
  <div class="login">
    <h2 class="login__title">
      FORGOT PASSWORD
    </h2>
    <div class="login__link">
      <p>Please enter your register email to reset password</p>
    </div>
    <div class="flex-wrap">
      <div class="login_form">     
        <div class="signup__input">
          <v-text-field
            v-model="email"
            label="Your Email"
            color="rgba(0,0,0,0.9)"
            border-color="rgba(0,0,0,0.5)"
            @keydown.enter.prevent="getCode"
          ></v-text-field>
        </div>

        <div class="login__btn">
          <v-btn @click="getCode" :block="true" >Send</v-btn>
        </div><!-- ./.login__btn  -->


      </div><!-- ./.login_form -->

      <div class="mr-sns-form">
        <router-link :to="{ name: 'home'}" class="mr-logo-1">
          <img src="@/assets/images/pasness_logo_no_border.svg">
        </router-link>
        <router-link :to="{ name: 'home'}" class="mr-logo-2">
          <img src="@/assets/images/logo-dark.svg">
        </router-link>
        
      </div><!-- ./.mr-sns-form -->
    </div><!-- ./. flex-wrap  -->
  </div><!-- ./.login  -->
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      email: ''
    }
  },
  methods: {
    ...mapActions(['forgotPassword']),
    getCode() {
      this.forgotPassword({email: this.email}).then(res => {
        if(res.ok) {
          alert('sdas')
        }
      })
    }
  }
}
</script>


<style lang="scss" scoped>
   
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
    background: #FAFAFA;
    width: 800px;
    margin: 100px auto;
    padding: 30px 60px;
    text-align: center;
    border-radius: 5px;
     h2 {
      width: 100%;
      text-align: center;
      font-size: 35px;
      font-weight:300;
      margin-bottom: 5px;
      text-transform: uppercase;
    }

    &__link {
      margin-bottom: 35px;
      text-align:center;
      font-size:16px;
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
       margin-bottom: 5px;
       margin-top: 20px;
      .v-btn--block {
         margin: 0;
         @extend  %default-button ;
         border-radius: 0;
          height: 45px;
         font-size: 16px;
         font-weight: 300;

         &:hover {
          background-color: #fff !important;
         }
         &:before {
          display: none !important;
         }
      }
     
    }
  }
   .flex-wrap {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;

      > div {
        flex: 1 0 50%;
        width: 50%;
        flex-shrink: 1;
        -webkit-flex-shrink: 1;
        box-sizing: border-box;

      }
      .mr-sns-form {
        padding: 50px;
        > div {
          position: relative;
          display: inline-block;
          margin: 5px 0;
          width: 100%;
          height: 45px;
          line-height: 45px;
          text-align:center;
          font-size:16px;
          cursor: pointer;

          .mr-sns-icon {
            position: relative;
            display: inline-block;
            width: 42px;
            height: 40px;
            top: 2.5px;
            left: 2.5px;
            line-height:40px;
            float: left;  
            background-color: #fff;
            text-align:center;

          }
        }
        a {
          position: relative;
          display: inline-block;
          margin: 5px 0;

           img {
            position: relative;
            width: 100%;
           }
        }

        .mr-logo-2 {
          text-align: right;
          img {
            width: 50%;
          }
        }
      }
      .login_form {
        padding-right: 60px;
        border-right: 2px solid rgba(0,0,0,0.1);

        .login__title {
          font-size: 16px;
          margin-bottom: 10px;
          font-weight: 300;
        }
      }
    }
</style>

