<template>
  <div>
    <div id class="mr-checkout-session">
      <div class="mr-container">
        <div class="mr-left-col">
          <h3 class="mr-heading-left" v-if="handPrint">Sender</h3>
          <div class="row">
            <div class="col-sm-12" v-if="handWrite">
              <label>Content</label>
              <vue-editor
                v-model="content"
                :useCustomImageHandler="true"
                @imageAdded="handleImageAdded"
                style="height:300px;"
                :editorOptions="editorOption"
              ></vue-editor>
            </div>
            <div class="col-sm-12" v-if="handPrint">
              <v-text-field
                v-model="fullnameSender"
                label="Full name"
                flat
              ></v-text-field>
              <div class="col-sm-12">
                <v-text-field
                  v-model="emailSender"
                  color="#333"
                  placeholder="Email"
                  flat
                ></v-text-field>
              </div>
              <div class="col-sm-6">
                <label class="mrg-top-30">The City</label>
                <v-autocomplete
                  v-model="selectCitySender"
                  :items="listCity"
                  flat
                  append-icon
                  placeholder="City"
                  color="#333"
                ></v-autocomplete>
              </div>
              <div class="col-sm-6">
                <label class="mrg-top-30">The District</label>
                <v-autocomplete
                  v-model="selectDistrictSender"
                  :items="listDisttrict"
                  flat
                  append-icon
                  placeholder="District"
                  color="#333"
                  :disabled="hideDistSender"
                ></v-autocomplete>
              </div>
              <div class="col-sm-6">
                <v-autocomplete
                  v-model="selectWardSender"
                  :items="listWard"
                  label="Ward"
                  flat
                  append-icon
                  color="#333"
                  :disabled="hideWardSender"
                ></v-autocomplete>
              </div>
              <div class="col-sm-12">
                <v-text-field
                  v-model="streetSender"
                  placeholder="The Address"
                  color="#333"
                  flat
                ></v-text-field>
              </div>
            </div>
            <h3 class="mr-heading-left">Receiver</h3>
            <div class="col-sm-12">
              <v-text-field
                v-model="fullname"
                label="Full name"
                color="#333"
                flat
              ></v-text-field>
            </div>
            <!-- column -->
            <!-- column -->
            <div class="col-sm-6">
              <v-autocomplete
                v-model="selectCity"
                :items="listCity"
                label="City"
                flat
                append-icon
                color="#333"
              ></v-autocomplete>
            </div>
            <div class="col-sm-6">
              <v-autocomplete
                v-model="selectDistrict"
                :items="listDisttrict"
                flat
                append-icon
                label="District"
                color="#333"
                :disabled="hideDist"
              ></v-autocomplete>
            </div>
            <div class="col-sm-6">
              <v-autocomplete
                v-model="selectWard"
                :items="listWard"
                label="Ward"
                flat
                append-icon
                color="#333"
                :disabled="hideWard"
              ></v-autocomplete>
            </div>
            <div class="col-sm-12">
              <v-text-field
                v-model="street"
                label="230 An Nam Street"
                color="#333"
                flat
              ></v-text-field>
            </div>
            <div class="col-sm-12">
              <v-text-field
                v-model="cmndID"
                label="Indentizend "
                color="#333"
                type="number"
                flat
              ></v-text-field>
            </div>
            <!-- /column -->

            <div class="col-sm-12">
              <v-text-field
                v-model="numberPhone"
                label="Phone"
                type="number"
                color="#333"
                flat
              ></v-text-field>
            </div>
            <!-- column -->

            <div class="col-sm-12">
              <v-text-field
                v-model="email"
                label="Email"
                placeholder="your@email.com"
                color="#333"
                flat
              ></v-text-field>
            </div>
            <div class="col-sm-12">
              <v-menu
                ref="menu"
                label="Time End"
                v-model="menu"
                :scrollable="true"
                :close-on-content-click="false"
                :return-value.sync="date"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date"
                    color="#333"
                    v-on="on"
                    solo-inverted
                    flat
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </div>
            <div class="mr-action-btn">
              <a class="mr-action-btn_checkprice" @click="checkPrice">Check Price</a>
            </div>
            <!-- column -->
          </div>
          <!-- /row -->

          <div class="mr-payment-method">
            <h3 class="mr-heading-left-2">Payment</h3>
            <div class="row">
              <div class="col-sm-12">
                <label class="mr-radio-style" for="cod">
                  Cash on delivery
                  <input type="radio" id="cod" checked="checked" name="payment">
                  <span></span>
                </label>
              </div>
              <!-- column -->
            </div>
            <!-- /row -->
            <div class="row">
              <div class="col-sm-12">
                <label class="mr-radio-style" for="ib">
                  Internet banking <small>(Comming soon)</small>
                  <input type="radio" id="ib" name="payment" disabled="true">
                  <span></span>
                </label>
              </div>
              <!-- column -->
            </div>
            <!-- /row -->
          </div>
          <!-- ./. mr-payment-method  -->
          <div class="mr-action-btn">
            <a @click.prevent="orderBooking">Order</a>
          </div>
        </div>
        <!-- ./. mr-left-col -->

        <div class="mr-right-col">
          <div class="mr-sum-board">
            <h3 class>Booking serivce</h3>

            <table class="mr-sum-tbl">
              <tbody>
                <tr>
                  <th colspan="2">
                    <b>{{ checkService }}</b>
                  </th>
                </tr>

                <tr>
                  <th>Distance</th>
                  <td>
                    <b>{{ distance }} km</b>
                  </td>
                </tr>

                <tr>
                  <th>Distance price</th>
                  <td>
                    <b>{{ distancePrice }}</b>
                  </td>
                </tr>

                <tr>
                  <th>Security price</th>
                  <td>
                    <b>{{ securityPrice }}</b>
                  </td>
                </tr>

                <tr>
                  <th>Time price</th>
                  <td>
                    <b>{{ timePrice }}</b>
                  </td>
                </tr>

                <tr>
                  <th>Service insurance commitment <br>
                    <router-link :to="{name: 'PolicyInsurence'}" target="_blank"> To reimbursing you if this order (*) </router-link>
                  </th>
                  <td>
                    <b v-text="caculatorMoney(securityPrice)"></b>
                  </td>
                </tr>
                 <tr class="grand-total">
                  <th class>total price</th>
                  <td class>{{ totalPrice }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /cart-totals -->
        </div>
        <!-- /mr-right-col -->
      </div>
      <!-- /container -->
    </div>
    <!-- /Checkout -->
  </div>
</template>
<script>
import api from "@/plugins/axios";
import { mapActions, mapGetters } from "vuex";
import { VueEditor } from "vue2-editor";
import Swal from "sweetalert2";
import moment from "moment";

import "quill/dist/quill.bubble.css";

const validateEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default {
  components: {
    VueEditor
  },
  data() {
    return {
      listCity: [],
      listDisttrict: [],
      listWard: [],
      idCity: {},
      idDist: {},
      idCitySender: {},
      idDistSender: {},
      selectCity: "",
      selectCitySender: "",
      selectDistrict: "",
      selectDistrictSender: "",
      selectWard: "",
      selectWardSender: "",
      street: "",
      streetSender: "",
      fullname: "",
      fullnameSender: "",
      numberPhone: "",
      cmndID: "",
      email: "",
      emailSender: "",
      type: "",
      content: "",
      orderService: 'Your Service',
      handWrite: false,
      handPrint: false,
      hideWard: true,
      hideWardSender: false,
      hideDist: true,
      hideDistSender: false,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      distance: '0',
      distancePrice: "0",
      securityPrice: "0",
      timePrice: "0",
      totalPrice: "0",
      compareDay: moment()
        .add(3, "days")
        .format("YYYY-MM-DD"),
      editorOption: {
        theme: "bubble",
        placeholder: "Your Emotions ( ^.^ )",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],
            ["link", "image"],
            ["clean"]
          ]
        }
      }
    };
  },
  async created() {
    this.email = this.getProfile.user.email
    this.fullname = this.getProfile.user.username
    this.numberPhone = this.getProfile.user.phone
    this.type = this.$store.state.type;
    if (this.type === "1") {
      this.handPrint = true;
    }
    if (this.type === "2") {
      this.handWrite = true;
    }
    let { response } = await this.getListCity();
    this.listCity = response.data;
  },
  watch: {
    selectCity(value) {
      if (value) {
        this.hideDist = false;
        this.idCity = this.listCity.find(item => {
          return item.text === value;
        });
        this.getListDist(this.idCity.id).then(response => {
          if (response.ok) {
            this.listDisttrict = response.response.data;
          }
        });
      } else {
        this.hideDist = true;
        this.idCity = {};
      }
    },
    selectDistrict(value) {
      if (value) {
        this.hideWard = false;
        this.idDist = this.listDisttrict.find(item => {
          return item.text === value;
        });
        this.getListWard(this.idDist.id).then(response => {
          if (response.ok) {
            this.listWard = response.response.data;
          }
        });
      } else {
        this.hideWard = true;
        this.this = {};
      }
    },
    selectCitySender(value) {
      if (value) {
        this.hideDistSender = false;
        this.idCitySender = this.listCity.find(item => {
          return item.text === value;
        });
        this.getListDist(this.idCitySender.id).then(response => {
          if (response.ok) {
            this.listDisttrict = response.response.data;
          }
        });
      } else {
        this.hideDistSender = true;
        this.idCitySender = {};
      }
    },
    selectDistrictSender(value) {
      if (value) {
        this.hideWardSender = false;
        this.idDistSender = this.listDisttrict.find(item => {
          return item.text === value;
        });
        this.getListWard(this.idDistSender.id).then(response => {
          if (response.ok) {
            this.listWard = response.response.data;
          }
        });
      } else {
        this.hideWardSender = true;
        this.idDistSender = {};
      }
    }
  },
  computed: {
    ...mapGetters(["getIdEmotion", "getProfile", "getBackgound"]),
    checkService() {
      if(this.$store.state.type == 1) {
        return this.orderService = 'Handwriting'
      }
      if(this.$store.state.type == 2) {
        return this.orderService = 'Write'
      }
      if(this.$store.state.type == 3) {
        return this.orderService = 'Emotion'
      }
      return this.orderService
    }
  },
  methods: {
    ...mapActions([
      "getListCity",
      "getListDist",
      "getListWard",
      "getPrice",
      "createBooking"
    ]),
    caculatorMoney(money) {
      return (parseInt(money) * this.getBackgound.comission).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
    },
    handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      if (file > 2e6) {
        Swal.fire({
          title: "Image must be less than 2mb",
          type: "error"
        });
      } else {
        var formData = new FormData();
        formData.append("img", file);
        api({
          url: "/uploads",
          method: "POST",
          data: formData
        })
          .then(result => {
            let url = result.data.url; // Get url from response
            Editor.insertEmbed(cursorLocation, "image", url);
            resetUploader();
          })
          .catch(err => {
          });
      }
    },
    validateCheckPrice() {
      if (
        !this.date ||
        !this.selectCity ||
        !this.selectDistrict ||
        !this.selectWard ||
        !this.street
      ) {
        Swal.fire({
          title: "Invalid Data, Please Check Again !!!",
          type: "error"
        });
        return false;
      }
      if (this.compareDay > this.date) {
        Swal.fire({
          title: "Please select a receipt date after 3 days",
          type: "error"
        });
        return false;
      }
      return true;
    },
    checkPrice() {
      if (!this.validateCheckPrice()) return;
      this.getPrice({
        time_end: this.date,
        city: this.selectCity,
        dist: this.selectCity,
        ward: this.selectWard,
        address: this.street
      }).then(res => {
        if (res.ok) {
          let data = res.response.data;
          this.distance = data.distance
          this.distancePrice = data.distance_price;
          this.securityPrice = data.security_price;
          this.timePrice = data.time_price;
          this.totalPrice = data.total_price;
          Swal.fire({
            title: "Check Price Sucess !",
          });
        }
      });
    },
    validateOrderWrite() {
        if (!this.content) {
          Swal.fire({
            title: "Invalid Content, Please Check Again !!!",
            type: "error"
          });
          return false;
        }
        return true;
    },
    validateOrderPrint() {
      if (
        !this.fullnameSender ||
        !this.selectCitySender ||
        !this.selectDistrictSender ||
        !this.selectWardSender ||
        !this.streetSender ||
        !this.emailSender
      ) {
        Swal.fire({
          title: "Invalid Data Sender, Please Check Again !!!",
          type: "error"
        });
        return false;
      }
      return true;
      if (!validateEmail.test(this.emailSender)) {
        Swal.fire({
          title: "Invalid Email Sender !",
          type: "error"
        });
        return false;
      }
      return true;
    },
    validateOrder() {
      if (
        !this.date ||
        !this.selectCity ||
        !this.selectDistrict ||
        !this.selectWard ||
        !this.street ||
        !this.fullname ||
        !this.numberPhone ||
        !this.email ||
        !this.cmndID
      ) {
        Swal.fire({
          title: "Invalid Data, Please Check Again !!!",
          type: "error"
        });
        return false;
      }
      if (!validateEmail.test(this.email)) {
        Swal.fire({
          title: "Invalid Email !",
          type: "error"
        });
        return false;
      }
      if (this.cmndID.length < 9) {
        Swal.fire({
          title: "Indentity Card Invalid",
          type: "error"
        });
        return false;
      }
      if (this.compareDay > this.date) {
        Swal.fire({
          title: "Please select a receipt date after 3 days",
          type: "error"
        });
        return false;
      }
      return true;
    },
    orderBooking() {
      if (this.type == 1) {
        if (!this.validateOrderPrint()) return;
      }
      if (this.type == 2) {
        if (!this.validateOrderWrite()) return;
      }
      if (!this.validateOrder()) return;
      this.createBooking({
        time_end: this.date,
        city: this.selectCity,
        dist: this.selectDistrict,
        ward: this.selectWard,
        address: this.street,
        name: this.fullname,
        phone: this.numberPhone,
        email: this.email,
        type: this.type,
        emotion_id : this.$store.state.idOrderEmotion,
        content: this.content,
        citizen: this.cmndID,
        from_city: this.selectCitySender,
        from_dist: this.selectDistrictSender,
        from_ward: this.selectWardSender,
        from_address: this.streetSender,
        from_email: this.emailSender,
        from_name: this.fullnameSender
      }).then(res => {
        if (res.ok) {
          this.$router.push({ name: "finish_booking" });
        }
      });
    }
  }
};
</script>


<style  lang="scss">
%mr-heading {
  position: relative;
  display: inline-block;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  color: #3e3e3e;
  text-transform: uppercase;
  font-size: 15px;
  letter-spacing: 2px;
  margin-bottom: 60px;

  &:before {
    content: "";
    position: absolute;
    display: block;
    width: 30px;
    height: 2px;
    left: 0;
    bottom: -10px;
    background-color: #3e3e3e;
  }

  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 40px;
    height: 1px;
    left: 0;
    bottom: -17px;
    border-bottom: 1px solid #3e3e3e;
  }
}

%default-button {
  margin: 0 10px;
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

/* Customize the label (the container) */
.mr-radio-style {
  display: inline-block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  margin-right: 20px;
  cursor: pointer;
  font-size: 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #fff;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border: 1px solid #ced4da;
  }
  span:after {
    content: "";
    position: absolute;
    display: none;
  }
  input:checked ~ span:after {
    display: block;
  }
  span:after {
    left: 3px;
    top: 3px;
    width: 12px;
    height: 12px;
    background-color: #3e3e3e;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  small {
    text-transform: none;
  }
}

.mr-checkout-session {
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 100px;
  justify-content: center;

  .mr-container {
    position: relative;
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    width: 100%;
    padding: 0 15px;
    margin-bottom: 60px;

    > div {
      position: relative;
      padding: 0 15px;
    }
    .mr-left-col {
      width: 58%;

      .mr-heading-left {
        @extend %mr-heading;

        &:before {
          height: 2px;
        }

        &:after {
          height: 1px;
          border-bottom: 1px solid #3e3e3e;
        }
      }

      .mr-payment-method {
        position: relative;
        display: inline-block;
        width: 100%;
        padding: 30px;
        border: 1px solid #e9e9e9;

        .mr-heading-left-2 {
          @extend %mr-heading;

          &:before {
            height: 1px;
            background-color: #3e3e3e;
            border-bottom: 0;
          }

          &:after {
            height: 1px;
            border-bottom: 1px solid #3e3e3e;
          }
        }
      }

      [class*="col-"] {
        margin-bottom: 20px;

        label {
          text-transform: uppercase;
          font-family: "Montserrat", sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          text-transform: uppercase;
          font-smooth: antialiased;
          -webkit-font-smoothing: antialiased;
          tap-highlight-color: rgba(0, 0, 0, 0);
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          color: #3e3e3e;
        }

        &:last-child {
          margin-bottom: 0px;
        }
      }
      
      .mr-input {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 34px;
        padding: 0.5rem;
        border: 1px solid #ced4da;
        background-color: #ededed;
        color: #333;
      }

      .mr-action-btn {
        position: relative;
        display: inline-block;
        width: 100%;
        margin-top: 20px;
        margin-bottom: 30px;
        text-align: center;
        a {
          position: relative;
          display: inline-block;
          width: 130px;
          height: 47px;
          line-height: 47px;
          color: #fff;
          text-decoration: none;
          @extend %default-button;

          &:hover {
            text-decoration: none;
          }
        }
      }
    }
    .mr-right-col {
      width: 42%;

      .mr-sum-board {
        position: relative;
        display: inline-block;
        width: 100%;
        height: auto;
        padding: 30px;
        border: 1px solid #e9e9e9;

        h3 {
          @extend %mr-heading;

          &:before {
            height: 1px;
            background-color: transparent;
            border-bottom: 1px solid #3e3e3e;
          }

          &:after {
            height: 2px;
            border-bottom: 2px solid #3e3e3e;
          }
        }
      }

      .mr-sum-tbl {
        position: relative;
        width: 100%;
        table-layout: fixed;
        border-collapse: collapse;

        tr td,
        tr th {
          padding: 15px 8px;
          font-size: 15px;
          border-bottom: 1px solid #e9e9e9;
        }
        tr:last-child td,
        tr:last-child th {
          border-bottom: 0;
          font-weight: 600;
        }
        tr th {
          text-align: left;
          text-transform:capitalize;
          font-weight: 400;
        }
        tr td {
          text-align: right;
        }
        tr:last-child td {
          font-size: 20px;
        }
      }
    }
  }
}
.grand-total {
  a {
    font-weight: 300;
    text-decoration: none;
    color: #999;
  }
}
.v-select.v-text-field input, .v-text-field input {color:  rgba(0,0,0,.87) !important;}
.ql-editor {
  background-color: rgb(237, 237, 237);
  border: 1px solid #e1e1e1;
}
</style>
