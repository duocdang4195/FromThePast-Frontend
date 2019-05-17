<template>
  <div class="mr-postcntn_user">
    <span class="mr-postcntn_user_avat" v-text="showNameAvt(item.name)"></span>
    <span class="mr-postcntn_user_id">{{ item.email }}</span>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  created() {
    console.log('item', item)
  },
  computed: {
    stringToHslColor() {
      const str = this.item.name;
      var hash = 0;
      for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      var h = hash % 360;
      return `hsla(${h},80%, 30%)`;
    }
  },
  methods: {
    showNameAvt(str) {
      let textFirst = str.slice(0, 1).toUpperCase();
      return textFirst;
    }
  }
}
</script>

<style lang="scss" scoped>
  .mr-postcntn_user {
  position: relative;
  display: flex;
  margin-bottom: 15px;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;

  &_avat {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #009988;
    text-align: center;
    line-height: 48px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
  }
  &_id {
    position: relative;
    display: inline-block;
    width: calc(100% - 60px);
    margin-left: 10px;
  }
}
</style>


