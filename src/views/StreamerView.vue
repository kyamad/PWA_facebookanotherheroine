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

export default defineComponent({
  name: 'HomeView',
  components: {
    TopicList
  },
});
</script>
