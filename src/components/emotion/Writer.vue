<template>
    <div class="writer-wr">
      <BecomeWriter />
      <EmotionWrite />
    </div>
</template>

<script>
  import BecomeWriter from '@/components/service/become_writer.vue';
  import EmotionWrite from '@/components/emotion/Emotion_write.vue';
  export default {
    components: {
      BecomeWriter,
      EmotionWrite
    }
  }
</script>

<style lang="scss" scoped>
  
</style>
