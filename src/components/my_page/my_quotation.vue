<template>
  <div :style="getBackground" class="mr-fullslider" v-cloak v-show="isLoaded">
    <div class="mr-myquote-wr">
      <div class="my-quotation-tab">
        <div @click="showYourQuotation" :class="['my-quotation-tab__elm',{ active: yourQuotations }]">Your Quotation</div>
        <div @click="showYourQuotationRelation" :class="['my-quotation-tab__elm',{ active: !yourQuotations }]">Quotation Relation</div>
      </div>
      <div class="mr-myquote-wr-list">
        <ul>
          <li v-if="listQuotations.length === 0">
              <h4 style="text-align: center; width:100%;">You dont have any data yet!</h4>
              <div style="width:100%; text-align:center;">
                  <img src="../../assets/images/empty_thinking.svg" style="width:300px;">  
              </div>
          </li>
          <li
            v-else
            v-show="yourQuotations"
            class="mr-myQuotation"
            v-for="(item, index) in listQuotations"
            :key="index"
          >
            <span class="mr-timer">
              <span class="mr-date">{{ item.updated_at | moment("MMMM Do YYYY")}}</span>
            </span>
            <div class="mr-content">
              <p class="mr-content__content--main">{{ item.content }}</p>
              <p class="rh-interactions">
                <span class="mr-comment-count">
                  <span @click="clickShowComment(index)"><icon name="comments"/></span>
                  {{ item.comments.length }} comments
                </span>
                <span class="mr-likes">
                  <span @click="clickLike(index, item.id, item.likes)" :class="{liked: isLike === index}"><icon name="heart"/></span>
                  <span>{{ item.likes.length }}</span>
                </span>
              </p>
              <ul class="mr-comment">
                <Comments v-for="(listComment, index) in item.comments" :key="index" :item="listComment" />
              </ul>
              <div class="comment-quotation" v-if="showComment === index" :key="index">
                <textarea 
                  class="comment-quotation__input"
                  v-model="comment"
                  name="message"
                  placeholder="Write a comment"
                  @keydown.enter.prevent="commentStt(item.id, index)"
                ></textarea>
                <div class="btn-submit" @click="commentStt(item.id, index)">
                  comment
                </div>
              </div>
            </div>
          </li>
          <li v-show="!yourQuotations" class="mr-myQuotation" v-for="(list) in quotationsRelation">
          
              <span class="mr-timer">
                <span class="mr-date">{{ list.updated_at | moment("MMMM Do YYYY")}}</span>
              </span>
              <div class="mr-content">
                <p class="mr-content__content--main">{{ list.content }}</p>
                <p class="rh-interactions">
                  <span class="mr-comment-count">
                    <icon name="comments"/>
                    {{ list.comments.length }} comments
                  </span>
                  <span class="mr-likes">
                    <icon name="heart"/>
                    {{ list.likes.length }} likes
                  </span>
                </p>
                <ul class="mr-comment">
                  <li v-for="(listComment, index) in list.comments" :key="index">
                    <span v-if="listComment.user" class="mr-cmt-author">{{ listComment.user.name }}</span>
                    <span
                      class="mr-cmt-time"
                    >{{ listComment.created_at | moment("MMMM Do YYYY, h:mm:ss a")}}</span>
                    <br>
                    <p>{{ listComment.content }}</p>
                  </li>
                </ul>
              </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- ./. mr-fullslider -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
import Comments from '@/components/emotion/Comments.vue'
import classnames from "classnames";
export default {
  name: "component_name",
  components: {
    Comments
  },
  data() {
    return {
      listQuotations: [],
      quotationsRelation: [],
      yourQuotations: true,
      isLoaded: false,
      comment: '',
      showComment: '',
      isClick: false,  
      isLike : '',
      countLike: '',
      isClickLike: false,
    };
  },
  async created() {
    await this.getAllQuotationsRealtions().then(res => {
      if (res.ok) {
        this.quotationsRelation = res.response.data;
      }
    });
    await this.getAllMyQuotations().then(res => {
      if (res.ok) {
        this.listQuotations = res.response.data;
				console.log("TCL: created -> this.listQuotations", this.listQuotations)
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
    ...mapActions(["getAllMyQuotations", "getAllQuotationsRealtions", "unLikeQuotations", "likeQuotations", "commentQuotations"]),
    clickShowComment(i) {
      if(!this.isClick) {
        this.isClick = true
        this.showComment = i
      } else {
        this.showComment = ''
        this.isClick = false
      }
    },
    clickLike(i, id, likes) {
      if(!this.isClickLike) {
        this.isLike = i
        this.isClickLike = true
        this.likeQuotations({ quotation_id: id }).then(res => {
          if(res.ok) {
            likes.length += 1
          }
        })
      } else {
        this.isLike = ''
        this.isClickLike = false
        this.unLikeQuotations({ id: id }).then(res => {
          if(res.ok) {
            likes.length -= 1
          }
        })
      }
    },
    commentStt(id, i) {
      this.commentQuotations({
        quotation_id: id,
        content: this.comment
      }).then(response => {
        if (response.ok) {
          this.listQuotations[i].comments.push(response.response.data)
          this.comment = ''    
          this.showComment = false
        }
      });
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

.rh-interactions {
  svg {
    cursor: pointer;
  }
}

span.liked {
  svg {
    color: red;
  }
}

.comment-quotation {
  &__input {
    outline: none;
    resize: none;
    width: 100%;
    border: 1px solid #ccc;
    padding: 5px;
  }
  .btn-submit {
    width: 110px;
    text-align: center;
    margin: 10px 0;
    padding: 5px;
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
}
.mr-fullslider {
  position: relative;
  display: flex;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background-image: url("../../assets/images/seeds-3412027_1920.jpg");
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 300;
  padding: 0 15px;

  .mr-mystatus {
    position: relative;
    height: auto;
    width: 65%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 60px;
  }
}
.mr-myquote-wr {
  position: relative;
  display: inline-block;
  max-width: 1200px;
  height: calc(100vh - 160px);
  margin-top: 40px;
  margin-bottom: 40px;
  width: 100%;
  padding: 50px 0;
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
      align-items: center;
      border-bottom: 1px dashed #afafaf;
      padding: 25px 0;

      &:last-child {
        border-bottom: 0;
      }

      .mr-post-thumb {
        position: relative;
        display: inline-block;
        width: 200px;
        height: 200px;
        background-size: cover;
        background-position: center center;
      }
      .mr-timer {
        position: relative;
        align-self: flex-start;
        top: 10px;
        width: 150px;
        font-style: italic;
      }
      .mr-content {
        width: calc(100% - 150px);
        padding-left: 20px;
        h5 {
          font-size: 17px;
          color: #333;
          line-height: 1;
          margin-bottom: 10px;
        }
        &:hover h5 {
          font-weight: bold;
        }

        p {
          position: relative;
          width: 100%;
          margin-top: 7px;
          font-size: 16px;
          color: #444;
          line-height: 1.5;
        }
        .mr-content__content--main {
          cursor: pointer;
        }
        .mr-comment > li {
          .mr-cmt-author {
            position: relative;
            display: inline-block;
            margin-right: 7px;
            font-weight: 500;
          }

          &:first-child {
            border-top: 1px dashed #afafaf;
          }
          padding: 15px 0;

          p {
            margin: 0;
          }
        }
      }
    }
  }
}

.mr-myquote-wr {
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
  .mr-myquote-wr-list {
    position: relative;
    display: inline-block;
    width: 100%;
    height: calc(100% - 30px);
    overflow: auto;
    padding: 0 50px;
    word-break: break-word;
  }

  .mr-myQuotation {
    > li {
      .mr-timer {
        font-size: 17px;
        text-transform: capitalize;
      }
      .mr-content {
        padding-bottom: 15px;

        p {
          display: inline-block;
        }

        p.rh-interactions {
          margin-top: 7px;

          .mr-comment-count {
            cursor: pointer;

            .ti-comment-alt {
              position: relative;
              top: 2px;
            }
          }
          .mr-likes {
            position: relative;
            display: inline-block;
            margin-left: 30px;
            .ti-heart {
              position: relative;
              top: 2px;
            }
          }

        }

        ul.mr-comment {
          position: relative;
          display: inline-block;
          width: 100%;
          padding-left: 20px;
          margin: 0;

          > li {
            position: relative;
            display: inline-block;
            width: 100%;
            margin-bottom: 20px;
            line-height: 1.5;
            font-size: 15px;

            .mr-cmt-author {
              font-weight: bold;
            }

            .mr-cmt-time {
              position: relative;
              display: inline-block;
              font-style: italic;
              margin-left: 15px;
            }
            p {
              display: inline-block;
            }
          }
        }
      }
    }
  }
}
</style>