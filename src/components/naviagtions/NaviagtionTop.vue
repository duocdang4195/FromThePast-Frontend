<template>
  <div class="menu">
    <div class="menu__logo">
      <img src="http://tuquakhu.com/img/logo-dark.svg" alt="">
    </div>
    <div class="menu__child">
      <div class="menu__child--elm">
        <router-link :to="{ name: 'home'}">home</router-link>
      </div>
      <div class="menu__child--elm">
        <router-link :to="{ name: 'Emotion_view'}">emotion</router-link>
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
</template>

<style lang="scss" scoped>
  .menu {
    position: fixed;
    z-index: 999;
    width: 100%;
    padding: 0 8%;
    box-shadow: 1px 3px 3px rgba(180, 180, 180, 0.3);
    background-color: rgba(255, 255, 255, 0.9);
    height: 70px;
    &__logo {
      display: inline-block;
      line-height: 70px;
      width: 140px;
    }
    &__child {
      float: right;
      .menu__child--elm {
        font-size: 18px;
        display: inline-block;
        padding: 0 15px;
        line-height: 70px;
        text-transform: uppercase;
        letter-spacing: 3.5;
      }
    }
  }
</style>

