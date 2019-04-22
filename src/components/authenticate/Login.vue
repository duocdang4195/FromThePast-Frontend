<template>
  <div class="login">
    <h2 class="login__title">
      LOGIN
    </h2>
    <div class="login__link">
      <p>Don't have an account? <router-link :to="{name: 'signup'}" > Sign Up Now! </router-link></p>
    </div>
    <div class="flex-wrap">
      <div class="login_form">

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
        </div><!-- ./.login__btn  -->


      </div><!-- ./.login_form -->

      <div class="mr-sns-form">
        <div class="mr-fb">
          <span class="mr-sns-icon"><i data-v-715ff4e2="" class="fab fa-facebook-f"></i></span>
          <span class="mr-label"> Continue with Facebook</span>
        </div><!-- ./.mr-fb -->
        <div class="mr-gg">
          <span class="mr-sns-icon"><img  src="../../assets/images/icon-google.svg" alt="" class=""></span>
          <span class="mr-label"> Continue with Google</span>
        </div><!-- ./.mr-gg -->
      </div><!-- ./.mr-sns-form -->
    </div><!-- ./. flex-wrap  -->
  </div><!-- ./.login  -->
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
    margin: 0 auto;
    padding: 30px 60px;
    text-align: center;
    border-radius: 5px;
     h2 {
      width: 100%;
      text-align: center;
      font-size: 35px;
      font-weight:300;
      margin-bottom: 5px;
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
        .mr-fb {
          background-color: #29487d;
          color: #fff;

          .mr-sns-icon {
            color: #29487d;
            font-size:25px;
          }
        }
        .mr-gg {
          background-color: rgb(66, 133, 244);
          color: #fff;
          .mr-sns-icon {
            background-color: #fff;
            img {
              position: relative;
              top: 6px;
              width: 25px;
              height: 25px;
            }
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

