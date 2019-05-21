<template>
  <div class="mr-comment">
    <div class="mr-avatar">
      <a v-if="item.user" :style="{background: stringToHslColor}">{{ showNameAvt(item.user.name ? item.user.name : 'Paser') }}</a>
    </div>
    <!-- /avatar -->
    <div class="mr-comment-info">
      <h4 class="name" v-if="item.user" v-cloak>
        <a href="#">{{ item.user.name ? item.user.name : 'Paser' }}</a>
      </h4>
      <p class="mr-content">{{ item.content }}</p>
      <div class="mr-like">
        <button class="mr-like-btn">
          <i class="ti-heart"></i>
        </button>
        <button class="mr-dislike-btn">
          <i class="ti-heart-broken"></i>
        </button>
        <span class="time">{{ item.updated_at | moment("Do YYYY, h:mm:ss a")}}</span>
      </div>
      <!-- /like -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    item: Object
  },
  computed: {
    stringToHslColor() {
      const str = this.item.user ? this.item.user.name : 'Paser';
      var hash = 0;
      for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      var h = hash % 360;
      return `hsla(${h},80%, 30%)`;
    }
  },
  methods: {
    showNameAvt(str) {
      let textFirst = str.slice(0, 1).toUpperCase();
      return textFirst;
    }
  }
};
</script>

<style lang="scss" scoped>
.mr-comment {
  position: relative;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: top;
  border-bottom: 1px dashed #dadada;

  &:nth-child(2) {
    border-top: 1px dashed #dadada;
  }
  &:last-child {
    border-bottom: 0;
  }
  .mr-avatar {
    width: 50px;
    height: 50px;
    a {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 50px;
      border: 1px solid #fceded;
      border-radius: 50%;
      color: #fff;
      font-size: 20px;
      font-weight: 300;
      text-align: center;
      line-height: 48px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
  }
  .mr-comment-info {
    width: calc(100% - 50px);
    padding-left: 20px;
    .name {
      margin-bottom: 20px;
      font-family: "Montserrat", sans-serif;
      font-weight: 300;
      letter-spacing: 1px;
      font-size: 13px;
      text-transform: uppercase;
      color: #3e3e3e;
    }
    .mr-content {
      margin-bottom: 0;
    }
    .mr-like {
      margin-top: 10px;
      padding-right: 15px;
      color: #888;
    }
  }
}
</style>


