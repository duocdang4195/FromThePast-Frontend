<template>
  <div class="signup">
    <h2 class="">SIGN UP</h2>
    <div class="signup__link">
      <p>Already have login and password? <router-link :to="{name: 'login'}" > Sign In  </router-link></p>
    </div>
    <div class="flex-wrap">
     <div class="signup_form">
      <div class="signup__input">
        <v-text-field
          v-model="userName"
          label="USER NAME"
        ></v-text-field>
      </div> 
      <div class="signup__input">
        <v-text-field
          v-model="name"
          label="NAME"
        ></v-text-field>
      </div>
      <div class="signup__input">
        <v-text-field
          v-model="email"
          label="EMAIL"
        ></v-text-field>
      </div>
      <div class="signup__input">
        <v-text-field
          v-model="password"
          type="password"
          label="PASSWORD"
        ></v-text-field>
      </div>
      <div class="signup__input">
        <v-text-field
          v-model="password_confirmation"
          type="password"
          label="CONFIRM PASSWORD"
        ></v-text-field>
      </div>
      <div class="signup__input">
        <p>GENDER</p>
        <v-radio-group v-model="gender" row>
          <v-radio label="Male" value="1"></v-radio>
          <v-radio label="Female" value="2"></v-radio>
        </v-radio-group>
      </div>
      <div class="signup__submi">
        <v-btn :block="true" @click="register">SIGN UP</v-btn>
      </div>
      
    </div><!-- ./.signup_form  -->

    <div class="mr-sns-form">
      <router-link :to="{ name: 'home'}" class="mr-logo-1">
          <img src="@/assets/images/logo-dark.svg">
        </router-link>
        <router-link :to="{ name: 'home'}" class="mr-logo-2">
          <img src="@/assets/images/logo-dark.svg">
        </router-link>
    </div><!-- ./.mr-sns-form -->
  </div> <!-- ./. flex-wrap -->
  <div class="mr-agree">
    * By signing up, you agree to our <a href="">Terms of Use</a><br/> and to receive Wix emails & updates and acknowledge that <br/> you read our <a href="#"> Privacy Policy</a>.
  </div>
</div><!-- ./. signup -->
</template>

<script>
import { mapActions } from 'vuex';
import Swal from 'sweetalert2';

const validateEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default {
  data() {
    return {
      userName: '',
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      gender: '',
    }
  },
  methods: {
    ...mapActions(["signUp"]),
    validateRegister() {
      if (this.userName === '' 
          || this.name === '' 
          || this.email === '' 
          || this.password === ''
          || this.password_confirmation === '' 
          || this.gender === '') {
            Swal.fire({
              title: 'please check fill feild',
              type: 'error',
            })
          } else if(this.userName.length < 6) {
            Swal.fire({
                title: 'UserName must be less 6 character',
                type: 'error',
              })
          } else if (this.password_confirmation != this.password) {
              Swal.fire({
                title: 'Password and Confirm Password Invalid',
                type: 'error',
              })
            } else if (!validateEmail.test(this.email)) {
              Swal.fire({
                title: 'Email Invalid',
                type: 'error',
              })
          }
    },
    register() {
      this.validateRegister()
      this.signUp({
        username: this.userName,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        gender: Number(this.gender),
        name: this.name
      }).then(res => {
        if(res.ok) {
          this.$router.push({name: 'home'})
        }
      })
    },
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
  .signup {
    position: relative;
    background: #fafafa;
    max-width: 800px;
    margin: 0 auto;
    padding:0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;


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
          margin: 10px 0;

           img {
            position: relative;
            width: 100%;
           }
        }
      }
      .signup_form {
        padding-right: 60px;
        border-right: 2px solid rgba(0,0,0,0.1);

        .signup__title {
          font-size: 16px;
          margin-bottom: 10px;
          font-weight: 300;
        }

        .signup__input {
          p {
            text-align: left;
          }
          .v-input  {
            .v-input__control {
                background-color: #999;
              .v-input__slot {

                &:before {
                  border-color: rgb(224, 224, 224) !important;
                }
              }
            }
            .v-text-field__details {
              .v-messages {
                  min-height: 0;
              }
            }
          }
        }
        .signup__submi {
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
    }
    .mr-agree {
      position: relative;
      display: inline-block;
      width: 100%;
      margin-top: 40px;
      text-align: center;
      font-size: 14px;
      color: #999;
    }
  }
  
</style>

