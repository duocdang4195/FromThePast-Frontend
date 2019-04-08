<template>
  <div class="mr-home-wr">
    <video autoplay muted loop id="mr_homeVideo">
      <source src="@/assets/video/cloudSky.mp4" type="video/mp4">
    </video>
    <p class="mr_logo">
      <img src="@/assets/images/logoHome.svg" alt>
    </p>
    <div class="mr-body">
      <form action> 
        <textarea
          class="mr-input"
          v-model="userName"
          v-if="isShowEmail"
          type="text"
          maxlength="250"
          placeholder="Chào bạn đẹp trai xinh gái!!!"
          @keydown.enter.prevent="checkUser"
        ></textarea>
        <textarea
          class="mr-input"
          v-model="password"
          label="Hi Ad. Password"
          v-if="isShowPassword"
          type="text"
          maxlength="250"
          placeholder="pass"
          @keydown.enter.prevent="signIn"
        ></textarea>
        <p class="mr-author">William Sheakper</p>
      </form>
      <div class="register">
        <div class="register__field" v-if="newEmail">
          <h2>Hi, is that your email ?</h2>
          <input type="text" v-model="userName" >
        </div>
        <div class="register__field" v-if="newUserName">
          <h2>New User Name</h2>
          <input type="text" v-model="newUsername" >
        </div>
        <div class="register__field" v-if="newPassword">
          <h2>New Password</h2>
          <input type="text" v-model="password" >
        </div>
        <div class="register__field" v-if="confirmPassword">
          <h2>Confirm Password</h2>
          <input type="text" v-model="password_confirmation" >
        </div>
        <div class="register__field" v-if="genderCheck">
          <v-select
            :items="gender"
            label="Gender"
            v-model="gender"
          ></v-select>
        </div>
      </div>
    </div>
    <div class="rh-footer">
      <p>
        <span class="mr-copyright">Copyright © 2020 by From The PAST Jsc,.</span>
      </p>
    </div>
  </div>
</template>
<script>
 
import { mapActions } from 'vuex'

export default {
	data() {
    return {
      userName: '',
      password: '',
      password_confirmation: '',
      newUsername: '',
      gender: [{text: 'Male', value: 1}, {text: 'Female', value: 2}],
      isShowEmail: true,
      isShowPassword: false,
      newEmail: false,
      newUserName: false,
      newPassword: false,
      confirmPassword: false,
      genderCheck: false
    }
  },
  methods: {
    ...mapActions(["checkAccount", "logIn"]),
    checkUser() {
      this.checkAccount({
        username: this.userName,
      }).then(res => {
        if (res.ok) {
          this.isShowEmail = false
          this.isShowPassword = true
        } else {
          this.isShowEmail = false
          this.newEmail = true
        }
      })
    },
    signIn() {
      this.logIn({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>


<style lang="scss" scoped>

.register {
  width: 500px;
  margin: auto;
  text-align: left;
  &__field {
    h2 {
      color: #fff;
      margin-bottom: 10px;
    }
    input {
      border: none;
      border-bottom: 1px solid #fff;
      outline: none;
      width: 100%;
    }
  }
}
#mr_homeVideo {
  position: fixed;
  top: 0;
  left: 0;
}
.mr-home-wr {
  width: 100%;
  position: static;
  top: 0px;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
}
.mr-mask-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.3);
}
.mr-body {
  position: absolute;
  width: 500px;
  height: 355px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 10;
  text-align: left;
  color: #fff;
  line-height: 1;
}
.mr-body p a {
  color: #fff;
}
.mr-body .mr-linkList {
  font-size: 23px;
  text-transform: uppercase;
}
.mr-body .mr-linkList a {
  color: #fff;
  font-weight: bold;
  text-transform: capitalize;
  font-size: 20px;
}
.mr_logo {
  position: absolute;
  margin-top: 30px;
  margin-left: 30px;
  z-index: 9999;
}
.mr_logo img {
  width: 175px;
}
.mr_logo a {
  font-family: "Oswald", sans-serif;
  color: #fff;
  font-weight: bold;
}
.mr-body .mr-url {
  text-align: right;
  font-size: 25px;
  text-transform: uppercase;
  color: #fff;
}
.mr-body form {
  position: relative;
  margin-top: 30px;
}
.mr-body form .mr-input {
  position: relative;
  display: inline-block;
  width: 200%;
  height: 130px;
  padding: 7px;
  margin-left: -50%;
  font-size: 30px;
  border: 0;
  font-weight: 300;
  background-color: transparent;
  color: #eaeaea;
  font-family: "Dancing Script", cursive;
  text-align: right;
  resize: none;
}
.mr-body form .mr-input:focus {
  outline: none;
}
.mr-body form .mr-input::placeholder {
  color: #fafafa;
  font-weight: 200;
  font-size: 30px;
}
.mr-body form .mr-input::-webkit-input-placeholder {
  color: #fafafa;
  font-weight: 200;
  font-size: 30px;
}
.mr-body form .mr-input::-moz-placeholder {
  color: #fafafa;
  font-weight: 200;
  font-size: 30px;
}
.mr-body form .mr-input::-ms-input-placeholder {
  color: #fafafa;
  font-weight: 200;
  font-size: 30px;
}
.mr-body form .mr-author {
  position: relative;
  display: inline-block;
  width: 200%;
  margin-left: -50%;
  text-align: right;
  font-size: 20px;
  font-style: italic;
}
.mr-body form .rh-heart-icon,
.mr-body form .rh-infinity-icon {
  position: relative;
  display: inline-block;
  bottom: -2px;
}
.mr-body form button.mr-submit {
  position: absolute;
  display: none;
  width: 45px;
  height: 43px;
  top: 1px;
  right: 1px;
  background-color: transparent;
  font-size: 20px;
  border: 0;
  letter-spacing: 1px;
  cursor: pointer;
}
.mr-body form button.mr-submit .mr-submit-logo {
  position: relative;
  width: 20px;
  animation: rotate 5s linear infinite;
}
.rh-footer {
  position: fixed;
  width: 100%;
  bottom: 7px;
  z-index: 10;
  color: #fff;
  text-align: center;
  font-size: 15px;
  line-height: 1;
}
.rh-footer a {
  margin: 0 2px;
  color: #fff;
  font-size: 20px;
}
.rh-footer p {
  position: relative;
  display: inline-block;
  width: 100%;
  margin: 20px 0 10px 0;
  font-size: 17px;
  text-align: center;
  font-weight: 200;
}
.rh-footer p .mr-copyright {
  position: relative;
  display: inline-block;
  margin-top: 4px;
  font-family: "Quicksand", sans-serif;
  font-weight: 300;
}

@keyframes reverse-rotate {
  to {
    transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
    -moz-transform: rotate(-360deg);
    -o-transform: rotate(-360deg);
  }
}
@media only screen and (max-width: 768px) {
  .mr-body .mr_logo img {
    width: 80%;
    min-width: 250px;
    max-width: 400px;
  }
  .mr-body {
    width: 100%;
    padding: 20px;
    text-align: center;
  }
  .mr-body form {
    position: relative;
    display: inline-block;
    width: 80%;
    min-width: 250px;
    max-width: 400px;
  }
  .mr-body form .mr-input {
    font-size: 16px;
  }
  .rh-footer p .mr-copyright {
    font-size: 10px;
  }
  .mr-body .mr-linkList a {
    letter-spacing: 1px;
    margin: 0 5px;
  }
}
</style>