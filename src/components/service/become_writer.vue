
import { mapActions } from 'vuex';
<template>
  <div class="mr-serviceList-wr">
    <div class="mr-article-wr">
      <div class="col-md-12">
        <div class="mr-serviceList">
            <h3>Become writer</h3>
          <div class="mr-servicntn">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div class="mr-regiter-writer">
              <div class>
                <div class>
                  <v-text-field v-model="name" label="Name" color="rgba(0,0,0,0.9)"></v-text-field>
                </div>
                <div class>
                  <v-text-field v-model="email" label="Email" color="rgba(0,0,0,0.9)"></v-text-field>
                </div>
                <div class="signup__input">
                  <v-text-field
                    v-model="phone"
                    label="Phone number"
                    color="rgba(0,0,0,0.9)"
                    type="number"
                  ></v-text-field>
                </div>
                <v-textarea
                  class="mr-sample-blog"
                  v-model="content"
                  name="input-7-1"
                  label="Write your article here"
                  color="rgba(0,0,0,0.9)"
                  resize="false"
                ></v-textarea>
                <!-- ./.login__btn  -->
              </div>
            </div>
          <!-- ./.mr-regiter-writer -->

          </div>
           

        <div class="reg__btn">
          <v-btn :block="true" @click="registerWriter">Send</v-btn>
        </div>
        </div>
      </div>
    </div>
    <!-- ./.mr-article-wr  -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Swal from "sweetalert2";

const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      content: ""
    };
  },
  methods: {
    ...mapActions(["becomeWriter"]),
    validateField() {
      if (!this.name || !this.email || !this.phone || !this.content) {
        Swal.fire({
          title: "Field Required",
          type: "error"
        });
        return false;
      }
      if(!validateEmail.test(this.email.toLowerCase())) {
        Swal.fire({
          title: "Email invalid",
          type: "error"
        });
        return false;
      }
      return true;
    },
    registerWriter() {
      if (!this.validateField()) return;
      this.becomeWriter({
        name: this.name,
        email: this.email,
        phone: this.phone,
        content: this.content
      }).then(res => {
				if(res.ok) {
					Swal.fire({
						title: "Resgister Sucess !!",
						type: "sucess"
					});
					this.$router.push({name: 'Emotion_list'})
				}
			})
    }
  }
};
</script>

<style lang="scss" scoped>
%full-width {
  position: relative;
  display: inline-block;
  width: 100%;
}

%default-button {
  margin: 0 10px;
  background-color: #212121 !important;
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
.mr-serviceList-wr {
  position: relative;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background-size: cover;
  bacground-position: center center;
  background-repeat: no-repeat;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  font-family: "IBM Plex Sans", "sans-serif" !important;
  font-weight: 300;
  > button {
    position: relative;
    display: inline-block;
    border: 0;
    background-color: transparent;
    color: #fff;

    i {
      font-size: 100px;
    }
  }
  .mr-article-wr {
    position: relative;
    display: inline-block;
    width: 60vw;
    height: calc(100vh - 80px);
    background-color: rgba(255, 255, 255, 0.9);
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    padding: 60px;
    overflow: auto;
    cursor: pointer;

    .col-md-12 {
      position: relative;
      display: inline-block;
      width: 100%;
      height: 100%;
    }
    .mr-header {
      @extend %full-width;
      font-size: 20px;
      color: #333;
      margin: 0 0 30px 0;
      font-weight: bold;

      span {
        position: relative;
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
      }
      .mr-ttl {
        margin-left: 20px;
      }
    }

    .mr-article-cntn {
      position: relative;
      display: inline-block;
      width: 100%;
      line-height: 1.5;
      font-size: 17px;
    }
  }
}
.mr-serviceList-wr {
  background-image: url("../../assets/images/watchmen-1613267.png");
  .mr-article-wr {
    max-height: calc(100vh - 120px);
    overflow: auto;
    border: 60px solid transparent;
    border-left: 0;
    border-right: 0;
    padding: 0;
  }

  .mr-serviceList {
    @extend %full-width;
    height: 100%;

    
   h3 {
      position: relative;
      display: inline-block;
      width: 100%;
      font-size: 25px;
      font-weight: 400;
      margin-bottom: 10px;
      text-transform: uppercase;
      text-align: center;
    }
    .mr-servicntn {
      flex: 1 0 100%;
      height: calc(100% - 105px);
      padding: 0 60px;
      overflow-y: auto;
     

      p {
        font-size: 16px;
        line-height: 1.5;
        text-align: justify;
      }
      .mr-regiter-writer {
      .mr-sample-blog {
        textarea {
          resize: none;
        }
      }
    } 
    }
    .mr-bookservice {
      position: relative;
      display: inline-block;
      float: right;
      width: 150px;
      height: 40px;
      background-color: #456789;
      color: #fff;
      border: 0;
      font-size: 17px;
      text-transform: uppercase;
      margin-top: 25px;
      order: 2;
      margin-left: auto;
    }
  }
}
.reg__btn {
  position: relative;
  display: inline-block;
  width: 100%;
  padding: 0 60px;
  top: 20px;
  button {
    margin-left: 0;
    color: #fff;
    @extend %default-button;
    &:hover {
      background-color: #fff !important;
    }
    &:before {
      display: none !important;
    }
  }
}
</style>