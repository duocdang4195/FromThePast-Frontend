<template>
  <div class="v-content__recomment_list" v-cloak>
    <div class="mr-section">
      <div class="blog-sidebar">
        <div class="mr-sidebar">
          <h4 class="mrg-btm-20">Emotions Tags</h4>
          <ul class="categories">
            <li v-if="getTags.length === 0">no tag relate</li>
            <li v-else v-for="(item, index) in getTags" :key="index">
              <a @click="searchTag(item.tag.toLowerCase())">
                <i class="mr-circle-mark">&#9675;</i>{{ item.tag }}
                <span>( {{ item.count }} )</span>
              </a>
            </li>
          </ul>
          <!-- /categories -->
        </div>
        <!-- /sidebar-widget -->
      </div>
      <!-- /blog-sidebar -->

      <div class="mr-blog-content">
        <div class="blog-post single-post mr-search-result" >
          <div>
            <div class="mr-blog-content_empty" v-if="showImg.length === 0">
              <strong>OOPS!!!!</strong>
              <p>
                There is no result matched with your requirement.
              </p>
            </div>
            <div class="mr-img-search-result" v-else>
              <h5>Images for result</h5>
              <ul>
                <li v-for="item in showImg">
                  <img :src="item.image" @click="$router.push({ path: '/Emotion_view/'+item.id })" alt="">
                </li>
              </ul>
              <p>
                More images results for
                <b>{{ searchKey }}</b>
              </p>
            </div>
          </div>
          <!-- ./. mr-img-search-result -->
          <div class="mr-text-result">
            <ul>
              <li>
                <h5 class="mr-post-ttl">About</h5>
                <div class="search-content" v-if="getAbout.length === 0">
                  <p class="search-content-no-result">
                    <span>No Results</span>
                  </p>
                </div>
                <div class="search-content" v-else>
                  <div class="mr-postcntn">
                    <div class="mr-postcntn_about" v-for="item in getAbout" v-if="item.content" @click="go_about(item.id)">
                      <h6>
                        <a>{{item.title}}</a>
                      </h6>
                      <p v-html="item.content.substr(0,200) + (item.content.length > 200 ? '...' : '')">{{ item.content }}</p>
                    </div>
                    <!-- ./. mr-postcntn_about -->
                  </div>
                </div>
              </li>

              <li>
                <h5 class="mr-post-ttl">Emotions</h5>
                <div class="search-content">
                  <div class="search-content" v-if="getEmotions.length === 0">
                    <p class="search-content-no-result">
                      <span>No Results</span>
                    </p>
                  </div>
                  <div class="mr-postcntn" v-else>
                    <div class="mr-postcntn_emotion" v-for="item in getEmotions" v-if="item.content" @click="go_emotion(item.id)">
                      <h6 class="mr-postcntn_emotion_ttl">
                        <a>{{ item.title }}</a>
                      </h6>
                      <div class="mr-postcntn_emotion_cntn">
                        <div class="mr-postcntn_emotion_cntn_img">
                          <img class="mr-postcntn_emotion_cntn_img" :src="item.image" alt="">
                        </div>
                        <div class="mr-postcntn_emotion_cntn_text">
                          <div v-html="strip_tags(item.content.substr(0,400) + (item.content.length > 400 ? '...' : ''))"></div>
                          <p class="mr-postcntn_emotion_cntn_info" v-if="item.created_at && item.user">
                            <span class="mr-postcntn_emotion_cntn_info_date">{{item.created_at.substr(0,10)}}</span>
                            <span class="mr-postcntn_emotion_cntn_info_author">{{item.user.name ? item.user.name : item.user.email}}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- ./.mr-postcntn_emotion  -->
                  </div>
                  <!-- ./.mr-postcntn  -->
                </div>
              </li>

              <li>
                <h5 class="mr-post-ttl">Quotations</h5>
                <div class="search-content">
                  <div class="search-content" v-if="getQuotations.length === 0">
                    <p class="search-content-no-result">
                      <span>No Results</span>
                    </p>
                  </div>
                  <div class="mr-postcntn" v-else>
                    <div class="mr-postcntn_quote" v-for="item in getQuotations">
                      <p
                        class="mr-postcntn_quote_cntn"
                      >{{ item.content }}</p>
                      <p class="mr-postcntn_quote_info" v-if="item.user">
                        <span class="mr-postcntn_quote_info_date">{{ item.created_at }}</span>
                        <span class="mr-postcntn_quote_info_author">{{ item.user.name ? item.user.name : item.user.username }}</span>
                      </p>
                    </div>
                    <!-- ./.mr-postcntn_quote  -->
                  </div>
                </div>
              </li>
              <li>
                <h5 class="mr-post-ttl">User</h5>
                <div class="search-content" v-if="getUser.length === 0">
                  <p class="search-content-no-result">
                    <span>No Results</span>
                  </p>
                </div>
                <div class="search-content" v-else >
                  <div class="mr-postcntn">
                    <UserSearch v-for="(item, index) in getUser"  :key="index" :item="item"/>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- ./. mr-text-result -->
        </div>
        <!-- /blog-post -->
      </div>
      <!-- /column -->
    </div>
    <!-- /mr-blog-content -->
  </div>
  <!-- ./.mr-section  -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import UserSearch from '@/components/views/UserSearch.vue'
export default {
  components: {
    UserSearch
  },
  data() {
    return {
    };
  },
  created() {
  },
  computed: {
    ...mapGetters(["getDataSearch"]),
    showImg() {
      if(this.getDataSearch.emotion) {
        let image = this.getDataSearch.emotion.filter(item => {
          return item.image !== ''
        })
        return image
      }
      return []
    },
    searchKey() {
      let keyword = ''
      return this.keyword = this.$store.state.searchKey
    },
    getAbout() {
      if(this.getDataSearch.about) {
        return this.getDataSearch.about
      }
      return []
    },
    getEmotions() {
      if (this.getDataSearch.emotion) {
        return this.getDataSearch.emotion
      }
      return []
    },
    getQuotations() {
      if(this.getDataSearch.quotation) {
        return this.getDataSearch.quotation
      }
      return []
    },
    getUser() {
      if(this.getDataSearch.user) {
        return this.getDataSearch.user
      }
      return []
    },
    getTags() {
      if (this.getDataSearch.tag) {
        return this.getDataSearch.tag
      }
      return []
    },
  },
  methods: {
    ...mapActions(['showTag']),
    searchTag(tag) {
      this.showTag({tag: tag}).then(res => {
        if(res.ok) {
          this.$router.push({name: 'recommend_list'})
        }
      })
    },
    showNameAvt(str) {
      let textFirst = str.slice(0, 1).toUpperCase();
      return textFirst;
    },
    strip_tags(content)
    {

      let t = content.replace(/(<([^>]+)>)/ig,"");
      
      return t;
    },
    go_emotion(id){
      this.$router.push({path: 'Emotion_view/' + id});
    },
    go_about(id){
      this.$router.push({path: 'about_view/'+ id});
    }

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
a {
  text-decoration: none;
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

    .mr-search-result {
      @extend %full-width;

      .mr-search-ttl {
        .mr-inputkeyword {
          @extend %full-width;
          border: 0;
          padding: 10px;
          height: 60px;
          color: #525252;
          font-size: 20px;
          border: 1px solid #f0f0f0;
          font-family: "IBM Plex Sans", sans-serif;

          &::placeholder {
            font-size: 20px;
            color: #525252;
          }
        }
      }

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

        ul {
          @extend %full-width;
          > li {
            position: relative;
            display: inline-block;
            float: left;
            width: 140px;
            height: 140px;
            cursor: pointer;
            margin-right: 10px;
            margin-bottom: 10px;
            font-family: "IBM Plex Sans", sans-serif;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: 100% center;
            }

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
            cursor: pointer;
          }
        }
      }

      .mr-text-result {
        @extend %full-width;
        margin-top: 40px;

        ul {
          li {
            @extend %full-width;
            padding-bottom: 15px;
            border-bottom: 1px solid #d9d9d9;
            margin-bottom: 45px;

            h5 {
              @extend %full-width;
              text-transform: unset;
              color: #333;
              font-size: 22px;
              margin-bottom: 20px;
              font-family: "IBM Plex Sans", sans-serif;
              cursor: pointer;
            }
            .search-content {
              height: auto;
              padding-left: 20px;
              .mr-postcntn {
                font-size: 16px;
                color: #525252;
                line-height: 1.5;
                font-family: "IBM Plex Sans", sans-serif;

                h6 {
                  font-size: 17px;
                }
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
.search-content-no-result {
  text-align: center;
  font-style: italic;
}
.mr-postcntn_about {
  margin-bottom: 25px;
  h6 {
    margin-bottom: 5px;
    a {
      color: #444;
      &:hover {
        border-bottom: 1px solid #999;
      }
    }
  }
  p {
    height: 75px;
    overflow-y: hidden;
  }
}
.mr-postcntn_emotion {
  margin-bottom: 25px;
  &_ttl {
    position: relative;
    display: inline-block;
    width: 100%;
    margin-bottom: 10px;

    a {
      color: #444;
      &:hover {
        border-bottom: 1px solid #999;
      }
    }
  }
  &_cntn {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    &_img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      object-position: 100% center;
    }
    &_text {
      width: calc(100% - 110px);
      margin-left: 10px;
      p {
        margin-bottom: 5px;
        height: 75px;
        overflow-y: hidden;
      }
      .mr-postcntn_emotion_cntn_info {
        position: relative;
        display: inline-block;
        height: auto;
        width: 100%;
        color: #888;
        font-style: italic;

        &_date {
          float: left;
        }
        &_author {
          float: right;
        }
      }
    }
  }
}
.mr-postcntn_quote {
  @extend %full-width;
  margin-bottom: 20px;
  &_cntn {
    margin-bottom: 5px;
  }
  &_info {
    @extend %full-width;
    color: #888;
    font-style: italic;
    &_date {
      position: relative;
      display: inline;
      float: left;
    }
    &_author {
      position: relative;
      display: inline;
      float: right;
    }
  }
}
.mr-postcntn_user {
  position: relative;
  display: flex;
  margin-bottom: 15px;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;

  &_avat {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #009988;
    text-align: center;
    line-height: 48px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
  }
  &_id {
    position: relative;
    display: inline-block;
    width: calc(100% - 60px);
    margin-left: 10px;
  }
}

.mr-blog-content_empty {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 66.66%;
  text-align: center;
  background:url(../../assets/images/search_empty.svg) center center/100% 100% no-repeat;
  strong {
    position: absolute;
    width: 100%;
    top: -10px;
    align-self: flex-start;
    font-size: 30px;
    font-weight: 700;
    color: #888;

  }

  p {
    width: 100%;
    align-self: flex-end;
    margin-top: 20px;
    margin-bottom: 0;
    font-size: 16px;
  }

}
</style>