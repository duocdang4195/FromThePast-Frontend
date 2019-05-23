<template>
  <div class="mr-fullslider"  :style="getBackground" v-if="loading" v-cloak>
    <div class="mr-mystatus">
      <p>{{ quotationRandom.content }}</p>
      <ul class="mr-cmt-slider" v-if="quotationRandom.comments && quotationRandom.comments.length == 0">
        No Comment ^.^
      </ul>
      <ul class="mr-cmt-slider" v-else>
        <li>
          {{ comments.content }}
          <span class="mr-author">{{ comments.user.name ? comments.user.name : 'Paser' }}</span>
        </li>
      </ul>
    </div>
    <div class="rh-footer">
      <span class="mr-copyright">Copyright © 2020 by From The PAST Jsc,.</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import _ from "lodash";

export default {
  data() {
    return {
      quotationRandom: {},
      comments: {},
      loading: false
    };
  },
  created() {
    this.getQuotations().then(res => {
      if(res.ok) {
        this.quotationRandom = res.response.data
        this.comments = this.quotationRandom.comments[Math.floor(Math.random() * this.quotationRandom.comments.length)];
        this.loading = true
      }
    })
  },
  computed: {
    ...mapGetters(["getBackgound"]),
    getBackground() {
      return (
        "background-image:url('" +
        this.getBackgound.main_background +
        "');"
      );
    }
  },
  methods: {
    ...mapActions([
      "getQuotations",
    ]),
  }
};
</script>




<style lang="scss" scoped>
.mr-fullslider {
  position: relative;
  display: flex;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/images/cycle-2145189.png");
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 300;

  .mr-mystatus {
    position: relative;
    display: inline-block;
    width: 65%;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 50px;
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 300;
    p {
      position: relative;
      display: inline-block;
      width: 100%;
      font-size: 22px;
      line-height: 1.5;
      padding: 20px;
      font-weight: 500;

      &:before {
        content: " ";
        position: absolute;
        display: inline-block;
        width: 40px;
        height: 40px;
        border-top: 4px double rgba(255, 255, 255, 0.7);
        border-left: 4px double rgba(255, 255, 255, 0.7);
        top: 0;
        left: 0;
      }

      &:after {
        content: " ";
        position: absolute;
        display: inline-block;
        width: 40px;
        height: 40px;
        border-bottom: 4px double rgba(255, 255, 255, 0.7);
        border-right: 4px double rgba(255, 255, 255, 0.7);
        bottom: 0;
        right: 0;
      }
    }
    ul.mr-cmt-slider {
      position: relative;
      display: inline-block;
      width: 100%;
      margin-top: 60px;
      li {
        position: relative;
        display: inline-block;
        width: 100%;
        line-height: 1.5;
        font-size: 18px;
        font-weight: 300;
        font-style: italic;
        color: #d9d9d9;
      }
    }
  }
  .hero-caption.caption-height-top {
    top: 30%;
  }

  .mr-cmt-slider {
    position: relative;
    display: inline-block;
    width: 100%;
    margin-top: 25px;

    > li {
      position: relative;
      display: inline-block;
      width: 100%;
      font-size: 13px;

      .mr-author {
        position: relative;
        display: inline;
        float: right;
        width: 100%;
        text-align: right;
        margin-top: 10px;
        font-style: italic;
      }
    }
  }
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
img {
  position: relative;
  display: inline-block;
  width: auto;
  max-width: 100%;
}
</style>