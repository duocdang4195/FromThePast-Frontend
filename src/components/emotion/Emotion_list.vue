<template>
  <div :style="getBackground" class="mr-emotion-list">
    <div class="mr-emotion-list_writem">
      <div class="mr-featured-post">
        <h3>Featured writing</h3>
        <div @click="goto(showPostAdmin[0].id)" class="mr-writing-box" >
          <img :src="showPostAdmin[0].image" alt class>
          <h4>{{ showPostAdmin[0].title }}</h4>
          <p class="rh-date">{{ showPostAdmin[0].updated_at | moment("MMMM Do YYYY")}}</p>
          <div class="mr-content" v-html="delTagImg(showPostAdmin[0].content)">{{ showPostAdmin[0].content }}</div>
        </div>
        <div @click="goto(showPostAdmin[1].id)" class="mr-writing-box" >
          <img :src="showPostAdmin[1].image" alt class>
          <h4>{{ showPostAdmin[1].title }}</h4>
          <p class="rh-date">{{ showPostAdmin[1].updated_at | moment("MMMM Do YYYY")}}</p>
          <div class="mr-content" v-html="delTagImg(showPostAdmin[1].content)">{{ showPostAdmin[1].content }}</div>
        </div>
        <div class="mr-writing-box_row" @click="goto(showPostAdmin[2].id)">
          <img :src="showPostAdmin[2].image" alt class>
          <div>
            <h4>{{ showPostAdmin[2].title }}</h4>
            <p class="rh-date">{{ showPostAdmin[2].updated_at | moment("MMMM Do YYYY")}}</p>
            <div class="mr-content" v-html="delTagImg(showPostAdmin[2].content)">{{ showPostAdmin[2].content }}</div>
          </div>
        </div>
      </div>
      <!-- ./.mr-featured-post  -->

      <div class="mr-article-wr">
        <h3>My emotion</h3>
        <div class="mr-controller" v-if="false">
          <span @click="randomEmotions" class="mr-next">
            Next
            <img src="../../assets/images/chevron-right.svg" alt class>
          </span>
          <span @click="preEmotions" v-if="recentPost.length > 0" class="mr-pre">
            <img src="../../assets/images/chevron-left.svg" alt class>
            Previous
          </span>
        </div>
        <!-- ./.mr-controller -->
        <div class="mr-current-post" @click="goto(contentEmotions.id)">
          <img :src="contentEmotions.image" alt class>
          <div class="mr-header">
            <span class="mr-ttl">{{ contentEmotions.title }}</span>
            <p class="rh-date">{{ contentEmotions.updated_at | moment("MMMM Do YYYY")}}</p>
          </div>
          <!-- ./.mr-header  -->
          <div class="mr-article-cntn" v-html="delTagImg(contentEmotions.content)">{{ contentEmotions.content }}</div>
          <!-- ./.mr-article-cntn -->
        </div>
      </div>
      <!-- ./.mr-article-wr  -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

const validateTagImg = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;
export default {
  data() {
    return {
      contentEmotions: [],
      recentPost: [],
      disable: false
    };
  },
  async created() {
    await this.getMyEmotionsCreate();
    let newArr = this.getAllMyQuotationsCreate.filter(item => {
                                                  return  item.selected !== 1
                                                })
    this.contentEmotions = newArr[
      Math.floor(Math.random() * newArr.length)
    ];

    this.recentPost.unshift(this.contentEmotions);
    setInterval(this.randomEmotions , 15000);
  },
  computed: {
    ...mapGetters(["getAllMyQuotationsCreate", "getBackgound"]),
    showPostAdmin() {
      let postAdmin = this.getAllMyQuotationsCreate.filter(item => {
        return item.selected === 1;
      });
      return postAdmin.slice(0, 3);
    },
    getBackground() {
      return (
        "background-image:url('" +
        this.getBackgound.becomewriter_background +
        "');"
      );
    },
  },
  methods: {
    ...mapActions(["getMyEmotionsCreate"]),
    delTagImg(content) {
      if (content) {
        let t = content.replace(/(<([^>]+)>)/ig,"");
        
        return t;
      }
    },
    goto(id) {
      this.$router.push(`/Emotion_view/${id}`);
    },
    randomEmotions() {
      let newArr = this.getAllMyQuotationsCreate.filter(item => {
                                                  return  item.selected !== 1
                                                })
      this.contentEmotions = newArr[
        Math.floor(Math.random() * newArr.length)
      ];
      this.recentPost.unshift(this.contentEmotions);
    },
    preEmotions() {
      if (this.recentPost.length === 1) {
        this.contentEmotions = this.recentPost[0];
        this.recentPost.shift();
        this.disable = false;
      } else {
        this.disable = true;
        this.contentEmotions = this.recentPost[1];
        this.recentPost.shift();
      }
    }
  }
};
</script>


<style lang="scss">
%full-width {
  position: relative;
  display: inline-block;
  width: 100%;
}
.mr-writing-box {
  cursor: pointer;
}
.mr-emotion-list {
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
  /*	background-image:url('../../assets/images/pexels-photo-1084188-1920.jpg');	*/
  background-color: #f9f9f9;

  .mr-emotion-list_writem {
    position: relative;
    display: flex;
    width: 100%;
    max-width: 1200px;
    max-height: 600px;
    padding: 0 15px;
    align-self: center;

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

    .mr-featured-post {
      position: relative;
      display: flex;
      flex-flow: row wrap;
      width: calc(50% - 20px);
      height: 80vh;
      min-height: 500px;
      max-height: 600px;
      padding: 0px;
      margin-right: 20px;
      flex-direction: row;
      justify-content: flex-start;
      align-content: flex-start;

      h3 {
        position: relative;
        flex: 2 0 100%;
        width: 100%;
        margin-bottom: 20px;
        padding-left: 15px;
        font-weight: 300;
        text-transform: uppercase;

        &:after {
          position: absolute;
          content: "";
          bottom: -2px;
          left: 15px;
          width: 30px;
          height: 1px;
          border-bottom: 1px solid #3e3e3e;
        }
      }

      
      > div {       
        border: 15px solid #fff;
        background-color: #fff;
        box-shadow: 2px 2px 4px 1px rgba(180, 180, 180, 0.4);
        overflow: hidden;
      }

      >.mr-writing-box_row {
        position: relative;
        display: flex;
        flex: 1 0 100%;
        width:100%;
        height: calc(40% - 20px);
        margin-top: 20px;

        > img {
          width:40%;
          height: 180px;
          object-fit: cover;
          object-position: 100% center; 

        }

        > div {
          width: 60%;
          padding-left: 20px;

          h4 {
              position: relative;
              display: inline-block;
              width: 100%;
              margin-top: 15px;
              margin-bottom: 0;
              font-size: 14px;
              font-weight: 400;
              height: 1.5rem;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
          .rh-date {
            text-align: right;
            color: #aaa;
            font-size: 14px;
          }
          .mr-content {
            position: relative;
            text-overflow: ellipsis;
            text-align: justify;
            color: #525252;

            &:after {
              content: "...";
              position: absolute;
              display: inline-block;
              bottom: 0;
              right: 0;
              background-color: #fff;
              font-size: 16px;
              color: #3e3e3e;
            }

            img {
              position: relative;
              display: inline-block;
              width: auto;
              max-width: 100%;
            }
          }
        }
      }
      > .mr-writing-box{
        flex: 1;
        width: calc(50% - 20px);
        height: 60%;

        &:nth-child(2) {
          margin-left: 0;
          margin-right:20px;
        }
        &:nth-child(3) {
          margin: 0;
        }

        > img {
          position: relative;
          display: inline-block;
          object-fit: cover;
          object-position: 100% center;
          width: 100%;
          height: 150px;
        }

        h4 {
          position: relative;
          display: inline-block;
          width: 100%;
          margin-top: 15px;
          margin-bottom: 0;
          font-size: 14px;
          font-weight: 400;
          height: 1.5rem;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }

        .rh-date {
          text-align: right;
          color: #aaa;
          font-size: 14px;
        }
        .mr-content {
          position: relative;
          text-overflow: ellipsis;
          text-align: justify;
          color: #525252;

          &:after {
            content: "...";
            position: absolute;
            display: inline-block;
            bottom: 0;
            right: 0;
            background-color: #fff;
            font-size: 16px;
            color: #3e3e3e;
          }

          img {
            position: relative;
            display: inline-block;
            width: auto;
            max-width: 100%;
          }
        }
      }
    }
  }
  .mr-article-wr {
    position: relative;
    display: inline-block;
    width: 50%;
    height: 80vh;
    min-height: 500px;
    max-height: 600px;
    cursor: pointer;

    h3 {
      position: relative;
      display: inline-block;
      margin-bottom: 20px;
      font-weight: 300;
      text-transform: uppercase;

      &:after {
        position: absolute;
        content: "";
        bottom: -2px;
        left: 0;
        width: 30px;
        height: 1px;
        border-bottom: 1px solid #3e3e3e;
      }
    }

    .mr-controller {
      position: relative;
      display: inline;
      float: right;
      padding: 0;
      background-color: transparent;
      box-shadow: none;

      .mr-pre,
      .mr-next {
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        letter-spacing: 1px;
        color: #777;
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;

        &:hover {
          font-weight: 400;
        }
        img {
          position: relative;
          width: 13px;
          top: 1px;
        }
      }
      .mr-pre {
        float: left;
        margin-right: 20px;
      }
      .mr-next {
        float: right;
      }
    }
    .mr-current-post {
      border: 20px solid #fff;
      background-color: #fff;
      box-shadow: 2px 2px 4px 1px rgba(180, 180, 180, 0.4);
      position: relative;
      height: 100%;
      overflow: hidden;
      text-align: justify;

      > img {
        position: relative;
        display: inline-block;
        object-fit: cover;
        object-position: 100% center;
        width: 100%;
        height: 300px;
      }

      .mr-header {
        @extend %full-width;
        font-size: 18px;
        color: #333;
        margin: 0 0 15px 0;

        span {
          position: relative;
          display: inline-block;
          font-size: 18px;
          font-weight: 400;
        }
        .mr-ttl {
          margin-top: 15px;
          margin-left: 0px;
        }
        .rh-date {
          margin-bottom: 0;
          text-align: right;
          color: #999;
          font-size: 16px;
        }
      }
      .mr-article-cntn {
        position: relative;
        width: 100%;
        line-height: 1.5;
        font-size: 16px;
        overflow-y: scroll;
        text-overflow: ellipsis;
        color: #525252;
        > img {
          width: auto;
          max-width: 100%;
          height: auto;
        }
        > p {
          position: relative;
          dispslay: inline-block;
          width: 100%;
          > img {
            width: auto;
            max-width: 100%;
            height: auto;
          }
        }
      }
    }
  }
}
</style>




