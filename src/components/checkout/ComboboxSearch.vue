<template>
  <div class="select-box">
    <v-autocomplete
      v-model="select"
      :items="items"
      :search-input.sync="search"
      append-icon=""
      background-color="#ededed"
      color="#333"
      flat
      hide-no-data
      hide-details
      solo-inverted
    ></v-autocomplete>
  </div>
</template>

<script>
  export default {
    props: {
      items: Object,
    },
    data() {
      return {
        select: null
      }
    }
  }
</script>
