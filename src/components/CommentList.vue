<template>
  <!-- <li class="Listener"><p class="lisName"></p><p class="ListenerComment"></p></li> -->
  <li v-for="{key, name, Comment} in chat" :key="key" class="Listener">
    <p class="ListenerName">{{ name }}</p>
    <p class="ListenerComment">{{ Comment }}</p>
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
import { defineComponent} from 'vue';
import { onMounted } from 'vue';
import { ref } from 'vue';
import FBRTDB from '../services/FirebaseFunctions';

export default defineComponent({
  name: 'CommentList',
  components : {
  },
  
  data: function() {
    return {
      // chat:[]
    }
  },

  methods: {
  },

  watch: {
  }, 

  setup () {

    const chat = ref([]);

    // そもそもルームベースの取得ルートは配信者のチャット欄に対して固有の値を割り振り、それを取得したい
    // →これを実現するためにはどうしたらいいか？
    // 合わせて個別URL発行の方法も知る必要がある気がする

    onMounted(() => {
      const DDB = FBRTDB.LiverReceptionComment();
      console.log("DDB:",DDB)
    })

    return {
      chat
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
