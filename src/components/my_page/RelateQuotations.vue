<template>
  <div class="mr-myquote-wr-list">
    <ul>
      <li v-if="quotationsRelation.length === 0">
        <h4 style="text-align: center; width:100%;">You dont have any data yet!</h4>
        <div style="width:100%; text-align:center;">
          <img src="../../assets/images/empty_thinking.svg" style="width:300px;">
        </div>
      </li>
      <li class="mr-myQuotation" v-for="(item, index) in quotationsRelation" :key="index">
        <span class="mr-timer">
          <span class="mr-date">{{ item.updated_at | moment("MMMM Do YYYY")}}</span>
        </span>
        <div class="mr-content">
          <p class="mr-content__content--main">{{ item.content }}</p>
          <p class="rh-interactions">
            <span class="mr-comment-count">
              <span @click="clickShowComment(index)">
                <icon name="comments"/>
              </span>
              {{ item.comments.length }} comments
            </span>
            <span class="mr-likes">
              <span
                @click="clickLike(item)"
                :class="{liked: item.liked === true}"
              >
                <icon name="heart"/>
              </span>
              <span>{{ item.likes.length }}</span>
            </span>
          </p>
          <div class="comment-quotation" v-if="showComment === index" :key="index">
            <textarea
              class="comment-quotation__input"
              v-model="comment"
              name="message"
              placeholder="Write a comment"
              @keydown.enter.prevent="commentStt(item.id, index)"
            ></textarea>
            <div class="btn-submit" @click="commentStt(item.id, index)">comment</div>
          </div>
          <ul class="mr-comment">
            <Comments
              v-for="(listComment, index) in item.comments"
              :key="index"
              :item="listComment"
            />
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Comments from "@/components/emotion/Comments.vue";

export default {
  components: {
    Comments
  },
  props: {
    quotationsRelation: Array
  },
  data() {
    return {
      comment: "",
      showComment: "",
      isClick: false,
      isLike: "",
      countLike: "",
      isClickLike: false
    };
  },
  methods: {
    ...mapActions([
      "getAllMyQuotations",
      "getAllQuotationsRealtions",
      "unLikeQuotations",
      "likeQuotations",
      "commentQuotations"
    ]),
    clickShowComment(i) {
      if (!this.isClick) {
        this.isClick = true;
        this.showComment = i;
      } else {
        this.showComment = "";
        this.isClick = false;
      }
    },
    clickLike(val) {
      if (val.liked === false) {
        this.likeQuotations({ quotation_id: val.id }).then(res => {
          if (res.ok) {
            val.liked = true
            val.likes.length += 1
          }
        });
      } else {
        this.unLikeQuotations({ id: val.id }).then(res => {
          if (res.ok) {
            val.liked = false
            val.likes.length -= 1
          }
        });
      }
    },
    commentStt(id, i) {
      this.commentQuotations({
        quotation_id: id,
        content: this.comment
      }).then(response => {
        if (response.ok) {
          this.quotationsRelation[i].comments.push(response.response.data);
          this.comment = "";
          this.showComment = false;
        }
      });
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
      border: 1px solid #000;
      cursor: pointer;
    }
    .active {
      background: rgba(0, 0, 0, 0.5);
      color: #ffffff90;
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

