<template>
  <div class="mr-fullslider">
    <div class="mr-mywriting-wr">
      <div class="my-quotation-tab">
        <div @click="showYourQuotation" class="my-quotation-tab__elm active">Your Quotation</div>
        <div @click="showYourQuotationRelation" class="my-quotation-tab__elm">Quotation Relation</div>
      </div>
     <div class="mr-mywriting-wr-list">
       <ul
          v-if="yourQuotations"
          class="mr-myQuotation"
          v-for="(item, index) in listQuotations"
          :key="index"
        >
          <li>
            <span class="mr-timer">
              <span class="mr-date">{{ item.updated_at | moment("dddd, MMMM Do YYYY")}}</span>
            </span>
            <div class="mr-content">
              <p class="mr-content__content--main">{{ item.content }}</p>
              <p class="rh-interactions">
                <span class="mr-comment-count">
                  <i class="ti-comment-alt"></i>
                  {{ item.comments.length }} comments
                </span>
                <span class="mr-likes">
                  <i class="ti-heart"></i>
                  {{ item.likes.length }} likes
                </span>
              </p>
              <ul class="mr-comment">
                <li v-for="(listComment, index) in item.comments" :key="index">
                  <span v-if="listComment.user" class="mr-cmt-author">{{ listComment.user.name }}</span>
                  <span
                    class="mr-cmt-time"
                  >{{ listComment.created_at | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</span>
                  <br>
                  <p>{{ listComment.content }}</p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <ul v-else class="mr-myQuotation" v-for="(item) in quotationsRelation">
          <li>
            <span class="mr-timer">
              <span class="mr-date">{{ item.updated_at | moment("dddd, MMMM Do YYYY")}}</span>
            </span>
            <div class="mr-content">
              <p class="mr-content__content--main">{{ item.content }}</p>
              <p class="rh-interactions">
                <span class="mr-comment-count">
                  <i class="ti-comment-alt"></i>
                  {{ item.comments.length }} comments
                </span>
                <span class="mr-likes">
                  <i class="ti-heart"></i>
                  {{ item.likes.length }} likes
                </span>
              </p>
              <ul class="mr-comment">
                <li v-for="(listComment, index) in item.comments" :key="index">
                  <span v-if="listComment.user" class="mr-cmt-author">{{ listComment.user.name }}</span>
                  <span
                    class="mr-cmt-time"
                  >{{ listComment.created_at | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</span>
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
export default {
  name: "component_name",
  data() {
    return {
      listQuotations: [],
      quotationsRelation: [],
      yourQuotations: true
    };
  },
  created() {
    this.getAllQuotationsRealtions().then(res => {
      if (res.ok) {
        this.quotationsRelation = res.response.data;
      }
    });
    this.getAllMyQuotations().then(res => {
      if (res.ok) {
        this.listQuotations = res.response.data;
      }
    });
  },
  methods: {
    ...mapActions(["getAllMyQuotations", "getAllQuotationsRealtions"]),
    showYourQuotation() {
			if(!this.yourQuotations) {
				this.yourQuotations = true
			}
		},
		showYourQuotationRelation() {
			if(this.yourQuotations) {
				this.yourQuotations = false
			}
    }
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
.mr-mywriting-wr {
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
      .mr-content {
        width: calc(100% - 300px);
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
        .mr-content__content--main {
          cursor: pointer;
        }
      }
    }
  }
}

.mr-mywriting-wr {
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
      background: rgba(0,0,0,0.5);
      color: #ffffff90;
    }
  }
  .mr-mywriting-wr-list {
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