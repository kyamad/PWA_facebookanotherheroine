<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>これは配信者用の画面</p>

    <TopicList></TopicList>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopicList from '@/components/TopicList.vue';

// firebaseUtils.tsを呼び出すこと

export default defineComponent({
  name: 'StreamingView',
  components: {
    TopicList
  },
});
</script>
