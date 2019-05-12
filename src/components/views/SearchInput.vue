<template>
  <div class="search-wr">
    <v-text-field v-model="search" @keydown.enter.prevent="searchData" label="Search" solo></v-text-field>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      search: ''
    }
  },
  methods: {
    ...mapActions(['searchAll']),
    searchData() {
      console.log('here')
      this.searchAll(this.search).then(res => {
        if(res.ok) {
          console.log('res', res)
        }
      })
    }
  }
}
</script>
