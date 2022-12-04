<template>
    <ul class="comment">
        <li class="listener"><p class="lisname">ユーザー名ユーザー名</p><p class="listenerkom"></p>あああああああああああああああああああああああああああああああああああああああああああああああ</li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name:'UserComment',
});
</script>

<style scoped lang="scss">

body {
  font-family: 'M PLUS Rounded 1c', sans-serif;
}

.listener{
    display: none;/*通常はblock*/
    text-align: justify;
  }

  .comment li{
  padding: 1vw;
  font-size: 1.25vw;
  list-style: none;
  word-break: break-all;
  border-bottom: 0.2vw solid #cccccc;
  }

  .lisname{
  color: #9a493f;
  margin-bottom: 0.4vw;
  }

</style>
