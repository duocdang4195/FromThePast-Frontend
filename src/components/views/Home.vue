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
      <div class="content__input--quotaion" v-if="checkUser && !isAuthenticated && createUser">
        <textarea
          cols="80"
          autofocus
          v-model="checkAuthen"
          @keydown.enter.prevent="checkUserProfile"
        ></textarea>
      </div>
      <!-- show Quotations -->
      <div
        @click="clickCreateQuotation"
        class="content__input--quotaion strick-quotation"
        v-if="clickPost"
      >
        <vue-typer
          :text="quotationRandom.content"
          :repeat="0"
          :shuffle="false"
          initial-action="typing"
          :pre-type-delay="70"
          :type-delay="70"
          :pre-erase-delay="0"
          :erase-delay="250"
          erase-style="select-all"
          :erase-on-complete="false"
          caret-animation="blink"
        ></vue-typer>
      </div>
      <div class="content__input--quotaion" v-if="isAuthenticated">
        <textarea
          v-show="createEvent"
          cols="80"
          autofocus
          v-model="quotaion"
          @keydown.enter.prevent="postQuotations"
        ></textarea>
      </div>
      <!-- show Quotations -->
      <div class="content__input--user">
        <div class="content__input--user--check" v-if="isUser">
          <p>Password</p>
          <input autofocus>
        </div>
        <!-- show Password -->
        <div class="content__input--user--check" v-if="notUser">
          <p>HI, IS THAT YOUR EMAIL ?</p>
          <input autofocus v-model="email" @keydown.enter.prevent="fillEmail">
        </div>
        <!-- show Email Signup -->
        <div class="content__input--user--check" v-if="signupUserName">
          <p>HI, IS THAT YOUR USERNAME ?</p>
          <input autofocus v-model="userName" @keydown.enter.prevent="fillUserName">
        </div>
        <!-- show User Name -->
        <div class="content__input--user--check" v-if="signupPassword">
          <p>SET YOUR PASSWORD</p>
          <input autofocus v-model="password" @keydown.enter.prevent="fillPassword">
        </div>
        <!-- show User Password -->
        <div class="content__input--user--check" v-if="signupConfirmPassword">
          <p>RE-TYPE YOUR PASSWORD</p>
          <input autofocus v-model="confirmPassword" @keydown.enter.prevent="registerAccount">
        </div>
        <!-- show User Confirm Password -->
      </div>
      <div class="content__actions content__author" v-if="quotaion.length > 0 && !isAuthenticated">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <p dark v-on="on" @click="toSignUp">Author</p>
          </template>
          <span>Bạn có thể lưu thành tên tác giá nếu đăng ký</span>
        </v-tooltip>
      </div>
      <div class="content__actions" v-if="isAuthenticated && getProfile">
        <span>{{!getProfile.user.name ? getProfile.user.name : getProfile.user.email}}</span>
        <div :class="classLike">
          <span @click="likeStt">
            <icon name="heart"/>
          </span>
        </div>
        <div :class="classComment">
          <span @click="showComment">
            <icon name="comments"/>
          </span>
          <textarea
            v-if="isHideComment"
            v-model="comment"
            @keydown.enter.prevent="commentStt"
            class="content__actions--comments--input"
            placeholder="Enter your idea here"
            cols="80"
            autofocus
          ></textarea>
        </div>
      </div>
      <div class="content__actions" v-if="!isAuthenticated && quotaion.length == 0">
        <span>Hidden</span>
        <div :class="classLike">
          <span @click="toSignUp">
            <icon name="heart"/>
          </span>
        </div>
        <div :class="classComment">
          <span @click="showComment">
            <icon name="comments"/>
          </span>
          <textarea
            @click="toSignUp"
            v-if="isHideComment"
            class="content__actions--comments--input"
            placeholder="Enter your idea here"
            cols="80"
            autofocus
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import classnames from "classnames";
import Swal from "sweetalert2";
import { setInterval } from "timers";

const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default {
  data() {
    return {
      name: "Taam Dep trai",
      quotaion: "",
      checkAuthen: "",
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
      comment: "",
      gender: "0",
      checkUser: true,
      isUser: false,
      notUser: false,
      signupUserName: false,
      signupPassword: false,
      signupConfirmPassword: false,
      isHideComment: false,
      isLike: false,
      isComment: false,
      clickPost: true,
      createEvent: false,
      createUser: false
    };
  },
  created() {
    this.getQuotations();
    this.getProfileUser();
  },
  computed: {
    ...mapGetters(["quotationRandom", "isAuthenticated", "getProfile"]),
    classLike() {
      return classnames("actions", "content__actions--like", {
        liked: this.isLike === true
      });
    },
    classComment() {
      return classnames("actions", "content__actions--comments", {
        commented: this.isComment === true
      });
    }
    // randomQuotations() {
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
    //   return quotationsRandom;
    // },
  },
  methods: {
    ...mapActions([
      "checkAccount",
      "logIn",
      "signUp",
      "createQuotations",
      "getQuotations",
      "likeQuotations",
      "unLikeQuotations",
      "commentQuotations",
      "getProfileUser"
    ]),
    clickCreateQuotation() {
      this.clickPost = false;
      this.createEvent = true;
      this.createUser = true;
    },
    postQuotations() {
      this.createQuotations({ content: this.quotaion }).then(res => {
        if (res.ok) {
          this.getQuotations();
          this.quotaion = "";
          this.clickPost = true;
          this.createEvent = false;
        }
      });
    },
    toSignUp() {
      this.$router.push({ name: "signup" });
    },
    checkUserProfile() {
      if (this.checkAuthen.indexOf(" ") >= 0) {
        this.createQuotations({ content: this.checkAuthen }).then(res => {
          if (res.ok) {
            this.getQuotations();
            this.checkAuthen = "";
            this.clickPost = true;
            this.createUser = false;
          }
        });
      } else {
        this.checkAccount({ email: this.checkAuthen }).then(res => {
          if (res.ok) {
            this.checkAuthen = "";
            this.checkUser = false;
            this.isUser = true;
          } else {
            this.checkAuthen = "";
            this.checkUser = false;
            this.notUser = true;
          }
        });
      }
    },
    fillEmail() {
      if (validateEmail.test(this.email.toLowerCase())) {
        this.notUser = false;
        this.signupUserName = true;
      } else {
        Swal.fire({
          title: "Email invalid",
          type: "error"
        });
      }
    },
    fillUserName() {
      if (this.userName === "" || this.userName.length < 6) {
        Swal.fire({
          title: "Please Fill User Name And Must Be At Least 6 Characters",
          type: "error"
        });
      } else {
        this.signupUserName = false;
        this.signupPassword = true;
      }
    },
    fillPassword() {
      if (this.password === "" || this.password.length < 6) {
        Swal.fire({
          title: "Please Fill Password And Must Be At Least 6 Characters",
          type: "error"
        });
      } else {
        this.signupPassword = false;
        this.signupConfirmPassword = true;
      }
    },
    registerAccount() {
      if (this.password != this.confirmPassword) {
        Swal.fire({
          title: "Pasword And Confirm Passowrd Invalid",
          type: "error"
        });
      } else {
        this.signupConfirmPassword = false;
        this.signUp({
          name: this.name,
          username: this.userName,
          email: this.email,
          password: this.password,
          password_confirmation: this.confirmPassword,
          gender: Number(this.gender)
        }).then(res => {
          if (res.ok) {
            Swal.fire({
              title: "Signup Success",
              type: "success"
            });
          }
        });
      }
    },
    commentStt() {
      this.commentQuotations({
        quotation_id: this.quotationRandom.id,
        content: this.comment
      }).then(res => {
        if (res.ok) {
          this.comment = "";
        }
      });
    },
    likeStt() {
      this.isLike = !this.isLike;
      if (this.isLike) {
        this.likeQuotations({ quotation_id: this.quotationRandom.id });
      } else {
        this.unLikeQuotations({ id: this.quotationRandom.id });
      }
    },
    showComment() {
      this.isComment = !this.isComment;
      this.isHideComment = !this.isHideComment;
    }
  }
};
</script>


<style lang="scss" scoped>
.vue-typer .custom.char.typed {
  color: #fff;
}
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
    .strick-quotation {
      width: 100%;
      .vue-typer * {
        color: #fff !important;
      }
      .vue-typer {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        text-align-last: right;
        font-size: 30px;
        font-family: "Dancing Script", cursive;
        .left {
          color: #fff;
          span {
            color: #fff;
          }
        }
      }
    }
    &__input--quotaion {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 100px;
      text-align-last: right;
      span.vue-typer {
        cursor: pointer;
      }
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
    &__actions {
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
        svg {
          cursor: pointer;
        }
      }
      .liked,
      .commented {
        svg {
          color: red;
        }
      }
      .content__actions--comments {
        svg {
          cursor: pointer;
        }
      }

      .content__actions--comments--input {
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
        text-align: left;
        outline: none;
        resize: none;
      }
    }
  }
}
</style>