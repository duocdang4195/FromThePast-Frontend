<template>
  <div class="page-wr">
    <div v-if="showIconSearch" class="icon-search" @click="showInputSearch">
      <icon name="search"/>
    </div>
    <div class="search-input" v-if="showSearch">
      <transition name="slideRight">
        <v-text-field
          v-model="keyword"
          height="10"
          @keydown.enter.prevent="searchData"
          placeholder="Search"
          solo
        ></v-text-field>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      keyword: "",
      showSearch: false,
      showIconSearch: true
    };
  },
  methods: {
    ...mapActions(["searchAll"]),
    showInputSearch() {
      this.showSearch = true;
      this.showIconSearch = false;
    },
    searchData() {
      this.searchAll({ keyword: this.keyword }).then(res => {
        if (res.ok) {
          this.$router.push({ name: "search" });
          this.keyword = "";
          this.showIconSearch = true;
          this.showSearch = false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.page-wr {
  .icon-search {
    position: fixed;
    right: 15px;
    bottom: 10px;
    cursor: pointer;
    z-index: 999;
    opacity: 0.3;
    transition: all 0.6s ease-in;
    &:hover {
      opacity: 0.8;
      transition: all 0.4s ease-in;
    }
  }
  .search-input {
    width: 80px;
    position: fixed;
    right: 15px;
    bottom: 10px;
    font-size: 14px;
  }
}
</style>

