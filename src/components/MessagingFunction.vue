<template>
  <div class="commentview">
      <!--コメント、おたより一覧と内容は別componentsにする-->
    <ul class="tab-panel">
      <li class="Tab-A" @click="isSelect('1')" v-bind:class="{'active': isActive === '1'}"><div class="tab-A">コメント</div></li>
      <li class="Tab-B" @click="isSelect('2')" v-bind:class="{'active': isActive === '2'}"><div class="tab-B">おたより</div></li>
    </ul>
    <template v-if="isActive === '1'">
      <div id="tabpage1">
        <ul class="comment">
          <li class="listener"><p class="lisname"></p><p class="listenerkom"></p></li>
        </ul>
      </div>
    </template>
    <template v-else-if="isActive === '2'">
      <div id="tabpage2">
        <ul class="otayori">
          <li class="mail">
            <a href="#mailopen0" class ="honbun"><p class="mainame">ユーザー名ユーザー名</p>
              <div class="mailarea">
                <p class="listenermai">複数行の時はline-clampプロパティを使用します。ここに入れる数値が表示される行を表しています。（3行で隠したい場合は「3」）</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <!--
      <div id="mailopen0">
        <div class="open">
          <p class="otaname">おたよりネーム：ユーザー名ユーザー名</p>
          <p class="maildetail">複数行の時はline-clampプロパティを使用します。ここに入れる数値が表示される行を表しています。（3行で隠したい場合は「3」）</p>
        </div>  
      </div>
      -->
      <!--<div class ="reportsuccess">
        <div class ="sucmsg">通報完了しました</div>
      </div>-->
    </template>
    <div class="CommentAddfld">
      <button v-on:click="addComment">送信</button>
      <input class="CommentText" type="text" v-model="writeComment">
    </div>
  </div>
  <!--配信コード入れたらまずここ（レイアウト崩れるので）
  <div class="commentsubmit">
    <input type="submit" class="ssubmit" id="Submit" value="送信">
    <input type="text" class="ccmon" name="username" id="Comment" autocomplete="off">
  </div>
  -->
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
import { onMounted } from 'vue';
import { reactive } from 'vue';
import { getDatabase, ref, get, set , push, onValue, onChildAdded, Database } from "firebase/database";
// import { initializeApp } from "firebase/app";
import { auth } from "../../FirebaseConfig";
// import { serverTimestamp } from 'firebase/database'; 

export default defineComponent({
  name: 'MessagingFunction',
  components : {
  },
  
  data: function() {
    return {
      isActive : '1',
      channelMessage:"",
      writeComment:""
    }
  },

  methods: {

    isSelect: function (num:String) {
      this.isActive = num as string;
    },

    addComment : function(){
      const 
        NOW = new Date(),
        yyyy = NOW.getFullYear(),
        mm = String(NOW.getMonth() + 1).padStart(2, "0"),
        dd = String(NOW.getDate()).padStart(2, "0"),
        hh = String(NOW.getHours()).padStart(2, "0"),
        hmm = String(NOW.getMinutes()).padStart(2, "0"),
        ss = String(NOW.getSeconds()).padStart(2, "0"),
        ms = String(NOW.getMilliseconds()).padStart(3, "0");

      const
        timeStamp = `${yyyy}/${mm}/${dd} ${hh}:${hmm}:${ss}:${ms}`,
        yyyymmdd = String(yyyy) + String(mm) + String(dd);
      
      const db:Database = getDatabase();
      const UserDatabaseRef = ref(db, `UserBase/${auth.currentUser?.uid}/${yyyymmdd}/${NOW.getTime()}`);
      const RoomDatabaseRef = ref(db ,`RoomBase/${auth.currentUser?.uid}`);
      
      push(RoomDatabaseRef, {
        "user": auth.currentUser?.uid,  
        "message":this.writeComment,
        "timestamp":timeStamp,
      });

      push(UserDatabaseRef, {
        "message":this.writeComment,
        Room:"testRoom"
      });
    },
  },
  watch: {
  }, 

  created(){
    
  },
  setup () {

    // 何かがおかしい。
    // vue側を変更→保存でコンパイルが発動するとonChildAddedも発動するのに、
    // WEB上でTOPに行ってまた配信ページを開く　を何度かやるとonChildAddedが発動しなくなる。
    // →1−2回までは大丈夫。
    // Createdだからかと思ってMountedで設定してみたけど問題は同様。
    // コメント送信を試したところ送信成功しても受信できず（onChildAdded自体が発動してないっぽい）
    // リロードでも同様の問題が発生する。methodに入れるべき？でも監視してくれなくない？
    // 関数化してセットアップ時（Created時）に発動指定してみたけどダメ。でもメソッドの方で関数化→セットアップ時発動指定やってない。試す。

    onMounted(() => {
      
      const waitAuth:any = (() => 
        new Promise((resolve:any,reject:any) => {
          let count = 0;
          setInterval(() => {
            count++;
            if(auth.currentUser?.uid != null){
              resolve();
            }else if(count > 20){
              reject();
            }
          },100);
        })
      )();

      waitAuth.then(() => {
        const db:Database = getDatabase();
        const CommentRef = ref(db, `RoomBase/${auth.currentUser?.uid}`)
      
        console.log("mount");
        console.log("CommentRef:",CommentRef , "DB:",db , onChildAdded,`RoomBase/${auth.currentUser?.uid}`);
        
        onChildAdded(CommentRef, (snapshot) => {
          console.log("mount2");
          console.log("key:" + snapshot.key);
          console.log("Val.text:" + snapshot.val().text);
          console.log("Val.author:" + snapshot.val().author);
          console.log("単体:" + snapshot);
        });
      },() => {
        alert("AuthIDが取得できませんでした")
      })

    })
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

  #tabpage1, #tabpage2, #mailopen0{
  position: relative;
  border: 0.17vw solid black;
  border-top: 0;
  z-index: 0;
  height: 39VW;
  overflow: scroll;
  overflow-x: hidden;
  background-color: #FFFFFF;
  }

  #tabpage1.active, #tabpage2.active, #mailopen0{
  display: none;
  }

  /*コメント
  ---------------------------------------*/

.listener{
    display: block;/*通常はblock*/
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

  .mail{
  height: 5vw;
  font-size: 1vw;
  }

  .honbun{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  border-bottom: 0.2vw solid #cccccc;
  }

  .mainame{
  padding-left: 0.5vw;
  width: 20%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  }

  .mailarea{
  width: 80%;
  height: 80%;
  margin: auto 0;
  border-left: 0.3vw solid; 
  text-align: left;
  display: flex;
  align-items: center;
  }

  .listenermai{
  display: -webkit-box;
  margin:0.5vw;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  }

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
