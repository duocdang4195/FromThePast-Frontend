<template>
  <div class="home_root">
    <NaviagtionTop />
    <MenuSide />
    <SearchInput />
    <v-content>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </v-content>
  </div>
</template>

<script>
import NaviagtionTop from '@/components/naviagtions/NaviagtionTop.vue'
import MenuSide from '@/components/naviagtions/MenuSide.vue'
import SearchInput from '@/components/views/SearchInput.vue'

export default {
  name: 'home_root',
  components: {
		NaviagtionTop,
    MenuSide,
    SearchInput
	},
}
</script>

<style lang="scss" scoped>
  .home_root {
    position: relative;
    .page-wr {
      z-index: 999;
      position: fixed;
      bottom: 10px;
      width: 100px;
      right: 20px;
    }
  }
</style>


