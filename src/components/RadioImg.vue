<template>
  <label class="imgsetbtn">画像を設定<input type="file" accept="image/png, image/jpeg" id="samunechange" style="display:none;"></label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FBRTDB from '../services/FirebaseFunctions';

export default defineComponent({
  name: '',

  setup () {
    return {
      // chat: FBRTDB.LiverReceptionComment(),
    }

  },

});
</script>

<style scoped lang="scss">

body {
  font-family: 'M PLUS Rounded 1c', sans-serif;
}

template {
  display: block;
}

</style>
