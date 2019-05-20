<template>
  <div class="home-wr">
    <video autoplay muted loop class="background">
      <source src="@/assets/video/cloudSky.mp4" type="video/mp4">
    </video>
    <div class="content">
      <div class="content__logo">
        <router-link :to="{ name: 'home_root'}">
          <img :src="getBackgound.logo_white" alt>
        </router-link>
      </div>
      <div class="content__input--quotaion" v-if="!isAuthenticated">
        <textarea
          v-if="showRandom"
          cols="80"
          autofocus
          v-model="checkAuthen"
          ref="check"
          :placeholder="showTypeText"
          @keydown.enter.prevent="checkUserProfile"
        ></textarea>
      </div>
      <!-- show Quotations -->
      <!-- <div
        @click="clickCreateQuotation"
        class="content__input--quotaion strick-quotation"
        v-if="clickPost"
      >
        <vue-typer
          :text="showTypeText"
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
      </div> -->
      <div class="content__input--quotaion" v-if="isAuthenticated">
        <textarea
          cols="80"
          autofocus
          :placeholder="showTypeText"
          v-model="quotaion"
          ref="quotation"
          @keydown.enter.prevent="postQuotations"
        ></textarea>
      </div>
      <!-- show Quotations -->
      <div class="content__input--user">
        <div class="content__input--user--check" v-if="isUser">
          <p>Password</p>
          <input ref="password" @keydown.enter.prevent="signIn" type="password" v-model="passWordUser" autofocus>
        </div>
        <!-- show Password -->
        <div class="content__input--user--check" v-if="notUser">
          <p>HI, What is your email ?</p>
          <input ref="email" autofocus v-model="email" @keydown.enter.prevent="fillEmail">
        </div>
        <!-- show Email Signup -->
        <div class="content__input--user--check" v-if="signupUserName">
          <p>HI, What will be your username?</p>
          <input ref="username" autofocus v-model="userName" @keydown.enter.prevent="fillUserName">
        </div>
        <!-- show User Name -->
        <div class="content__input--user--check" v-if="signupPassword">
          <p>SET YOUR PASSWORD</p>
          <input ref="newPassword" type="password" autofocus v-model="password" @keydown.enter.prevent="fillPassword">
        </div>
        <!-- show User Password -->
        <div class="content__input--user--check" v-if="signupConfirmPassword">
          <p>RE-TYPE YOUR PASSWORD</p>
          <input ref="confirmPass" type="password" autofocus v-model="confirmPassword" @keydown.enter.prevent="registerAccount">
        </div>
        <!-- show User Confirm Password -->
      </div>
      <div class="content__actions content__author" v-if="checkAuthen.length > 0 && !isAuthenticated">
        <v-tooltip v-if="showAuthor" top>
          <template v-slot:activator="{ on }">
            <p dark v-on="on" @click="toSignUp">Author</p>
          </template>
          <span>Bạn có thể lưu thành tên tác giá nếu đăng ký</span>
        </v-tooltip>
      </div>
      <div class="content__actions content__author" v-if="quotaion.length > 0 && isAuthenticated">
          <p>{{ getProfile.user.username }}</p>
      </div>
      <div class="content__actions" v-if="isAuthenticated && getProfile && quotaion.length == 0">
        <span v-if="author"><!-- {{getProfile.user.username ? getProfile.user.username : getProfile.user.email}} -->
          <!-- {{quotationRandom.user ? (quotationRandom.user.name ? quotationRandom.user.name : quotationRandom.user.email) : 'Paser'}}           -->
          {{author ? (author.name ? author.name : 'Paser') : 'Paser'}}
        </span>
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
      <div class="content__actions" v-show="notAuthen">
        <span v-if="!isAuthenticated && checkAuthen.length == 0">
          <span v-if="author">{{author ? (author.name ? author.name : 'Paser') : 'Paser'}}</span>
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
        </span>
      </div>
    </div>
    <div class="search-home">
      <SearchInput />
    </div>
    <div class="footer">
      Copyright © 2020 by From The PAST Jsc,.
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import classnames from "classnames";
import Swal from "sweetalert2";
import { setInterval } from "timers";
import SearchInput from '@/components/views/SearchInput.vue'

const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default {
  components: {
    SearchInput
  },
  data() {
    return {
      name: "Paser",
      quotaion: "",
      checkAuthen: "",
      passWordUser: "",
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
      comment: "",
      gender: "0",
      showTypeText: [],
      showAuthor: true,
      checkUser: true,
      isUser: false,
      notUser: false,
      showRandom: true,
      signupUserName: false,
      signupPassword: false,
      signupConfirmPassword: false,
      isHideComment: false,
      isLike: false,
      isComment: false,
      clickPost: true,
      createEvent: false,
      createUser: false,
      isLogin: false,
      notAuthen: true,
      stop: false,
      author: {}
    };
  },
  async created() {
    console.log('quotationRandom', this.quotationRandom)
    await this.getQuotations();
    await this.getProfileUser();
    await this.parseQuotation();
    await this.getAnotherRandom();
    this.stop = false;

    // this.timeDown();
  },
  destroyed(){
    this.stop = true;
  },
  computed: {
    ...mapGetters(["quotationRandom", "isAuthenticated", "getProfile", "getBackgound"]),
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
      "getProfileUser",
      "set_randomQuotation"
    ]),
  parseQuotation: function () {
            this.showTypeText = "";
            this.author = this.quotationRandom.user;
            let tmp = this.quotationRandom.content;
            let time = tmp.length;
            console.log(tmp);
            if (this.timer) {
                window.clearInterval(this.timer);
            }

            this.timer = window.setInterval(()=>{
                console.log(time);
                if(time < 1){
                    this.sendCodeTxt = '发送验证码';
                    window.clearInterval(this.timer);
                    this.timer = null;
                }else{
                    --time;
                    //this.sendCodeTxt = '还剩'+time+'秒';
                    this.showTypeText += tmp[this.showTypeText.length];
                }
            },70);
    },
    async getAnotherRandom(){
      let self = this;
      await setTimeout(()=> {
          if (!self.stop) {
            self.getQuotations();
            self.parseQuotation();
            self.getAnotherRandom();
          }
      }, 180000);
    },
    clickCreateQuotation() {
      this.clickPost = false;
      this.createEvent = true;
      this.createUser = true;
      this.isLogin = true
      if(this.createUser) {
        return setTimeout(x => {
                  this.$refs.check.focus()
                }, 150);
      }
    },
    async postQuotations() {
      await this.createQuotations({ content: this.quotaion }).then(res => {
        if (res.ok) {
              
              this.quotaion = "";
              this.set_randomQuotation(res.response.data);
              // this.showTypeText =res.response.data.content;
              // this.author = res.response.data.user;
              this.parseQuotation();
          // this.getQuotations().then(response => {
          //   console.log(response);
          //   if(response.ok) {

          //     //this.getAnotherRandom();

          //   }
          // })
        }
      });

      
    },
    toSignUp() {
      this.$router.push({ name: "signup" });
    },
    async checkUserProfile() {
      if (this.checkAuthen.indexOf(" ") >= 0) {
        this.createQuotations({ content: this.checkAuthen }).then(res => {
          if (res.ok) {
            this.getQuotations().then(response => {
              if(response.ok) {
                this.checkAuthen = "";
                this.clickPost = true;
                this.createUser = false;
                this.getAnotherRandom()
                this.parseQuotation()
              }
            })
            
          }
        });
      } else {
        this.checkAccount({ email: this.checkAuthen }).then(res => {
          if (res.ok) {
            setTimeout(x => {
              this.$refs.password.focus()
            }, 150);
            this.showRandom = false
            this.showAuthor = false
            this.checkUser = false;
            this.isUser = true;
          } else {
            setTimeout(x => {
              this.$refs.email.focus()
            }, 150);
            this.showRandom = false
            this.checkAuthen = "";
            this.checkUser = false;
            this.notUser = true;
            this.notAuthen = false
          }
        });
      }
    },
    signIn() {
      this.logIn({
        email: this.checkAuthen,
        password: this.passWordUser
      }).then(res => {
        if(res.ok) {
          this.getProfileUser();
          this.isUser = false
          this.clickPost = true
        } else {
          Swal.fire({
            title: "Email Or Password invalid",
            type: "error"
          });
        }
      })
    },
    fillEmail() {
      if (validateEmail.test(this.email.toLowerCase())) {
        setTimeout(x => {
          this.$refs.username.focus()
        }, 150);
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
        setTimeout(x => {
          this.$refs.newPassword.focus()
        }, 150);
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
        setTimeout(x => {
          this.$refs.confirmPass.focus()
        }, 150);
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
            this.getProfileUser();
            this.createEvent = true
            this.showTypeText = `Welocome ${this.userName} to passness `
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
          this.isHideComment = false
          this.isComment = false
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
::placeholder{
  color:#fff;
}
.vue-typer .custom.char.typed {
  color: #fff;
}
.home-wr {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  .background {
    position: relative;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
  }
  .footer {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 15px;
    width: 100%;
    color: #fff;
    font-family: "Quicksand", sans-serif;
    font-weight: 300;
    text-align: center;
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
        width: 90%;
        height: 230px;
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