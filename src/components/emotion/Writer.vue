<template>
    <div class="writer-wr">
      <BecomeWriter v-if="getProfile.user.user_level < 60" v-cloak />
      <EmotionWrite v-if="getProfile.user.user_level > 60" v-cloak />
    </div>
</template>

<script>
  import BecomeWriter from '@/components/service/become_writer.vue';
  import EmotionWrite from '@/components/emotion/Emotion_write.vue';
  import { mapGetters } from 'vuex';
  export default {
    components: {
      BecomeWriter,
      EmotionWrite
    },
    computed: {
      ...mapGetters(['getProfile'])
    }
  }
</script>

<style lang="scss" scoped>
  
</style>
