<template>
  <div class="menu-wr">
    <div @mouseover="showMenu" class="menuhover"></div>
    <transition name="slide" enter-active-class="slideInDown" leave-active-class="slideOutUp">
      <div @mouseleave="hideMenu" v-if="isShowMenu" class="menu">
        <div class="menu__logo" style="line-height:60px; vertical-align: middle;">
          <router-link :to="{ name: 'home'}">
            <img :src="getBackgound.logo_dark" alt>
          </router-link>
        </div>
        <div class="menu__child">
          <div class="menu__child--elm">
            <router-link :to="{ name: 'home_root'}">home</router-link>
          </div>
          <div class="menu__child--elm">
            <router-link :to="{ name: 'Emotion_list'}">emotion</router-link>
          </div>
          <div class="menu__child--elm">
            <router-link :to="{ name: 'service'}">service</router-link>
          </div>
          <div class="menu__child--elm">
            <router-link :to="{ name: 'Emotion_write'}">become a writer</router-link>
          </div>
          <div class="menu__child--elm">
            <router-link :to="{ name: 'about_list'}">about</router-link>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isShowMenu: false
    };
  },
  computed: {
    ...mapGetters(["getBackgound"]),
  },
  methods: {
    showMenu() {
      this.isShowMenu = true;
    },
    hideMenu() {
      this.isShowMenu = false;
    }
  }
};
</script>


<style lang="scss" scoped>
.menu-wr {
  display: inherit;
  width: 100%;
  position: fixed;
  z-index: 999;
  .menuhover {
    width: 100%;
    height: 60px;
    position: fixed;
    z-index: 999;
    z-index: 999;
  }
  .menu {
    position: fixed;
    z-index: 999;
    width: 100%;
    padding: 0 8%;
    box-shadow: 1px 3px 3px rgba(180, 180, 180, 0.3);
    background-color: rgba(255, 255, 255, 0.9);
    height: 70px;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    color: #3e3e3e;
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: 2px;
    &__logo {
      display: inline-block;
      line-height: 70px;
      width: 140px;
      img {
        position:relative;
        width: 100%;
        top: 15px;
      }
    }
    &__child {
      float: right;
      .menu__child--elm {
        padding: 0 15px;
        display: inline-block;
        a {
          color: #0a0a0a;
          text-decoration: none;
          font-size: 15px;
          display: inline-block;
          line-height: 70px;
          text-transform: uppercase;
          letter-spacing: 3.5;
        }
      }
    }
  }
}
</style>

