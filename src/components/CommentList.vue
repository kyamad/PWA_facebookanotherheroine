<template>
  <!-- <li class="Listener"><p class="lisName"></p><p class="ListenerComment"></p></li> -->
  <li v-for="{key, name, Comment} in chat" :key="key" class="Listener">
    <p class="ListenerName">{{ name }}</p>
    <p class="ListenerComment" @click="test">{{ Comment }}</p>
  </li>
  <!-- これを参考にチャット欄回す
  <section v-for="{ key, name, image, message } in chat" :key="key" class="item">
    <div class="item-image"><img :src="image" width="40" height="40"></div>
    <div class="item-detail">
      <div class="item-name">{{ name }}</div>
      <div class="item-message">
        <nl2br tag="div" :text="message"/>
      </div>
    </div>
  </section> -->
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted} from 'vue';
import FBRTDB from '../services/FirebaseFunctions';
import { getDatabase, get, set , onValue, onChildAdded, Database } from "firebase/database";
import { auth } from "../../FirebaseConfig";


export default defineComponent({
  name: 'CommentList',
  components : {
  },
  
  data: function() {
    return {
    }
  },

  methods: {
    test: function(){
      console.log(this.chat);
      // chat上に追加が来てるかの確認a
    }
  },

  watch: {
  }, 

  setup () {
    
    const chat:any = ref([]);
    
    FBRTDB.LiverReceptionComment();
    console.log(FBRTDB.chatSnapShot);
    chat.value.push(...FBRTDB.chatSnapShot);
    console.log(chat.value);
    
    return {
      chat,
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
