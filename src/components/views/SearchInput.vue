<template>
  <div class="page-wr">
    <div v-if="showIconSearch" class="icon-search" @click="showInputSearch">
      <span class="mr-sns-log">
          <img src="../../assets/images/logo-icon.svg" alt="passness" class="mr-ft-logo">
      </span>
    </div>
    <div class="search-input" v-if="showSearch">
      <transition name="slideRight">
        <v-text-field
          v-model="keyword"
          height="40px"
          @keydown.enter.prevent="searchData"
          background-color="rgba(255,255,255,0.7)"
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
      this.$store.state.searchKey = this.keyword
      this.searchAll({ keyword: this.keyword }).then(res => {
        if (res.ok) {
          this.$router.push({ name: "search_skin" });
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
    width: 300px;
    position: fixed;
    right: 15px;
    bottom: 0px;
    font-size: 14px;

    .v-input__slot {
      background-color: rgba(255,255,255,0.7);
      border-bottom: 1px solid #cecece;
    }

    input {

    }
  }
}

.mr-sns-log {
  position: fixed;
  display: inline-block;
  margin-right: 0px;
  float: right;
  bottom: 20px;
  right: 20px;
}

.mr-sns-log .mr-ft-logo {
  position: relative;
  display: inline-block;
  width: 20px;
  vertical-align: bottom;
}

.mr-ft-logo {
  -webkit-animation: rotate 26s linear infinite;
          animation: rotate 26s linear infinite;
}

@-webkit-keyframes rotate {
  to {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
  }
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
  }
}

@-webkit-keyframes reverse-rotate {
  to {
    transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
    -moz-transform: rotate(-360deg);
    -o-transform: rotate(-360deg);
  }
}

@keyframes reverse-rotate {
  to {
    transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
    -moz-transform: rotate(-360deg);
    -o-transform: rotate(-360deg);
  }
}

</style>

