<template>
  <div v-if="isLoaded" v-cloak>
    <div :style="getBackground" class="mr-fullslider">
      <div class="mr-mywriting-wr">
        <div class="my-quotation-tab">
          <div
            @click="showYourQuotation"
            :class="['my-quotation-tab__elm',{ active: yourQuotations }]"
          >Your Emotion</div>
          <div
            @click="showYourQuotationRelation"
            :class="['my-quotation-tab__elm',{ active: !yourQuotations }]"
          >Emotion Relation</div>
        </div>
        <MyEmotion v-if="yourQuotations" :listEmotionsAll="listEmotionsAll"/>
        <EmotionRelate v-if="!yourQuotations" :emotionRelate="emotionRelate"/>
      </div>
    </div>
    <!-- ./. mr-fullslider -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MyEmotion from "@/components/my_page/MyEmotion.vue";
import EmotionRelate from "@/components/my_page/EmotionRelate.vue";
export default {
  components: {
    MyEmotion,
    EmotionRelate
  },
  data() {
    return {
      listEmotionsAll: [],
      emotionRelate: [],
      isLoaded: false,
      yourQuotations: true
    };
  },
  created() {
    this.getAllEmotionsRealtions().then(res => {
      if (res.ok) {
        this.emotionRelate = res.response.data;
      }
    });
    this.getMyWriting().then(res => {
      if (res.ok) {
        this.listEmotionsAll = res.data;
        this.isLoaded = true;
      }
    });
  },
  computed: {
    ...mapGetters(["getBackgound"]),
    getBackground() {
      return (
        "background-image:url('" +
        this.getBackgound.my_quotation_background +
        "');"
      );
    }
  },
  methods: {
    ...mapActions(["getMyWriting", "getAllEmotionsRealtions"]),
    checkImage(image) {
      if (!image) {
        return this.getBackgound.logo_dark;
      } else {
        return image;
      }
    },
    goto(id) {
      this.$router.push(`/Emotion_view/${id}`);
    },
    strip_tags(content) {
      let t = content.replace(/(<([^>]+)>)/gi, "");

      return t;
    },
    showYourQuotation() {
      if (!this.yourQuotations) {
        this.yourQuotations = true;
      }
    },
    showYourQuotationRelation() {
      if (this.yourQuotations) {
        this.yourQuotations = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.action-quotation {
  display: flex;
  align-items: center;
}
.action-quotation__elm {
  flex-basis: 100px;
  margin-right: 7px;

  svg {
    position: relative;
    top: 2px;
  }
}
.my-quotation-tab {
  position: absolute;
  display: flex;
  top: -1px;
  width: 100%;
  align-items: center;
  .my-quotation-tab__elm {
    width: 50%;
    text-align-last: center;
    cursor: pointer;
    font-size: 11px;
    padding: 3px 0;
    background-color: #f1f1f1;
    color: #adadad;
    transition: background 500ms ease-out;
  }
  .active {
    background: rgba(0, 0, 0, 0.5);
    color: #ffffffc2;
    transition: background 500ms ease-out;
  }
}
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
  background-image: url(../../assets/images/bird-3860034_1920.jpg);
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 300;
}
.mr-mywriting-wr {
  position: relative;
  display: inline-block;
  max-width: 1200px;
  height: auto;
  max-height: calc(100vh - 160px);
  margin-top: 20px;
  margin-bottom: 40px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #e3e3e3;
  box-shadow: 1px 3px 5px rgba(180, 180, 180, 0.5);

  ul {
    > li {
      position: relative;
      display: flex;
      width: 100%;
      margin: 0;
      flex-direction: row;
      flex-wrap: wrap;
      border-bottom: 1px dashed #afafaf;
      padding: 25px 0;

      &:last-child {
        border-bottom: 0;
      }

      .mr-post-thumb {
        position: relative;
        display: inline-block;
        width: 200px;
        height: 160px;
        background-size: cover;
        background-position: center center;

        img {
          position: relative;
          display: inline-block;
          object-fit: cover;
          object-position: 100% center;
          width: 200px;
          height: 160px;
        }
      }
      .mr-content {
        width: calc(100% - 200px);
        padding-left: 20px;
        cursor: pointer;

        h5 {
          font-size: 17px;
          color: #333;
          line-height: 1.3;
          margin-bottom: 10px;
          text-transform: uppercase;
        }
        .mr-timer {
          font-style: italic;
        }

        p {
          position: relative;
          width: 100%;
          margin-top: 7px;
          font-size: 16px;
          color: #444;
          line-height: 1.5;
        }
        .mr-content__main--content {
          height: auto;
        }
      }
    }
  }
}
.list__empty {
  position: relative;
  width: 100%;
  padding-top: 70px;
  text-align: center;

  p {
    position: relative;
    display: inline-block;
    width: 100%;
    margin-bottom: 30px;
    font-size: 20px;
    color: #aaa;
  }
  img {
    position: relative;
    width: 250px;
    height: 200px;
  }
}
/*------ S E A R C H -----*/
.mr-search {
  position: absolute;
  background-color: none;
  right: 20px;
  bottom: 20px;

  .mr-icon {
    position: relative;
    display: inline-block;

    img {
      position: relative;
      display: inline-block;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }

  .mr-input-search {
    position: absolute;
    display: inline-block;
    width: 320px;
    height: 35px;
    padding: 7px 15px;
    right: 0;
    bottom: 0;
    background-color: #fff;
    border: 0;
    font-size: 15px;

    &::placeholder {
      font-size: 15px;
    }
  }
}
</style>