<template>
  <div>
    <div class="mr-full-background">
      <div class="mr-congrat-wr">
        <h3 class="mr-ttl">Congratulation</h3>
        <!-- ./.mr-ttl  -->
        <p class="mr-congrat-contnt">
          You have just finished the order
          <a href="#">#{{ data.id }}</a> for
          <b>{{ type }}</b>.
          <br>Your order will be process on
          <b>{{ data.time_start | moment("MMMM Do YYYY") }}</b>,
           <span v-if="data.from_name">delivery to <b>{{ data.from_name }}</b>.</span>
          <br>You can check the process of the service in the
          <router-link :to="{name: 'order_detail'}" >order detail</router-link>
        </p>
        <!-- ./.mr-congrat-contnt  -->
      </div>
      <!--./.mr-congrat-wr  -->
    </div>
    <!-- ./.mr-full-background  -->
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      data: {},
      type: ''
    }
  },
  async created() {
    let { response } = await this.getBooking(this.getIdBooking.id)
    this.data = response.data
    if(this.data.type === 1) {
      this.type = 'handwriting'
    }
    if(this.data.type === 2) {
      this.type = 'Write'
    }
    if(this.data.type === 3) {
      this.type = 'Emotion '
    }
  },
  computed: {
    ...mapGetters(["getIdBooking"]),
  },
  methods: {
    ...mapActions(["getBooking"])
  }
};
</script>
<style lang="scss" scoped>
.mr-full-background {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/images/lens-3634294_1920.jpg");
  background-size: cover;
  background-position: center center;

  .mr-congrat-wr {
    position: relative;
    display: inline-block;
    width: 60%;
    height: fit-content;
    padding: 50px;
    background-color: rgba(255, 255, 255, 0.95);
    color: #3e3e3e;
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 300;
    text-align: center;

    .mr-ttl {
      position: relative;
      display: inline-block;
      width: 100%;
      font-family: "Montserrat", sans-serif;
      color: #3e3e3e;
      text-transform: uppercase;
      font-size: 16px;
      letter-spacing: 2px;
      margin-bottom: 60px;

      &:before {
        content: "";
        position: absolute;
        display: block;
        width: 30px;
        height: 2px;
        left: 0;
        right: 0;
        bottom: -10px;
        margin: auto;
        background-color: #3e3e3e;
      }

      &:after {
        content: "";
        position: absolute;
        display: block;
        width: 40px;
        height: 1px;
        left: 0;
        right: 0;
        bottom: -17px;
        margin: auto;
        border-bottom: 1px solid #3e3e3e;
      }
    }

    .mr-congrat-contnt {
      font-size: 16px;
      line-height: 1.5;

      b {
        font-weight: 600;
      }
    }
  }
}
</style>