<template>
  <div class="side-wr">
    <div @click="showSidebar" class="btn-menu">
      <input type="checkbox">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <transition name="slideRight">
      <div v-if="isShowSideBar" class="sidebar">
        <div class="sidebar__child">
          <div class="sidebar__child--elm">
            <router-link :to="{ name: 'my_info'}">my info</router-link>
          </div>
          <div class="sidebar__child--elm">
            <router-link :to="{ name: 'my_profit'}">my profit</router-link>
          </div>
          <div class="sidebar__child--elm">
            <router-link :to="{ name: 'my_writing'}">my writing</router-link>
          </div>
          <div class="sidebar__child--elm">
            <router-link :to="{ name: 'my_quotation'}">my quotation</router-link>
          </div>
          <div class="sidebar__child--elm">
            <router-link :to="{ name: 'my_service'}">my booking</router-link>
          </div>
          <div @click="onLogout" class="sidebar__child--elm">
            <router-link :to="{ name: 'login'}">logout</router-link>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isShowSideBar: false
    };
  },
  methods: {
    ...mapActions(["signOut"]),
    showSidebar() {
      this.isShowSideBar = !this.isShowSideBar;
    },
    hideSideBar() {
      this.isShowSideBar = false;
    },
    onLogout() {
      this.signOut();
      this.$router.push({ name: "login" });
    }
  }
};
</script>


<style lang="scss" scoped>
.side-wr {
  display: inherit;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  .btn-menu {
    position: absolute;
    top: 60px;
    right: 30px;
    z-index: 999;
    input {
      display: block;
      width: 40px;
      height: 32px;
      position: absolute;
      top: -7px;
      left: -5px;
      cursor: pointer;
      opacity: 0;
      z-index: 999;
      -webkit-touch-callout: none;
    }
    span {
      display: block;
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      position: relative;
      background: #cdcdcd;
      border-radius: 3px;
      z-index: 1;
      transform-origin: 4px 0px;
      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    }
    span:first-child {
      transform-origin: 0% 0%;
    }
    span:nth-last-child(2) {
      transform-origin: 0% 100%;
    }
    input:checked ~ span {
      opacity: 1;
      transform: rotate(45deg) translate(-22px, -1px);
      background: #232323;
    }
    input:checked ~ span:nth-last-child(3) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }
    input:checked ~ span:nth-last-child(2) {
      transform: rotate(-45deg) translate(-18px, -1px);
    }
  }
  .sidebar {
    z-index: 998;
    width: 200px;
    height: 100%;
    padding-top: 60px;
    position: fixed;
    top: 0;
    right: 0;
    transition: 0.5s;
    background-color: rgba(0, 0, 0, 0.5);
    &__child {
      position: relative;
      display: inline-block;
      top: 70px;
      white-space: nowrap;
      text-transform: uppercase;
      .sidebar__child--elm {
        padding: 15px 10px;
        a {
          text-decoration: none;
          color: #fff;
          font-size: 14px;
          margin-left: 10%;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          letter-spacing: 1px;
        }
      }
    }
  }
}
</style>

