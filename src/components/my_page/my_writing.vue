<template>
  <div>
    <div :style="getBackground" class="mr-fullslider" >
      <div class="mr-mywriting-wr">
        <ul>
          <li v-if="listEmotionsAll.length === 0">
            <div class="mr-content">
              <h5>No data</h5>
            </div>
          </li>
          <li v-else @click="goto(item.id)"  v-for="(item, index) in listEmotionsAll" :key="index">
            <img class="mr-post-thumb" :src="checkImage(item.image)">
            <div class="mr-content">
              <h5>{{ item.title }}</h5>
              <span class="mr-timer">{{ item.updated_at | moment("MMMM Do YYYY")}}</span>
              <p v-html="strip_tags(item.content).substr(0,300) + (strip_tags(item.content).length > 400 ? '...' : '')" class="mr-content__main--content"></p>
              <div class="action-quotation">

                <div class="action-quotation__elm">
                  <icon name="comments"/>
                  <span> {{ item.comment.length }} Comments</span>
                </div>
                <div class="action-quotation__elm">
                  <icon name="heart"/>
                  <span> {{ item.likes.length }} likes</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- ./. mr-fullslider -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "my_writing",
  data() {
    return {
      listEmotionsAll: []
    };
  },
  created() {
    this.getMyWriting().then(res => {
      if(res.ok) {
        this.listEmotionsAll = res.data
				console.log("TCL: created -> this.listEmotionsAll", this.listEmotionsAll)
      }
    })
  },
  computed: {
    ...mapGetters(["getBackgound"]),
    getBackground() {
      return "background-image:url('"+this.getBackgound.my_quotation_background+"');"
    }
  },
  methods: {
    ...mapActions(["getMyWriting"]),
    checkImage(image) {
      if (!image) {
        return this.getBackgound.logo_dark
      } else {
        return image;
      }
		},
		goto(id){
			this.$router.push(`/Emotion_view/${id}`);
		},
    strip_tags(content)
    {

      let t = content.replace(/(<([^>]+)>)/ig,"");
      
      return t;
    }
  }
};
</script>

<style lang="scss" scoped>
.action-quotation {
  display: flex;
  align-items: center
}
.action-quotation__elm {
  flex-basis: 100px;
  margin-right: 7px;

  svg {
    position: relative;
    top: 2px;
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
  margin-top: 40px;
  margin-bottom: 40px;
  width: 100%;
  padding: 50px;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #e3e3e3;
  box-shadow: 1px 3px 5px rgba(180, 180, 180, 0.5);
  overflow: auto;

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
        height: 200px;
        background-size: cover;
        background-position: center center;
      }
      .mr-content {
        width: calc(100% - 200px);
        padding-left: 20px;
        cursor: pointer;

        h5 {
          font-size: 17px;
          color: #333;
          line-height: 1;
          margin-bottom: 10px;
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
          height: 100px;
          overflow-y: scroll;
        }
      }
    }
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