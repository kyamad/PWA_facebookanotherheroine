<template>
  <div class="commentview">
    <ul class="tab-panel">
      <li class="Tab-A" @click="isSelect('1')" v-bind:class="{'active': isActive === '1'}"><div class="tab-A">コメント</div></li>
      <li class="Tab-B" @click="isSelect('2')" v-bind:class="{'active': isActive === '2'}"><div class="tab-B">おたより</div></li>
    </ul>
    <template v-if="isActive === '1'">
      <div id="tabpage1">
        <ul class="comment">
          <CommentList></CommentList>
        </ul>
      </div>
    </template>
    <template v-else-if="isActive === '2'">
      <div id="tabpage2">
        <ul class="Letter">
          <LetterList></LetterList>
        </ul>
      </div>
      <!--<div class ="reportsuccess">
        <div class ="sucmsg">通報完了しました</div>
      </div>-->
    </template>
    <div class="CommentAddfld">
      <button v-on:click="addComment">送信</button>
      <input class="CommentText" type="text" v-model="writeComment">
    </div>
  </div>
  <!--
  </div>
  <div class="reportfld">
  <div class="nondisp"><p class="nondispnaka">非表示</p></div><div class="userblock"><p class="userblknaka">ブロック</p></div><div class="userreport"><p class="userrptnaka">通報</p></div>
  </div>
  -->
  <!--
  <div class="kiritimer">
    <div class="kirista">開始00:00</div>
    <div class="kiriend">終了01:15</div>
  </div>
  -->
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import CommentList from '@/components/CommentList.vue'
import LetterList from '@/components/LetterList.vue'
import FBRTDB from '../services/FirebaseFunctions';
import store from '../store';
import {useRoute} from 'vue-router'

export default defineComponent({
  name: 'MessagingFunction',
  components : {
    CommentList,
    LetterList
  },
  
  data: function() {
    return {
      isActive : '1',
      username:"",
      userphotoURL:"",
      channelMessage:"",
      writeComment:""
    }
  },

  methods: {

    isSelect: function (num:String) {
      this.isActive = num as string;
    },

    addComment : function(){
      FBRTDB.AddComment(this.writeComment);
      // console.log(store.getters['username']);

      // const 
      //   NOW = new Date(),
      //   yyyy = NOW.getFullYear(),
      //   mm = String(NOW.getMonth() + 1).padStart(2, "0"),
      //   dd = String(NOW.getDate()).padStart(2, "0"),
      //   hh = String(NOW.getHours()).padStart(2, "0"),
      //   hmm = String(NOW.getMinutes()).padStart(2, "0"),
      //   ss = String(NOW.getSeconds()).padStart(2, "0"),
      //   ms = String(NOW.getMilliseconds()).padStart(3, "0");

      // const timeStamp = `${yyyy}/${mm}/${dd} ${hh}:${hmm}:${ss}:${ms}`;
      
      // const db:Database = getDatabase();
      // const RoomDatabaseRef = ref(db ,`RoomBase/${auth.currentUser?.uid}/Comment`);
      
      // push(RoomDatabaseRef, {
      //   "user": auth.currentUser?.uid,  
      //   "name": auth.currentUser?.displayName,
      //   "message":this.writeComment,
      //   "timestamp":timeStamp,
      // });

      this.writeComment = "";
      
    },
  },
  watch: {
  }, 

  created(){
  },

  setup () {
    const route = useRoute();
    const { id } = route.params;

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

.commentview{
  width: 32vw;
}

  .tab-panel{
  width: 100%;
  height: 4vw;
  display: flex;
  font-size: 2.1vw;
  justify-content: center;
  }

  .tab-panel li{
  display: flex;
  width: 50%;
  font-size: 1.3vw;
  text-decoration: none;
  border: 0.17vw solid black;
  border-color: black;
  color: #383635;
  z-index: 0;
  background-color: #EEEEEE;
  cursor: pointer;
  }

  .tab-panel li.active{
    background-color: #FFFFFF;
    border-bottom: 0;
  }

  .Tab-A{
    margin-right: -0.1vw;
  }
  .Tab-B{
    margin-left: -0.1vw;
  }

  .tab-A, .tab-B{
    display: flex;
    margin: auto;
  }

  #tabpage1, #tabpage2 {
  position: relative;
  border: 0.17vw solid black;
  border-top: 0;
  z-index: 0;
  height: 39VW;
  overflow: scroll;
  overflow-x: hidden;
  background-color: #FFFFFF;
  }

  #tabpage1.active, #tabpage2.active {
  display: none;
  }

  /*コメント
  ---------------------------------------*/

.CommentAddfld{
 margin-top: 0.7vw;
 height: 2.5vw;
 width: 100%;
 border: 0.05vw solid;
 display: flex;

}

.CommentText{
 border: 0;
 border-left: 0.1vw solid;
 padding: 0 0 0 0.4vw;
 width: 80%;
 height: 100%;
 font-size: 1vw;

}

.CommentAddfld button{
 padding: 0;
 width: 20%;
 height: 100%;
 font-size: 1vw;
}

</style>
