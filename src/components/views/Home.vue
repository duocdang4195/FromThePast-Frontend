<template>
  <div class="mr-home-wr">
    <video autoplay muted loop id="mr_homeVideo">
      <source src="@/assets/video/cloudSky.mp4" type="video/mp4">
    </video>
    <p class="mr_logo">
      <router-link :to="{ name: 'home_root'}">
        <img src="@/assets/images/logoHome.svg" alt>
      </router-link>
    </p>
    <div class="mr-body">
      <form action> 
        <textarea
          class="mr-input"
          v-model="email"
          v-if="isShowEmail"
          type="text"
          maxlength="250"
          placeholder=" Chào Anh!! Tâm Đẹp Trai =)))"
          @keydown.enter.prevent="checkUser"
        ></textarea>
        <textarea
          class="mr-input"
          v-if="showUserName"
          v-model="email"
          type="text"
          @keydown.enter.prevent="saveQuotations"
          placeholder="your quotations"
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
        <div class="like-coment" v-show="isShowEmail">
          <p class="like-coment__user"> {{ accessToken ? 'ADMIN' : 'HIDDEN' }} </p>
          <icon
            class="like-coment__icon--like" name="heart" 
          />
          <icon class="like-coment__icon--comments" name="comments" />
        </div>
        <div class="author-content" v-show="!accessToken && ( email !== '' )">
          <router-link 
            class="btn btn-default rh-author-reg" 
            v-tooltip="'Bạn có thể lưu thành tên tác giá nếu đăng ký'" tag="button"
            :to="{name: 'signup'}"
          >
						Author
					</router-link>
        </div>
      </form>
      <div class="register">
        <div class="register__field" v-if="newEmail">
          <h2>Hi, is that your email ?</h2>
          <input @keydown.enter.prevent="showNewUserName" type="text" v-model="email" >
        </div>
        <div class="register__field" v-if="newUserName">
          <h2>New User Name</h2>
          <input @keydown.enter.prevent="showNewPassword" type="text" v-model="newUsername" >
        </div>
        <div class="register__field" v-if="newPassword">
          <h2>New Password</h2>
          <input @keydown.enter.prevent="showConfirmPassword" type="password" v-model="newPasswordText" >
        </div>
        <div class="register__field" v-if="confirmPassword">
          <h2>Confirm Password</h2>
          <input @keydown.enter.prevent="registerAccount" type="password" v-model="password_confirmation" >
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
 
import { mapActions, mapGetters, mapMutations } from 'vuex';
import Swal from 'sweetalert2';
import { setInterval } from 'timers';

  const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default {
	data() {
    return {
      name: 'Tâm Đẹp Trai',
      userName: '',
      password: '',
      email: '',
      newPasswordText: '',
      password_confirmation: '',
      newUsername: '',
      gender: '0',
      quotations: [],
      quotationsStringRandom: '',
      isShowEmail: true,
      isShowPassword: false,
      newEmail: false,
      newUserName: false,
      newPassword: false,
      confirmPassword: false,
      showUserName: false,
      isShowAuhor: false, 
      isLike: false
    }
  },
  created() {
    this.getQuotations()
    console.log('accessToken', this.accessToken)
  },
  computed: {
    ...mapGetters(['quotationRandom', 'accessToken']),
  },
  methods: {
    ...mapActions(["checkAccount", "logIn", "signUp", "createQuotations", "getQuotations"]),
    like() {
      this.isLike = !this.islike
    },
    // async randomQuotations() {
    //   await this.getQuotations()
    //   let oldString = this.quotationRandom
    //   let newString = '';
    //   let i = 0,
    //       l = oldString.length;
    //   let quotationsRandom = setInterval(
    //     function() {
    //       newString = oldString.substr(0, i);
    //       i++;
    //       if (i === l) {
    //         clearInterval(quotationsRandom);
    //       }
    //     },
    //     80
    //   );
    // },
    checkUser() {
      if(this.email === '') {
        Swal.fire({
          title: 'Field is required',
          type: 'error',
        })
      } else {
        this.checkAccount({
          email: this.email,
        }).then(res => {
          if (res.ok) {
            this.isShowEmail = false
            this.isShowPassword = true
          } else {
            this.isShowEmail = false
            this.newEmail = true
          }
        })
      }
    },
    showNewUserName() {
      if(validateEmail.test(this.email.toLowerCase())) {
        this.newEmail = false,
        this.newUserName = true
      } else {
        Swal.fire({
          title: 'Email invalid',
          type: 'error',
        })
      }
    },
    showNewPassword() {
      if(this.newUsername === '' || this.newUsername.length < 6) {
        Swal.fire({
          title: 'Please Fill User Name And Must Be At Least 6 Characters',
          type: 'error',
        })
      } else {
        this.newUserName = false,
        this.newPassword = true
      }
    },
    showConfirmPassword() {
      if(this.newPasswordText === '' || this.newPasswordText.length < 6) {
        Swal.fire({
          title: 'Please Fill Password And The Password Must Be At Least 6 Characters',
          type: 'error',
        })
      } else {
        this.newPassword = false,
        this.confirmPassword = true
      }
    },
    registerAccount() {
      if (this.password_confirmation != this.newPasswordText) {
        Swal.fire({
          title: 'Pasword And Confirm Passowrd Invalid',
          type: 'error',
        })
      } else {
        this.confirmPassword = false
        this.signUp({
          username: this.newUsername,
          email: this.email,
          password: this.newPasswordText,
          password_confirmation: this.password_confirmation,
          gender: Number(this.gender),
          name: this.name
        }).then(res => {
          if(res.ok) {
            this.saveQuotations()
            this.showUserName = true
          }
        })
      }
    },
    saveQuotations() {
      if(this.email === '' ) {
        Swal.fire({
          title: 'Quotations is required',
          type: 'error',
        })
      } else {
          this.createQuotations({
          content: this.email
        }).then(res => {
          if(res.ok) {
            this.email = ''
          }
        })
      }
    },
    signIn() {
      this.logIn({
        email: this.email,
        password: this.password
      }).then( res => {
        if(res.ok) {
          this.$router.push({ name: 'home'})
        }
      })
    },
  }
}
</script>


<style lang="scss" scoped>
.like-coment {
  position:relative;
  display: flex;
  width: 100%;
  align-items: flex-end;
  text-align: right;
  justify-content: flex-end;
  
  .like-coment__user {
    position:relative;
    display: inline-block;
    width: fit-content;
    margin: 0;
    margin-right: 10px;
    a {
      text-decoration: none;
    }
  }
  .like-coment__icon--like {
    margin-right: 10px;
  }
}

.register {
  width: 1000px;
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
    .v-label {
      .theme--light {
        color: #fff;
      }
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
  width: 1000px;
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
  width: 100%;
  height: 130px;
  padding: 7px;
  margin-left: 0;
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
  cursor: pointer;
}
.mr-body form .mr-author a {
  position: relative;
  text-decoration: none;
  font-size: 14px;
  font-weight: 300;
  text-transform: capitalize;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}
.mr-body form .mr-author a:after {
  content:'You can be save as author if registring here';
  position: absolute;
  display: inline-block;
  width: 0px;
  height: fit-content;
  padding: 7px;
  background-color: rgba(255,255,255,0.5);
  border-radius: 1px;
  top: 20px;
  right: 0;
  text-align: center;
  font-size: 12px;
  line-height: 1.4;
  font-style: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  opacity:0;
}
.mr-body form .mr-author a:hover  a:after  {
  width: 200px;
  opacity:1;
  transition:opacity linear 0.5s;
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