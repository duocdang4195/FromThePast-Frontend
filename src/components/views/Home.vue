<template>
  <div class="home-wr">
    <video autoplay muted loop class="background">
      <source src="@/assets/video/cloudSky.mp4" type="video/mp4">
    </video>
    <div class="content">
      <div class="content__logo">
        <router-link :to="{ name: 'home_root'}">
          <img src="@/assets/images/logoHome.svg" alt>
        </router-link>
      </div>
      <div class="content__input--quotaion" v-if="checkUser">
        <textarea
          cols="80"
          autofocus
          v-model="quotaion"
          @keydown.enter.prevent="checkUserProfile"
        >
        </textarea>
      </div> <!-- show Quotations -->
      <div class="content__input--user">
        <div class="content__input--user--check" v-if="isUser">
          <p>Password</p>
          <input
            autofocus
          />
        </div> <!-- show Password -->
        <div class="content__input--user--check" v-if="notUser">
          <p>HI, IS THAT YOUR EMAIL ?</p>
          <input
            autofocus
            v-model="email"
            @keydown.enter.prevent="fillEmail"
          />
        </div> <!-- show Email Signup -->
        <div class="content__input--user--check" v-if="signupUserName">
          <p>HI, IS THAT YOUR USERNAME ?</p>
          <input
            autofocus
            v-model="userName"
            @keydown.enter.prevent="fillUserName"
          />
        </div> <!-- show User Name -->
        <div class="content__input--user--check" v-if="signupPassword">
          <p>SET YOUR PASSWORD</p>
          <input
            autofocus
            v-model="password"
            @keydown.enter.prevent="fillPassword"
          />
        </div> <!-- show User Password -->
        <div class="content__input--user--check" v-if="signupConfirmPassword">
          <p>RE-TYPE YOUR PASSWORD</p>
          <input
            autofocus
            v-model="confirmPassword"
            @keydown.enter.prevent="registerAccount"
          />
        </div> <!-- show User Confirm Password -->
      </div>
      <div class="content__actions content__author" v-if="quotaion && !isAuthenticated">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <p dark v-on="on" @click="toSignUp" >Author</p>
          </template>
          <span>Bạn có thể lưu thành tên tác giá nếu đăng ký</span>
        </v-tooltip>
      </div>
      <div class="content__actions" v-if="quotaion && isAuthenticated">
        <span>admin</span>
        <div class=" actions content__actions--like">
          <icon name="heart" />
        </div>
        <div class="actions content__actions--comments">
          <icon name="comments" />
          <textarea
            class="content__actions--comments--input"
            placeholder="Enter your idea here"
            cols="80"
            autofocus
          >
          </textarea>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import Swal from "sweetalert2";
import { setInterval } from "timers";

const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default {
  data() {
    return {
      name: 'Taam Dep trai',
      quotaion: '',
      email: '',
      userName: '',
      password: '',
      confirmPassword: '',
      gender: '0',
      checkUser: true,
      isUser: false,
      notUser: false,
      signupUserName: false,
      signupPassword: false,
      signupConfirmPassword: false
    };
  },
  created() {
    this.getQuotations();
  },
  computed: {
    ...mapGetters(["quotationRandom", "isAuthenticated"])
  },
  methods: {
    ...mapActions([
      "checkAccount",
      "logIn",
      "signUp",
      "createQuotations",
      "getQuotations"
    ]),
    toSignUp() {
      this.$router.push({name: 'signup'})
    },
    checkUserProfile() {
      this.checkAccount({email: this.quotaion}).then(res => {
        if(res.ok) {
          this.quotaion = ''
          this.checkUser = false
          this.isUser = true
        } else {
          this.quotaion = ''
          this.checkUser = false
          this.notUser = true
        }
      })
    },
    fillEmail() {
      if(validateEmail.test(this.email.toLowerCase())) {
        this.notUser = false
        this.signupUserName = true
      } else {
        Swal.fire({
          title: 'Email invalid',
          type: 'error',
        })
      }
    },
    fillUserName() {
      if(this.userName === '' || this.userName.length < 6) {
        Swal.fire({
          title: 'Please Fill User Name And Must Be At Least 6 Characters',
          type: 'error',
        })
      } else {
        this.signupUserName = false
        this.signupPassword = true
      }
    },
    fillPassword() {
      if(this.password === '' || this.password.length < 6) {
        Swal.fire({
          title: 'Please Fill Password And Must Be At Least 6 Characters',
          type: 'error',
        })
      } else {
        this.signupPassword = false
        this.signupConfirmPassword = true
      }
    },
    registerAccount() {
      if (this.password != this.confirmPassword) {
        Swal.fire({
          title: 'Pasword And Confirm Passowrd Invalid',
          type: 'error',
        })
      } else {
        this.signupConfirmPassword = false
        this.signUp({
          name: this.name,
          username: this.userName,
          email: this.email,
          password: this.password,
          password_confirmation: this.confirmPassword,
          gender: Number(this.gender),
        }).then(res => {
          if(res.ok) {
            Swal.fire({
              title: 'Signup Success',
              type: 'success',
            })
          }
        })
      }
    }
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
  }
};
</script>


<style lang="scss" scoped>
  .home-wr {
    width: 100%;
    height: 100%;
    position: relative;
    .background {
      position: fixed;
      right: 0; 
      bottom: 0;
      min-width: 100%; 
      min-height: 100%;
      width: auto; 
      height: auto;
    }
    .content {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      &__logo {
        width: 175px;
        display: inline-block;
        margin: 30px 0 0 30px;
        img {
          width: 100%;
          height: auto;
        }
      }
      &__input--quotaion {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 100px;
        text-align-last: right;
        textarea {
          width: 95%;
          font-size: 30px;
          color: #eaeaea;
          font-family: "Dancing Script", cursive;
          text-align: right;
          outline: none;
          resize: none;
        }
      }
      &__input--user {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 80%;
        text-align-last: center;
        transform: translateY(-50%);
        transform: translateX(-50%);
        .content__input--user--check {
          width: 60%;
          margin: auto;
          text-align-last: left;
          p {
            color: #fff;
            font-size: 15px;
            line-height: 1.2;
            margin: 0;
            font-family: "Montserrat", Helvetica, sans-serif;
            text-transform: uppercase;
          }
          input {
            width: 100%;
            font-size: 24px;
            color: #eaeaea;
            padding: 13px 0;
            border-bottom: 1px solid #fff;
            font-family: "IBM Plex Sans", sans-serif;
            text-align: left;
            outline: none;
            resize: none;
          }
        }
      }
      &__author {
        p {
          width: auto;
          display: inline-block;
          font-family: "Montserrat", Helvetica, sans-serif;
          text-transform: uppercase;
          font-size: 12px;
          &:hover {
            font-weight: bold;
            cursor: pointer;
            scale: 1.2;
          }
        }
      }
      &__actions{
        position: absolute;
        top: 55%;
        transform: translateY(-50%);
        right: 100px;
        color: #fff;
        margin-top: 50px;
        width: 100%;
        text-align: right;
        span {
          margin-right: 5px;
        }
        .actions {
          display: inline-block;
        }
        .content__actions--like {
          margin-right: 5px;
        }
        .content__actions--comments {
        }
        .content__actions--comments--input {
          display: none;
          position: absolute;
          top: 25px;
          right: 0;
          height: 100px;
          background-color: rgba(255, 255, 255, 0.5);
          border: 1px solid #dadada;
          padding: 10px;
          color: #454545;
          font-size: 16px;
          line-height: 1.5;
          text-align:left;
          outline: none;
          resize: none;
        }
      }
    }
  }
</style>