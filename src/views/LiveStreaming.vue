<template>
 <logInheader></logInheader>
 <main id="mainsection">
    <div class="mainview">
      <div class="Delivery-Fld">
        <div class="Live-Title">
          <form action="" method="get" class="Live-Title-Form">
            <div class="Live-Title-Form-Item">
              <input type="text" class="Live-Title-Form-Content" value="配信タイトル未設定(最大20文字)" id="Live-Title-Form-Content-Id" maxlength="20">
              <p class="TitleDisplay"></p>
            </div>
          </form>
          <p class="ElapsedTime">分経過</p>
        </div>
        <div class="Streaming-View-Fld">
          <div class="Streaming-View-Screen">
            <!--<div class="pointfld">
            <div class="pointcount"><div class="nowpoint">現在10000000Pt</div></div>
            <img src="img/aikon.png" alt>
            <img src="img/aikon.png" alt>
            <img src="img/aikon.png" alt>
            </div>-->
            <RadioComponent v-if="Radio === true"></RadioComponent>
            <VideoComponent v-if="Radio === false"></VideoComponent> 
          </div>
          <!--<div class="display"><div class="dtitle"></div><div class="dtheme"></div><div class="fldclose">閉じる</div></div>
          <div class="answerfld"><div class="Afld">回答</div><div class="answer"></div><div class="Afldclose">閉じる</div></div>
          <div class="timedisp"><div class="stti"><div class="tstartbtn"><div class="tsbtnnaka">スタート</div></div><div class="timenaka"></div></div>
            <div class="fullrod"><div class="changerod"></div></div>
          </div>-->
        </div>
        <!--<div class="liveEndView">
        <div class="liveEndfld">
          <div class="EndfldTop">
          <p class="Endendmsg">配信終了！</p>
          <div class="endkirinuki">切り抜き</div>
          <a href="/livepage.php" class="Restart">再配信</a>
          </div>
          <div class="Endfld">
          <p class="giftmsg">ギフトをくれたユーザー</p>
          <ul class="givegiftuser">
          <li class="giveuser"><a href="#" class ="guserURL"><img class="giveuserimg" src="img/aikon.png" alt><div class="gusername">ユーザー名ユーザー名</div></a><div class="giftpoint">1500Pt</div></li>
          <li class="giveuser"><a href="#" class ="guserURL"><img class="giveuserimg" src="img/aikon.png" alt><div class="gusername">ユーザー名ユーザー名ユーザー名</div></a><div class="giftpoint">1500Pt</div></li>
          </ul>
          </div>
          <div class="manneriAlert">お疲れさまでした！いい配信だったよ！</div>
        </div>
        </div>-->
        <ul class="Streaming-Control-btn-Fld">
          <li class="ChangeRadio-btn" v-if="Radio === false" @click="ChangeRadioMode()"><span>ラジオに<br>切り替え</span></li>
          <li class="ChangeCamera-btn" v-if="Radio === true" @click="ChangeCameraMode()"><span>カメラに<br>切り替え</span></li>
          <li class="Live-End-btn"><span>配信終了</span></li>
          <li class="Echo-btn"><span>エコー</span></li>
          <li class="Theme-Opne-btn"><span>お題</span></li>
          <li class="Timer-btn"><span>タイマー</span></li>
          <div class="Timer-Object">
            <ul class="Timer-List">
              <li class="Timer-Item"><div class="Select-Time">OFF</div></li>
              <li class="Timer-Item"><div class="Select-Time" data-num="15">00:15</div></li>
              <li class="Timer-Item"><div class="Select-Time" data-num="30">00:30</div></li>
              <li class="Timer-Item"><div class="Select-Time" data-num="60">01:00</div></li>
              <li class="Timer-Item"><div class="Select-Time" data-num="180">03:00</div></li>
              <li class="Timer-Item"><div class="Select-Time" data-num="300">05:00</div></li>
              <li class="Timer-Item"><div class="Select-Time" data-num="900">15:00</div></li>
              <li class="Timer-Item"><div class="Select-Time" data-num="1800">30:00</div></li>
            </ul>
          </div>
          <li class="URL-Copy-btn"><span>URLコピー</span></li>
          <li class="Mute-btn"><span>ミュート</span></li>
        </ul>
        <!--機能的に今はレベルが足りないのでいつか必ず...!!
        <div class="kirinukifld">
        <div class="kiriback">
          <img class="pausebtn" src="img/一時停止ボタン.png" alt>
          <div class="kirikugiri"></div>
          <div class="kirisamune">
          <div class="kirifilter">
            <div class="kiritorifld"><div class="kiritorifldL"></div><div class="kiritorifldR"></div></div>
          </div>
          </div>
          </div>
          <div class="sebtnfld">
          <div class="savebtn">保存</div>
          <div class="kiriendbtn">終了</div>
          </div>
        </div>-->
      </div>
      <MessagingFunction></MessagingFunction>
    </div>
    <LiveControlPanel></LiveControlPanel>
 </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import logInheader from '@/components/logInheader.vue';
import VideoComponent from '@/components/VideoComponent.vue';
import RadioComponent from '@/components/RadioComponent.vue';
import LiveControlPanel from '@/components/LiveControlPanel.vue';
import MessagingFunction from '@/components/MessagingFunction.vue';
import { onMounted } from 'vue';
import firebaseUtils from '../firebaseUtils';

export default defineComponent({
  name: 'LiveStreaming',
  components: {
    VideoComponent,
    RadioComponent,
    logInheader,
    LiveControlPanel,
    MessagingFunction
  },
  data: function(){
    return{
      Radio:true
    }
  },
  methods:{
    ChangeRadioMode(){
      this.Radio = true;
    },
    ChangeCameraMode(){
      this.Radio = false;
    }
  },
  setup () {
    firebaseUtils.onAuthStateChanged();  

    onMounted(() => {
    });
  },
});
</script>

<style scoped lang="scss">
/*全般
=======================================*/

*{
 margin-block-start: 0;
 margin-block-end: 0;
 margin-inline-start: 0;
 margin-inline-end: 0;
 padding-inline-start: 0;
}

body {
  margin: 0;
  font-family: 'M PLUS Rounded 1c', sans-serif;
}

header{
 position: fixed;
 top: 0; left: 0;
 width:100%;
 margin:0 auto;
 background-color: white;
 opacity: 1;
 z-index: 80;
}

  #mainsection{
  padding-top: 5.5vw;
  width: 100%;
  background-color: #f9fcff;
  font-family: 'Kosugi Maru', sans-serif;
  }

  .mainview{
  display: flex;
  justify-content: space-evenly;
  padding-top: 1vw;
  }

  .Delivery-Fld{
  margin-top: 2vw;
  }

  /*配信画面上部
  ---------------------------------------*/
  .Live-Title{
  display: flex;
  align-items:flex-end;
  }

  .Live-Title-Form-Item{
  margin-bottom: 0.2vw;
  }

  .Live-Title-Form-Content{
  font-family:none;
  width: 31vw;
  font-size: 1.5vw;
  padding-left: 0.5vw;
  }

  .TitleDisplay{
  width: 31vw;
  font-size: 1.6vw;
  margin-top: 0.6vw;
  padding-bottom: 0.5vw;
  border: 0;
  display: block;
  }

  .ElapsedTime{
  margin-left: auto;
  margin-bottom: 0.2vw;
  font-size: 1.5vw;
  }

  /*スタート前のフィルター
  ---------------------------------------*/
  .Streaming-View-Fld{
  position: relative;
  width: 60vw;
  height: 33.75vw;
  text-align: center;
  border: 0.15vw solid;
  }

  .filter{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #808080;
  opacity: 0.5;
  }

  .Streaming-View-Screen{
  position: relative;
  background-color: #000;
  overflow: hidden;
  width: 100%;
  height: 100%;
  }

  #samuneimg{
  width: 100%;
  height: 100%;
  }

  /*配信ツール
  --------------------------------------*/
  .Streaming-Control-btn-Fld{
  display: flex;
  list-style: none;
  justify-content: space-between;
  font-size: 1.5vw;
  margin-top: 1vw;
  }

  .Streaming-Control-btn-Fld li{
  display: block;
  text-align: center;
  margin-top: 0.5vw;
  border: 0.15vw solid;
  height: 4.5vw;
  width: 9vw;
  background-color: #FFFFFF;
  cursor: pointer;
  }

  .Streaming-Control-btn-Fld span{
  line-height: 4.5vw;
  vertical-align: middle;
  }

  .Streaming-Control-btn-Fld .Mute-btn{
  width: 11vw;
  }

  .Streaming-Control-btn-Fld .ChangeRadio-btn{
  display: block;
  background-color: #f5deb3;
  }

  .Streaming-Control-btn-Fld .ChangeRadio-btn span{
  margin-top: 1vw;
  line-height: 2.2vw;
  }

  .Streaming-Control-btn-Fld .ChangeCamera-btn{
  background-color: #f5deb3;
  }

  .Streaming-Control-btn-Fld .ChangeCamera-btn span{
  margin-top: 1vw;
  line-height: 2.2vw;
  }

  .Streaming-Control-btn-Fld .Live-End-btn{
  display: none;
  background-color: #f5deb3;
  }

  .Timer-Object{
    display: none;
    position: absolute;
    margin-top: -15vw;
  }


  /*タイマー
  ---------------------------------------*/
  .Timer-List{
    overflow: scroll;
    overflow-x: hidden;
    width: 9vw;
    height: 10vw;
  }

  .Timer-List .Timer-Item{
    display: flex;
    margin: auto 0;
    border: 0;
    height: 3vw;
    background-color: #FFFFFF;
    padding: 0;
  }

  .Select-Time{
    margin: auto;
  }

  </style>
