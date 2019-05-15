<template>
  <div class="side-wr">
    <div class="menu-block">
      <span @click="openLockMenuSide" v-if="blockMenu"><icon name="lock" /></span>
      <span @click="lockMenuSide" v-if="openkMenu"><icon name="lock-open" /></span>
    </div>
    <div @mouseover="showSidebar" v-if="showSideHover" class="event-wr"></div>
    <transition name="slideRight">
      <div v-if="isShowSideBar" class="sidebar" @mouseleave="hideSideBar">
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
      isShowSideBar: false,
      blockMenu: false,
      openkMenu: true,
      showSideHover: true
    };
  },
  methods: {
    ...mapActions(["signOut"]),
    lockMenuSide() {
      this.showSideHover = false
      this.blockMenu = true,
      this.openkMenu = false
    },
    openLockMenuSide() {
      this.showSideHover = true
      this.blockMenu = false,
      this.openkMenu = true
    },
    showSidebar() {
      this.isShowSideBar = true;
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
  z-index: 991;
  .menu-block {
    position: fixed;
    z-index: 999;
    right: 45px;
    top: 55px;
    opacity: 0.1;
    transition: all 0.6s ease-in;
    svg {
      cursor: pointer;
    }
    &:hover {
      opacity: 0.8;
      transition: all 0.4s ease-in;
    }
  }
  .event-wr {
    height: 100%;
    width: 40px;
    position: fixed;
    right: 0;
  }
  .sidebar {
    z-index: 990;
    width: 130px;
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
        padding: 15px 5px;
        a {
          text-decoration: none;
          color: #fff;
          font-size: 12px;
          margin-left: 5%;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 1px;
        }
      }
    }
  }
}
</style>

