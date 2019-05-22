<template>
  <div class="mr-myinformation-wr" v-cloak v-show="isLoaded">
    <v-container class="mr-container">
      <div class="mr-myinformation">
        <div class="mr-basicinfo mr-basic-profit">
          <h5>My service</h5>
          <ul class="mr-profit-board">
            <li class="mr-head" v-if="history && history.length > 0">
              <span class="mr-col0">Order code</span>
              <span class="mr-col1">Service</span>
              <span class="mr-col2">Date</span>
              <span class="mr-col3">Fee</span>
              <span class="mr-col4">Status</span>
            </li>
            <li v-for="(item, index) in history " :key="index"  @click="goToOrderDetail(item.id)">
              <span class="mr-col0">
                <span class="number-payment">#{{ item.code }}</span>
              </span>
              <span class="mr-col1">
                <a href="#" v-text="getType(item.type)"></a>
              </span>
              <span class="mr-col2">{{ item.time_end | moment("MMMM Do YYYY") }}</span>
              <span class="mr-col3">{{ item.total_price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) }}</span>
              <span class="mr-col4" v-text="checkStatus(item.state)"></span>
            </li>
            <li class="list__empty" v-if="history.length == 0 && history">
              <h4 style="width:100%; text-align:center">You dont have any data yet!</h4>
              <img src="../../assets/images/empty_thinking.svg">
            </li>
          </ul>
        </div>
        <!-- ./. mr-basicinfo -->
      </div>
      <!-- ./.mr-myinformation  -->
    </v-container>
  </div>
  <!-- -./. mr-myinformation-wr-->
</template>

<script>
import { mapActions } from 'vuex';

export default {
	data(){
		return {
      history: [],
      type: '',
      status: '',
      isLoaded: false      
		}
	},
	async created() {
    let { response } = await this.getOrderDetail();
    this.history = response.data
    this.isLoaded = true;
	},
	methods: {
    ...mapActions(['getOrderDetail']),
    goToOrderDetail(id) {
      this.$router.push(`/order_detail/${id}`);
    },
    getType(type) {
      if(type === 1) {
        return this.type = 'handwriting'
      }
      if(type === 2) {
        return this.type = 'Write'
      }
      if(type === 3) {
        return this.type = 'Emotion '
      }
    },
    checkStatus(state) {
      if(state === '1') {
        return this.type = 'Ordered'
      }
      if(state === '2') {
        return this.type = 'Paying'
      }
      if(state === '3') {
        return this.type = 'Paid'
      }
      if(state === '4') {
        return this.type = 'SAFE with PASNESS'
      }
      if(state === '5') {
        return this.type = 'Moving '
			}
			if(state === '6') {
        return this.type = 'Finish'
			}
			if(state === '999') {
        return this.type = 'Cancel'
			}
			if(state === '998') {
        return this.type = 'Order Error'
      }
		},
	}
}
</script>

<style lang="scss" scoped>
.number-payment {
  color: #333;
  cursor: pointer;
  text-decoration: underline;
}
.mr-myinformation-wr {
  position: relative;
  display: flex;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  flex-direction: row;
  flex-wrap: wrap;
  background: #fff;
  justify-content: center;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 300;

  &:before {
    content: " ";
    position: absolute;
    width: 100vw;
    height: 70px;
    top: 0;
    left: 0;
    background-color: #121212;
  }

  &:after {
    content: " ";
    position: absolute;
    width: 100vw;
    height: 40px;
    bottom: 0;
    left: 0;
    background-color: #fff;
  }
  .mr-container {
    margin: 120px 0 20px 0;
    .mr-myinformation {
      display: flex;
      width: 100%;
      padding: 0px;
      justify-content: center;

      .mr-basic-profit {
        padding-left: 0px;
        width: 100%;

        h5 {
          position: relative;
          display: inline-block;
          margin-bottom: 20px;
          width: 100%;
          font-size: 30px;
          font-weight: 400;
          text-transform: uppercase;
          color: #3e3e3e;
          font-family: "IBM Plex Sans", sans-serif;
          text-align: center;
        }

        .mr-profit-board {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: 0;
          background-color: rgba(255, 255, 255, 0.95);

          .mr-head {
            .mr-col1 {
              text-align: center;
            }
            > span {
              color: #333;
              font-weight: 400;
            }
          }
          > li {
            position: relative;
            display: -webkit-flex;
            display: -moz-flex;
            display: -ms-flex;
            display: -o-flex;
            display: flex;
            width: 100%;
            margin: 0;
            flex-direction: row;
            flex-wrap: wrap;
            text-align: center;
            justify-content: center;

            > span {
              position: relative;
              display: flex;
              flex-direction: column;
              flex: 1 0 auto;
              height: auto;
              margin: 0;
              padding: 10px 0;
              border-bottom: 1px solid #ececec;
              font-size: 14px;
            }

            .mr-col0 {
              width: 220px;

              > a {
                text-decoration: none;
              }
            }
            .mr-col1 {
              width: calc(40% - 220px);
              text-align: left;

              > a {
                color: #333;
                font-size: 14px;
                text-decoration: none;

                &:hover {
                  color: #333;
                }
              }
            }
            .mr-col2 {
              width: 20%;
            }
            .mr-col3 {
              width: 20%;
            }
            .mr-col4 {
              width: 20%;
            }
          }
        }
      }

      .mr-address-list {
        .mr-profit-board {
          li {
            .mr-col1 {
              width: 30%;
            }
            .mr-col2 {
              width: 40%;
            }
            .mr-col3 {
              width: 30%;
            }
          }
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
</style>