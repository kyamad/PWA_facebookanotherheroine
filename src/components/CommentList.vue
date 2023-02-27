<template>
  <ul class="comment">
      <li v-for="{key, name, Comment} in chat" :key="key" class="Listener">
        <p class="ListenerName">{{ name }}</p>
        <p class="ListenerComment">{{ Comment }}</p>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FBRTDB from '../services/FirebaseFunctions';

export default defineComponent({
  name: 'CommentList',

  setup () {

    const CommentUl = document.querySelector("comment")

    return {
      chat: FBRTDB.LiverReceptionComment(),
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

.Listener{
  display: block;/*通常はblock*/
  text-align: justify;
  padding: 1vw;
  font-size: 1.25vw;
  list-style: none;
  word-break: break-all;
  border-bottom: 0.2vw solid #cccccc;
  }

.ListenerName{
  color: #9a493f;
  margin-bottom: 0.4vw;
}

</style>
