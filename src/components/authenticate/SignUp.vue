<template>
  <div class="signup">
    <h2 class="signup__title">
      SIGNUP
    </h2>
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
        label="PASSWORD"
      ></v-text-field>
    </div>
    <div class="signup__input">
      <v-text-field
        v-model="password_confirmation"
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
      <v-btn :block="true" color="#cecece" @click="register">SIGN UP</v-btn>
    </div>
    <div class="signup__link">
      <p>Already have login and password? <router-link :to="{name: 'login'}" > Sign In  </router-link></p>
    </div>
  </div>
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
          }
          if (this.password_confirmation != this.password) {
            Swal.fire({
              title: 'Password and Confirm Password Invalid',
              type: 'error',
            })
          }
          if (!validateEmail.test(this.email)) {
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
      })
    },
  }
}
</script>

<style lang="scss" scoped>
  .signup {
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
    &__link {
      margin-top: 20px;
    }
  }
</style>

