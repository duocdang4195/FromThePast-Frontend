<template>
  <div class="search-wr">
    <v-text-field v-model="keyword" @keydown.enter.prevent="searchData" label="Search" solo></v-text-field>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    ...mapActions(['searchAll']),
    searchData() {
      this.searchAll({keyword: this.keyword}).then(res => {
        if(res.ok) {
          this.$router.push({name: 'search'})
          this.keyword = ''
        }
      })
    }
  }
}
</script>
