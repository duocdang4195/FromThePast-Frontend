<template>
  <div class="home_root">
    <NaviagtionTop />
    <MenuSide />
    <v-content>
      <router-view></router-view>
    </v-content>
  </div>
</template>

<script>
import NaviagtionTop from '@/components/naviagtions/NaviagtionTop.vue'
import MenuSide from '@/components/naviagtions/MenuSide.vue'

export default {
  name: 'home_root',
  components: {
		NaviagtionTop,
		MenuSide
	},
}
</script>

