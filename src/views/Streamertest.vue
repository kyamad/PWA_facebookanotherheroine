<template>
  <logInheader></logInheader>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import logInheader from '@/components/logInheader.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    logInheader
  },
});
</script>
