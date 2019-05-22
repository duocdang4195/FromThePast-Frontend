<template>
  <div class="v-content__recomment_list">
    <div class="mr-section">
      <div class="blog-sidebar">
        <div class="mr-sidebar">
          <h4 class="mrg-btm-20">Emotions</h4>
          <ul class="categories">
            <li v-for="(item, index) in getListTags" :key="index">
              <a @click="searchTag(item.tag)" href="#">
                <i class="mr-circle-mark">&#9675;</i>{{ item.tag }}
                <span>(  {{ item.count }}  )</span>
              </a>
            </li>
          </ul>
          <!-- /categories -->
        </div>
        <!-- /sidebar-widget -->
      </div>
      <!-- /column -->

      <div class="mr-blog-content">
        <div class="blog-post single-post mr-search-result">
          <div class="mr-text-result">
            <ul>
              <li v-for="(item) in getListEmotionTagsRelate" :key="item.id">
                <h5 class="mr-post-ttl">{{ item.title }}</h5>
                <div class="mr-postcntn" >
                  <span @click="goto(item.id)" class="mr-postcntn-img" :style="getBackground(item.image)"></span>
                  <p
                    class="mr-postcntn-text"
                    v-html="strip_tags(item.content).substr(0,300) + (strip_tags(item.content).length > 400 ? '...' : '')"
                  ></p>
                </div>
                <p class="mr-post-author">
                  <span>{{ item.user.username }}</span>
                </p>
              </li>
            </ul>
          </div>
          <!-- ./. mr-text-result -->
        </div>
        <!-- /blog-post -->
      </div>
      <!-- /column -->
    </div>
    <!-- /row -->
  </div>
  <!-- /container -->
  <!-- /Blog Single Left Sidebar -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  created() {
    console.log("getListTags", this.getListEmotionTagsRelate);
  },
  computed: {
    ...mapGetters(["getListTags", "getListEmotionTagsRelate"])
  },
  methods: {
    ...mapActions(["showTag"]),
    getBackground(img) {
      return "background-image:url('" + img + "');";
    },
    strip_tags(content) {
      let t = content.replace(/(<([^>]+)>)/gi, "");
      return t;
    },
    goto(id) {
      this.$router.push(`/Emotion_view/${id}`);
    },
    searchTag(tag) {
      this.showTag({tag: tag}).then(res => {
        if(res.ok) {
          console.log("TCL: searchTag -> res", res)
          this.$router.push({name: 'recommend_list'})
        }
      })
    },
  }
};
</script>


<style lang="scss" scoped>
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
%full-width {
  position: relative;
  display: inline-block;
  width: 100%;
}
ul {
  padding: 0;
  margin: 0;

  li {
    list-style: none;
  }
}
.v-content__recomment_list {
  display: flex;
  width: 100%;
  justify-content: center;
}
.mr-section {
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 15px;
  width: 100vw;
  max-width: 1170px;
  min-width: 970px;
  padding-top: 100px;
  color: #333;
  font-family: "IBM Plex Sans", sans-serif !important;
  font-weight: 300;
  align-self: center;
  .blog-sidebar {
    flex: 1 0 25%;
  }
  .mr-blog-content {
    flex: 1 0 75%;
    margin-bottom: 60px;
    .blog-img {
      width: 100%;
      height: auto;
      img {
        width: 100%;
        height: auto;
      }
    }
    .mr-post-content {
      font-family: "IBM Plex Sans", sans-serif !important;
      font-weight: 300;
      .mr-post-tittle {
        margin-bottom: 10px;
        font-size: 15px;
        font-weight: 300;
        text-transform: uppercase;
        color: #3e3e3e;
        a {
          font-family: "Montserrat", sans-serif;
          text-transform: uppercase;
          color: #3e3e3e;
          letter-spacing: 1px;
        }
      }
      .mr-post-meta {
        position: relative;
        display: inline-block;
        width: 100%;

        p {
          margin-bottom: 25px;
          color: #aeaeae;
          font-weight: 300;
          .pdd-horizon-5 {
            position: relative;
            display: inline-block;
            margin: 0 7px;
            font-size: 10px;
          }
          a.mr-author {
            text-transform: uppercase;
          }
          .mr-date {
            font-size: 12px;
          }
          .mr-cmt-sum {
            color: #aeaeae;
          }
        }
      }
      .mr-writing-content {
        margin-bottom: 65px;
        font-size: 16px;
        line-height: 1.5;

        > p { 
          font-size: 16px;
          > img {
            position:relative;
            display: inline-block;
            width: auto;
            max-width: 100%;
          }
        }
      }
    }
  }
}
.mr-emotion-view {
  .post-content {
    .post-inner-content {
      line-height: 1.8;
      font-size: 14px;
    }
  }
  .mr-cmnt-wr {
    textarea {
      min-height: 100px;
      resize: none;

      &:focus {
        outline: none;
      }
    }
  }
}

.blog-sidebar {
  .mr-sidebar {
    h4 {
      position: relative;
      display: inline-block;
      margin-top: 50px;
      margin-bottom: 15px;
      font-size: 15px;
      font-family: "Montserrat", sans-serif;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    ul.categories {
      padding-left: 0;
      li {
        .mr-sub-cat {
          position: relative;
          display: inline-block;
          margin-left: 30px;
          padding-left: 0;
        }
        a {
          color: #dcd8d8;
          font-size: 13px;
          line-height: 40px;
          height: 40px;
          font-weight: normal;
          display: inline-block;
          width: 100%;
          transition: all 0.4s ease-in-out;
          -webkit-transition: all 0.4s ease-in-out;

          i.mr-circle-mark {
            padding-right: 15px;
            color: #aeaeae;
          }

          span {
            color: #dcd8d8;
            -webkit-transition: all 0.1s ease-in-out;
          }

          &:hover {
            color: #3e3e3e;
            opacity: 1;
            font-size: 15px;
            font-weight: 700;

            span {
              font-size: 16px;
              color: #3e3e3e;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
.mr-search-result {
  @extend %full-width;


  .mr-img-search-result {
    @extend %full-width;
    margin-top: 30px;

    h5 {
      @extend %full-width;
      margin-bottom: 10px;
      font-size: 18px;
      text-transform: capitalize;
      font-family: "IBM Plex Sans", sans-serif;
    }

    ul  {
      @extend %full-width;
      > li  {
        position: relative;
        display: inline-block;
        float: left;
        width: 140px;
        height: 140px;
        cursor: pointer;
        margin-right: 10px;
        margin-bottom: 10px;
        font-family: "IBM Plex Sans", sans-serif;

        > span {
          position: relative;
          display: inline-block;
          width: 140px;
          height: 140px;
          background-size: cover;
          background-position: center center;
        }
      }
    }
    > p {
      @extend %full-width;
      b {
        font-weight: bold;
        cursor:pointer;
      }
    }
  }
  

  .mr-text-result {
    @extend %full-width;
    margin-top: 40px;
    
    ul {
      li {
        @extend %full-width;
        margin-bottom: 15px;
        

        h5 {
          @extend %full-width;
          text-transform: unset;
          color: #333;
          font-size: 16px;
          margin-bottom: 10px;
            font-family: "IBM Plex Sans", sans-serif;
            cursor: pointer;
        }
        .mr-postcntn {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          font-size: 16px;
          color: #525252;
          line-height: 1.5;
          font-family: "IBM Plex Sans", sans-serif;

          &-img {
            cursor: pointer;
            position: relative;
            width: 100px;
            height: 100px;
            background-size: cover;
            background-position:center center;
            border: 1px solid #d9d9d9;
          }
          &-text {
            width: calc(100% - 110px);
            margin-left: 10px;
            height:: 100px;
            overflow-y: hidden;
          }
        }
        .mr-post-author {
          @extend %full-width;
          text-align: right;
          font-style: italic;
          margin-top: 7px;

          > span {
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>