<template>
  <div class="mr-section">
    <div class="blog-sidebar">
      <div class="mr-sidebar">
        <h4 class="mrg-btm-20">Emotions</h4>
        <ul class="categories">
          <li>
            <a href="#">
              <i class="mr-circle-mark">&#9675;</i>Happiness
              <span>(40)</span>
            </a>
            <ul class="mr-sub-cat">
              <li>
                <a href="#">Laetus</a>
              </li>
              <li>
                <a href="#">Felix</a>
              </li>
              <li>
                <a href="#">Beatitudo</a>
              </li>
              <li>
                <a href="#">Sublime Beatitudo.</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="mr-circle-mark">&#9675;</i>Sadness
              <span>(35)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="mr-circle-mark">&#9675;</i>Anger
              <span>(53)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="mr-circle-mark">&#9675;</i>Surprise
              <span>(30)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="mr-circle-mark">&#9675;</i>Fear
              <span>(24)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="mr-circle-mark">&#9675;</i>Disgust
              <span>(19)</span>
            </a>
          </li>
        </ul>
        <!-- /categories -->
      </div>
      <!-- /sidebar-widget -->

      <div class="mr-sidebar">
        <h4 class="mr-cat-2">Seasons</h4>
        <ul class="categories">
          <li>
            <a href="#">
              Jan
              <span>(40)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Feb
              <span>(35)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Mar
              <span>(53)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Apr
              <span>(40)</span>
            </a>
          </li>
          <li>
            <a href="#">
              May
              <span>(35)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Jun
              <span>(53)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Jul
              <span>(40)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Aug
              <span>(35)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Sep
              <span>(53)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Oct
              <span>(40)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Nov
              <span>(35)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Dec
              <span>(53)</span>
            </a>
          </li>
        </ul>
        <!-- /categories -->
      </div>
      <!-- /sidebar-widget -->
    </div>
    <!-- /column -->

    <div class="mr-blog-content">
      <div class="mr-emotion-view">
        <div class="blog-wrapper" v-if="getAllMyQuotationsCreateByID" v-cloak>
          <div class="blog-img">
            <img class="img-responsive" :src="getAllMyQuotationsCreateByID.image" alt>
          </div>
          <!-- blog-img -->

          <div class="mr-post-content">
            <h3 class="mr-post-tittle">
              <a href="#">{{ getAllMyQuotationsCreateByID.title }}</a>
            </h3>

            <div class="mr-post-meta">
              <p>
                By
                <span>{{ getAllMyQuotationsCreateByID.user.name }}</span>
                <span class="pdd-horizon-5">/</span>
                <i class="ti-time pdd-right-5"></i>
                <span>{{ getAllMyQuotationsCreateByID.updated_at | moment("dddd, MMMM Do YYYY")}}</span>
                <span class="pdd-horizon-5">/</span>
                <i class="ti-comment pdd-right-5"></i>
                <a href="#">{{ getAllMyQuotationsCreateByID.comment.length }} Comments</a>
              </p>
            </div>
            <p
              class="mr-writing-content"
              v-html="getAllMyQuotationsCreateByID.content"
            >{{ getAllMyQuotationsCreateByID.content }}</p>
            <div class="mr-action-area">
              <div class="share mrg-top-50">
                <h5 class="mrg-btm-15">Share Post :</h5>
                <div class="social-icon mrg-top-15">
                  <a href="#" class="btn btn-icon facebook border no-border circle text-gray">
                    <i data-v-715ff4e2 class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="btn btn-icon twitter border no-border circle text-gray">
                    <i data-v-715ff4e2 class="fab fa-twitter"></i>
                  </a>
                  <a href="#" class="btn btn-icon instagram border no-border circle text-gray">
                    <i data-v-715ff4e2 class="fab fa-instagram"></i>
                  </a>
                  <a href="#" class="btn btn-icon google border no-border circle text-gray">
                    <i data-v-715ff4e2 class="fab fa-google-plus-g"></i>
                  </a>
                </div>
                <!-- /social-icon -->
                <div class="mr-action-btn">
                  <button class="btn btn-lg btn-style-2 mr-book-service" @click="orderEmotion">Book service</button>
                  <button class="btn btn-lg btn-style-2 mr-write-post" @click="goTo">Write</button>
                </div>
              </div>
              <!-- /share -->
            </div>
            <!-- /post-bottom -->
          </div>
          <!-- /post-content -->

          <div class="mr-comment-wrapper mrg-top-50" v-if="getAllMyQuotationsCreateByID.comment">
            <h3 class="mrg-btm-40">Comments( {{ getAllMyQuotationsCreateByID.comment.length }} )</h3>
            <Comments v-for=" (comment, index) in getAllMyQuotationsCreateByID.comment" :key="index" :item="comment"/>
            <!-- /comment -->
          </div>
          <!-- /comment-wrapper -->
          <div class="form-group mr-cmnt-wr">
            <textarea
              v-model="content"
              class="form-control"
              name="message"
              placeholder="Write a comment"
              @keydown.enter.prevent="submitComment"
            ></textarea>
          </div>
          <!-- form-group -->
          <div class="clearfix text-right">
            <button class="mr-submitBtn" @click="submitComment">SUMBIT</button>
          </div>
          <!-- /clearfix -->
        </div>
        <!-- blog-wrapper -->
      </div>
      <!-- /blog-post -->
    </div>
    <!-- /column -->
  </div>
  <!-- ./.mr-section  -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Comments from '@/components/emotion/Comments.vue'

export default {
  components: {
    Comments
  },
  data() {
    return {
      emotion_id: "",
      content: "",
      userName: "",
      testObj: {
        background: "red"
      }
    };
  },
  created() {
    const id = this.$route.params.id;
    this.getMyEmotionsByID({ id });
  },
  computed: {
    ...mapGetters(["getAllMyQuotationsCreateByID"])
  },
  methods: {
    ...mapActions(["getMyEmotionsByID", "createCommentEmotions"]),
    submitComment() {
      this.createCommentEmotions({
        emotion_id: Number(this.$route.params.id),
        content: this.content
      }).then(res => {
        if (res.ok) {
          this.getAllMyQuotationsCreateByID.comment.push(res.data);
          this.content = "";
        }
      });
    },
    goTo() {
      this.$router.push({name: 'Emotion_write'})
    },
    orderEmotion() {
      this.$router.push({name: 'checkout'})
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
ul {
  padding: 0;
  margin: 0;

  li {
    list-style: none;
  }
}
.mr-section {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100vw;
  max-width: 1170px;
  min-width: 1080px;
  margin-left: calc((100vw - 1170px) / 2);
  padding-top: 100px;
  color: #333;
  font-family: "IBM Plex Sans", sans-serif !important;
  font-weight: 300;
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
      }
      .mr-action-area {
        position: relative;
        display: inline-block;
        width: 100%;
        h5 {
          position: relative;
          text-transform: uppercase;
          font-family: "Montserrat", sans-serif;
          font-size: 14px;
          letter-spacing: 1px;
        }
        .social-icon {
          position: relative;
          display: inline-block;
          .btn-icon {
            position: relative;
            display: inline-block;
            width: 47px;
            height: 47px;
            line-height: 46px;
            padding: 0;
            border: 0;
            border-radius: 50%;
            margin-right: 10px;
            text-align: center;
            transition: all 0.4s ease-in-out;
            -webkit-transition: all 0.4s ease-in-out;
            &:hover {
              color: #fff;
            }
          }
          .facebook {
            &:hover {
              background-color: #3b579d;
            }
          }

          .twitter {
            &:hover {
              background-color: #2caae1;
            }
          }
          .instagram {
            &:hover {
              background-color: #5d4a3b;
            }
          }
        }
        .mr-action-btn {
          button {
            padding: 15px 35px;
            @extend %default-button;
          }
        }
      }
    }
    .mr-comment-wrapper {
      position: relative;
      display: inline-block;
      width: 100%;
      margin-top: 50px;
      h3 {
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: 300;
        margin-bottom: 25px;
      }
    }
    .mr-cmnt-wr {
      textarea {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 75px;
        padding: 15px;
        margin-top: 30px;
        font-size: 13px;
        color: #777;
        border: 1px solid #ddd;
        border-radius: 0;
      }
    }
    .mr-submitBtn {
      @extend %default-button;
      padding: 15px 35px;
      margin-top: 20px;
      float: right;
    }
  }
  a {
    color: #777;
    text-decoration: none;
    &:hover {
      text-decoration: none;
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
.mr-like {
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: right;

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
  .mr-like-btn {
    &:hover {
      color: #ff4848;
    }
  }
  .mr-dislike-btn {
    &:hover {
      color: #5e5e5e;
    }
  }
}
.mr-action-area {
  .social-icon {
    position: relative;
    display: inline-block;
    float: left;
  }
  .mr-action-btn {
    position: relative;
    display: inline-block;
    float: right;
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
</style>