<template>
  <div>
    <div class="mr-myinformation-wr">
      <div class="mr-myinformation">
        <div class="mr-quote">
          <p
            class="mr-greeting"
          >{{caculatorTime}} {{!getProfile.user.name ? getProfile.user.name : getProfile.user.email}}</p>
          <div class="mr-wc-quotation">
            <p>
              {{ showQuotaions.content }}
              <br>
              <i
                v-if="showQuotaions.user"
                v-cloak
              >{{ !showQuotaions.user.name ? showQuotaions.user.name : 'Hidden' }}</i>
            </p>
          </div>
          <div class="mr-welcomequestion">
            <input
              @keydown.enter.prevent="postQuotations"
              v-model="quotation"
              type="text"
              placeholder="How are you today?"
            >
          </div>
        </div>
        <!-- ./. mr-quote  -->

        <div class="mr-basicinfo">
          <h5>My information</h5>
          <ul>
            <li>
              <strong>Email:</strong>
              <span>{{ getProfile.user.email }}</span>
            </li>
            <li>
              <strong>Phone:</strong>
              <span class="mr-underline" v-if="!getProfile.user.phone" @click="showInputPhone = true">Add your number</span>
                <v-text-field  v-model="phoneNumber" placeholder="Phone number" v-show="!getProfile.user.phone && showInputPhone"></v-text-field>
                <div class="mr-action-btn" id="sign-in-button" @click="confirmPhone" v-show="!getProfile.user.phone && showInputPhone">Send Verify</div>
                <v-text-field v-model="verifyCode" placeholder="Verify Code" v-show="!getProfile.user.phone && showInputVerify"></v-text-field>
                <div class="mr-action-btn" @click="phoneVerify" v-show="!getProfile.user.phone && showInputVerify">Verify</div>

              <span v-show="getProfile.user.phone">{{getProfile.user.phone}}</span>
            </li>
            <li v-if="false">
              <strong>Address:</strong>
              <span class="mr-underline">Add your number</span>
              <span
                style="display: none;"
              >98 Truong Trinh street, Ward 10, Tan Binh District, Ho Chi Minh city</span>
            </li>
            <li>
              <strong
                class="change-password"
                @click="showInputChange"
                v-if="showTextChange"
              >Change Password</strong>
              <div class="input-change" v-if="showChangePassword">
                <v-text-field v-model="password" placeholder="Pasword"></v-text-field>
                <v-text-field v-model="newPaswword" placeholder="New Password"></v-text-field>
                <v-text-field v-model="confirmNewPassword" placeholder="Confirm New Password"></v-text-field>
                <div class="mr-action-btn" @click="getNewPassword">change password</div>
              </div>
            </li>
            <li>
              <strong>Your budget:</strong>
              <span>{{ getProfile.profit.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) }}</span>
            </li>
            <li>
              <strong>Contact list:</strong>
              <span>
                {{ getProfile.address_count }}
              </span>
            </li>
            <li>
              <strong>Your order:</strong>
              <span>
                {{ getProfile.booking_number }}
                <router-link :to="{name: 'my_service'}"> See List </router-link>
              </span>
            </li>
            <li style="display: none;">
              <button>Change password</button>
            </li>
          </ul>
        </div>
        <!-- ./. mr-basicinfo -->
      </div>
      <!-- ./.mr-myinformation  -->
    </div>
    <!--./. mr-myinformation-wr-->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Swal from "sweetalert2";
import moment from "moment";
import * as firebase from 'firebase';
import api from "@/plugins/axios";
//Firebase initiate
var config = {
  apiKey: "AIzaSyDz48Py1okqAqqlMHkMALnw2Gpvgx9mJNI",
  authDomain: "tuquakhu-9fcc5.firebaseapp.com",
  databaseURL: "https://tuquakhu-9fcc5.firebaseio.com",
  projectId: "tuquakhu-9fcc5",
  storageBucket: "tuquakhu-9fcc5.appspot.com",
  messagingSenderId: "840825466857"
};
firebase.initializeApp(config);


export default {
  name: "component_name",
  data() {
    return {
      quotation: "",
      password: "",
      newPaswword: "",
      confirmNewPassword: "",
      showChangePassword: false,
      showTextChange: true,
      showQuotaions: [],
      //Firebase
      showInputPhone: false,
      showInputVerify: false,
      phoneNumber: '',
      verifyCode: null
    };
  },
  async created() {
    let { response } = await this.getQuotations();
    this.showQuotaions = response.data;
  },
  mounted(){
    setTimeout(()=>{
            window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': function(response) {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              onSignInSubmit();
            }
          }); 
        }, 2000);

  },
  computed: {
    ...mapGetters(["getProfile", "quotationRandom"]),
    caculatorTime() {
      let communicate = "";
      let time = moment().format("H");
      if (0 < time && time < 11) {
        return (communicate = "Good Moring");
      }
      if (11 < time && time < 15) {
        return (communicate = "Good Afternoon");
      }
      if (15 < time && time < 21) {
        return (communicate = "Good Evening");
      }
      if (21 < time && time < 24) {
        return (communicate = "Good Night");
      }
      return communicate;
    }
  },
  methods: {
    ...mapActions(["changePassword", "getQuotations", "createQuotations", "updatePhoneNumber"]),
    showInputChange() {
      this.showChangePassword = true;
      this.showTextChange = false;
    },
    confirmPhone() {
        let phoneNumber = this.phoneNumber;
        let appVerifier = window.recaptchaVerifier;
        let self = this;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function (confirmationResult) {
              self.showInputVerify = true;
              window.confirmationResult = confirmationResult;
            }).catch(function (error) {
              // Error; SMS not sent
              // ...
              Swal.fire('Check your phone number');
            }); 
    },  
    phoneVerify(){
      let that = this;
      window.confirmationResult.confirm(this.verifyCode).then(()=>{
        //Update API
        this.updatePhoneNumber({phoneNumber: this.phoneNumber}).then(res => {
          console.log('res', res)
          if(res.ok) {
            Swal.fire('Update success');
            this.getProfile.user.phone = this.phoneNumber;
          }
        })
      });
    },      
    getNewPassword() {
      if (this.confirmNewPassword !== this.newPaswword) {
        Swal.fire({
          title: "Password and Confirm Password Invalid",
          type: "error"
        });
      } else if (!this.password) {
        Swal.fire({
          title: "Field Required",
          type: "error"
        });
      } else {
        this.changePassword({
          password: this.password,
          newPassword: this.newPassword
        }).then(res => {
          if (res.ok) {
            Swal.fire({
              title: "Sucess",
              type: "sucess"
            });
            this.showChangePassword = false;
            this.showTextChange = true;
          } else {
            Swal.fire({
              title: "Password Invalid",
              type: "error"
            });
          }
        });
      }
    },
    postQuotations() {
      if (!this.quotation) {
        Swal.fire({
          title: "Please Fill Quotaions",
          type: "error"
        });
      } else {
        this.createQuotations({
          content: this.quotation
        }).then(res => {
          if (res.ok) {
            this.quotation = ''
            Swal.fire({
              title: "Post Quotation Sucess",
              type: "success"
            });
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.input-change {
  width: 90%;
}
.change-password {
  text-decoration: underline;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    transition: all 0.3s;
    font-weight: bold;
  }
}
.mr-action-btn {
  position: relative;
  display: inline-block;
  margin: 0 auto;
  text-align: center;
  display: inline-block;
  width: 170px;
  height: 35px;
  line-height: 35px;
  @extend %default-button;
  color: #fff;
}
%default-button {
  background-color: #212121;
  border: 1px solid #212121;
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  font-family: "Montserrat", sans-serif;
  transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #212121;
  }
}
.mr-myinformation-wr {
  position: relative;
  display: flex;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  flex-direction: row;
  flex-wrap: wrap;
  background: linear-gradient(100deg, #121212 50%, #ffffff 50%);
  justify-content: center;
  font-family: "IBM Plex Sans", sans-serif;

  &:before {
    content: " ";
    position: absolute;
    width: 100vw;
    height: 40px;
    top: 0;
    left: 0;
    background-color: #121212;
  }

  &:after {
    content: " ";
    position: absolute;
    width: 100vw;
    height: 40px;
    bottom: 0;
    left: 0;
    background-color: #fff;
  }

  > .mr-myinformation {
    display: flex;
    width: 100%;
    padding: 120px 15px;
    justify-content: center;

    > div {
      flex: 1 0 50%;
      position: relative;
    }
    .mr-quote {
      text-align: center;
      color: #fff;
      padding: 75px;

      .mr-greeting {
        position: relative;
        display: inline-block;
        width: 100%;
        text-align: left;
        font-size: 13px;
      }

      .mr-wc-quotation {
        position: absolute;
        display: inline-block;
        height: 200px;
        width: calc(100% - 150px);
        padding-right: 50px;
        margin-top: auto;
        margin-bottom: auto;
        top: 0;
        bottom: 0;
        left: 75px;

        textarea {
          position: relative;
          display: inline-block;
          width: 100%;
          height: 200px;
          background: transparent;
          border: none;
          resize: none;
          font-size: 20px;
          color: #fafafa;
          line-height: 1.3;

          &::placeholder {
            font-size: 15px;
            color: #fafafa;
            line-height: 1.3;
          }

          &:focus {
            outline: none;
          }
        }

        i {
          position: relative;
          display: inline-block;
          width: 100%;
          text-align: right;
          font-size: 15px;
        }

        p {
          position: relative;
          display: inline-block;
          font-size: 20px;
          word-break:break-word;
          line-height: 1.3;
          text-align:left;
        }
      }

      .mr-welcomequestion {
        position: absolute;
        display: inline-block;
        width: 100%;
        bottom: 0px;
        left: 0;

        input {
          position: relative;
          display: inline-block;
          width: 100%;
          text-align: center;
          background-color: transparent;
          font-size: 17px;
          color: #9e9e9e;
          border: 0;
          outline: none;

          &::placeholder {
            font-size: 17px;
            color: #9e9e9e;
          }
        }
      }
    }
    .mr-basicinfo {
      padding-left: 150px;
      margin-top: 50px;

      h5 {
        position: relative;
        display: inline-block;
        width: 100%;
        text-align: left;
        font-size: 30px;
        font-weight: bold;
        font-family: "IBM Plex Sans", sans-serif;
      }
      ul {
        position: relative;
        display: inline-block;
        width: 100%;
        margin-top: 30px;

        li {
          position: relative;
          display: inline-block;
          width: 100%;
          margin: 7px 0;
          line-height: 1.4;

          strong {
            color: #121212;
            font-size: 17px;
          }
          span {
            color: #999;
            font-size: 16px;
            font-weight: 300;
            margin-left: 7px;

            .mr-edit-pass {
              position: relative;
              display: inline-block;
              width: 200px;
              border: 0;
              border-bottom: 1px solid #d9d9d9;
              font-size: 20px;
              font-weight: 300;

              &::placeholder {
                font-size: 20px;
                color: #999;
                font-weight: 300;
              }
            }
          }

          .mr-underline {
            cursor: pointer;
            display: inline-block;
            border-bottom: 1px solid #d9d9d9;
          }

          &:last-child {
            button {
              border: 0;
              background: transparent;
              float: right;
            }
          }
        }
      }
    }
  }
}
</style>