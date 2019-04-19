<template>
  <div class="side-wr">
    <div @mouseover="showSidebar" class="sidehover"></div>
    <div @mouseleave="hideSideBar" v-if="isShowSideBar" class="sidebar">
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
          <router-link :to="{ name: 'service'}">my services</router-link>
        </div>
        <div class="sidebar__child--elm">
          <router-link :to="{ name: 'my_info'}">my album</router-link>
        </div>
        <div @click="onLogout" class="sidebar__child--elm">
          <router-link :to="{ name: 'login'}">logout</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      isShowSideBar: false
    }
  },
  methods: {
    ...mapActions(['signOut']),
    showSidebar() {
      this.isShowSideBar = true
    },
    hideSideBar() {
      this.isShowSideBar = false
    },
    onLogout() {
      this.signOut();
      this.$router.push({name: 'login'})
    }
  }
}
</script>


<style lang="scss" scoped>
.side-wr{
  display: inherit;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  .sidehover {
    width: 60px;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
  }
  .sidebar {
    z-index: 998;
    width: 200px;
    height: 100%;
    padding-top: 60px;
    position: fixed;
    top: 0;
    right: 0;
    transition: .5s;
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
          color: #b8b7ad;
          font-size: 18px;
          margin-left: 10%;
        }
      }
    }
  }
}
</style>

