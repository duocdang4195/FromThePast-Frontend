

<template>
  <div :style="getBackground"  class="mr-serviceList-wr">
    <button class="mr-pre">
      <img @click="previousPage" src="../../assets/images/chevron-left.svg" alt>
    </button>

    <div class="mr-service-wr">
        <div class="mr-serviceList">
          <ul>
            <li v-if="pre">
              <h3>{{ handwrite.title }}</h3>
              <div class="mr-servicntn">
                <p v-html="handwrite.content"> {{ handwrite.content }} </p>
              </div>
              <button @click="bookHandWite" class="mr-bookservice">Book Hand Write</button>
            </li>
            <li v-if="next">
              <h3>{{ letterPrint.title }}</h3>
              <div class="mr-servicntn">
                <p v-html="letterPrint.content"> {{ handwrite.content }} </p>
              </div>
              <button @click="bookPrint" class="mr-bookservice">Book Letter Print</button>
            </li>
          </ul>
        </div>
    </div>
    <!-- ./.mr-service-wr  -->

    <button class="mr-next">
      <img @click="nextPage" src="../../assets/images/chevron-right.svg" alt>
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      handwrite: {},
      letterPrint: {},
      next: false,
      pre: true
    }
  },
  async created() {
    let dataWrite = await this.getHandWrite().then(res => {
      if(res.ok) {
        this.handwrite = res.response.data
      }
    })
    let dataPrint = await this.getLetterPrint().then(res => {
      if(res.ok) {
        this.letterPrint = res.response.data
      }
    })
  },
  computed: {
    ...mapGetters(['getBackgound']),
    getBackground() {
      return "background-image:url('"+this.getBackgound.becomewriter_background+"');"
    }
  },
  methods: {
    ...mapActions(["getHandWrite", "getLetterPrint"]),
    nextPage() {
      this.pre = false
      this.next = true
    },
    previousPage() {
      this.next = false
      this.pre = true
    },
    bookHandWite() {
      this.$store.state.type = '1'
      this.$router.push({name: 'checkout'})
    },
    bookPrint() {
      this.$store.state.type = '2'
      this.$router.push({name: 'checkout'})
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
button::focus {
  outline: none;
  border: none;
}
.mr-serviceList-wr {
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
  background-position: center center;
  background-repeat: no-repeat;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  font-family: "IBM Plex Sans", "sans-serif" !important;
  font-weight: 300;
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
  .mr-pre {
    margin-right: 20px;
    &:focus {
      outline: none;
    }
    > img {
      position: relative;
      width: 50px;
      height: 50px;
    }
  }
  .mr-next {
    margin-left: 20px;
    &:focus {
      outline: none;
    }
    > img {
      position: relative;
      width: 50px;
      height: 50px;
    }
  }
  .mr-service-wr {
    position: relative;
    display: inline-block;
    width: 60vw;
    height: calc(100vh - 80px);
    background-color: rgba(255, 255, 255, 0.9);
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    padding: 60px;
    cursor: pointer;

    .mr-header {
      @extend %full-width;
      font-size: 20px;
      color: #333;
      margin: 0 0 30px 0;
      font-weight: bold;

      span {
        position: relative;
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
      }
      .mr-ttl {
        margin-left: 20px;
      }
    }

    .mr-article-cntn {
      position: relative;
      display: inline-block;
      width: 100%;
      line-height: 1.5;
      font-size: 17px;
    }
  }
}
.mr-serviceList-wr {
  background-image: url("../../assets/images/watchmen-1613267.png");
  .mr-service-wr {
    max-height: calc(100vh - 120px);
    border: 60px solid transparent;
    border-left: 0;
    border-right: 0;
    padding: 0;
  }

  .mr-serviceList {
    @extend %full-width;
    height: 100%;

    ul {
      @extend %full-width;
      margin: 0;
      padding: 0;
      height: 100%;

      li {
        position: relative;
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;
        flex-direction: column;
        height: 100%;

        .mr-serviceList-img {
          flex: 1 0 100%;
          text-align: center;

          img {
            position: relative;
            display: inline-block;
            width: auto;
            max-width: 100%;
          }
        }
        h3 {
          position: relative;
          display: inline-block;
          font-size: 25px;
          font-weight: 700;
          margin-bottom: 10px;
          text-transform: uppercase;
          text-align: center;
        }
        .mr-servicntn {
          flex: 1 0 100%;
          height: calc(100% - 50px);
          margin-top: 0px;
          padding: 0 60px;
          overflow-y: auto;
          p {
            margin-bottom: 0;
          }

          img {
              position: relative;
              display: inline-block;
              max-width: 100% !important;
              width: auto;
            }

          p {
            font-size: 20px;
            line-height: 1.5;
            text-align: justify;
            display: inline-block;
            width: 100%;

            img {
              position: relative;
              display: inline-block;
              max-width: 100%;
              width: auto;
            }
          }
          .ql-align-center img {
              position: relative;
              display: inline-block;
              max-width: 100%;
              width: auto;

          }
        }
        .mr-servicntn img {
          position: relative;
          display: inline-block;
          max-width: 100%;
          width: auto;
          height: auto;
        }
        .mr-bookservice {
          position: relative;
          display: inline-block;
          float: right;
          width: fit-content;
          background-color: #101010;
          color: #fff;
          border: 0;
          font-size: 14px;
          text-transform: uppercase;
          padding: 10px 15px;
          margin-top: 25px;
          order: 2;
          margin-left: auto;
           font-family: "Montserrat", sans-serif;
           letter-spacing: 2px;
        }
      }
    }
  }
}
</style>