<template>
 <logInheader></logInheader>
 <main id="mainsection">
    <div class="mainview">
    <div class="liveview">
      <div class="ltitle">
      <form action="" method="get" class="tform">
        <div class="form_item">
        <input type="text" class="fitem" value="配信タイトル未設定(最大20文字)" id="livename" maxlength="20">
        <p class="foitem"></p>
        </div>
      </form>
      <p class="livemove">分経過</p>
      </div>
      <div class="livestartbtn">
      <!--<div class="listerror"><div class="lierrormsg">ライブが始まったら使えるよ</div></div>-->
      <div class="samune">
        <img id="samuneimg" src="../assets/サムネ.jpg">
        <!--<div class="pointfld">
        <div class="pointcount"><div class="nowpoint">現在10000000Pt</div></div>
        <img src="img/aikon.png" alt>
        <img src="img/aikon.png" alt>
        <img src="img/aikon.png" alt>
        </div>-->
        <div class="filter"></div>
        <!--<label class="imgsetbtn">画像を設定<input type="file" accept="image/png, image/jpeg" id="samunechange" style="display:none;"></label>-->
        <VideoComponent></VideoComponent> 
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
      <ul class="llivebtn">
        <li class="kirikae"><span>ラジオに<br>切り替え</span></li>
        <li class="kirikae2"><span>カメラに<br>切り替え</span></li>
        <li class="end"><span>配信終了</span></li>
        <li class="echo"><span>エコー</span></li>
        <li class="odai"><span>お題</span></li>
        <li class="timer"><span>タイマー</span></li>
        <div class="sctimer">
          <ul class="timerlist">
          <li class="timeritem"><div class="time">OFF</div></li>
          <li class="timeritem"><div class="time" data-num="15">00:15</div></li>
          <li class="timeritem"><div class="time" data-num="30">00:30</div></li>
          <li class="timeritem"><div class="time" data-num="60">01:00</div></li>
          <li class="timeritem"><div class="time" data-num="180">03:00</div></li>
          <li class="timeritem"><div class="time" data-num="300">05:00</div></li>
          <li class="timeritem"><div class="time" data-num="900">15:00</div></li>
          <li class="timeritem"><div class="time" data-num="1800">30:00</div></li>
          </ul>
        </div>
        <li class="Link"><span>URLコピー</span></li>
        <li class="mute"><span>ミュート</span></li>
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
    <div class="commentview">
      <div class="TabMenu">
        <ul class="tab-panel">
          <li @click="isSelect('1')" v-bind:class="{'active': isActive === '1'}">コメント</li>
          <li @click="isSelect('1')" v-bind:class="{'active': isActive === '2'}">おたより</li>
        </ul>
        <div class="tab-view"></div>
        <!--<div id="tabpage1">-->
          <div v-if="isActive == '1'"></div>
            <!--<li class="listener"><p class="lisname">ユーザー名ユーザー名</p><p class="listenerkom"></p></li>-->
          <div v-else-if="isActive == '2'"></div>
          <!--
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
          -->
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
        </div>
        <!--
        </div>
        <div class="reportfld">
        <div class="nondisp"><p class="nondispnaka">非表示</p></div><div class="userblock"><p class="userblknaka">ブロック</p></div><div class="userreport"><p class="userrptnaka">通報</p></div>
        </div>
        -->
      </div>
      <!--配信コード入れたらまずここ（レイアウト崩れるので）
      <div class="commentsubmit">
        <input type="submit" class="ssubmit" id="Submit" value="送信">
        <input type="text" class="ccmon" name="username" id="Comment" autocomplete="off">
      </div>
      -->
      <!--
      <div class="kiritimer">
        <div class="kirista">開始00:00</div>
        <div class="kiriend">終了01:15</div>
      </div>
      -->
    </div>
 </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import logInheader from '@/components/logInheader.vue';
import VideoComponent from '@/components/VideoComponent.vue';

export default defineComponent({
  name: 'LiveStreaming',
  components: {
    VideoComponent,
    logInheader
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

  .liveview{
  margin-top: 2vw;
  }

  /*配信画面上部
  ---------------------------------------*/
  .ltitle{
  display: flex;
  align-items:flex-end;
  }

  .form_item{
  margin-bottom: 0.2vw;
  }

  .fitem{
  font-family:none;
  width: 31vw;
  font-size: 1.5vw;
  padding-left: 0.5vw;
  }

  .foitem{
  width: 31vw;
  font-size: 1.6vw;
  margin-top: 0.6vw;
  padding-bottom: 0.5vw;
  border: 0;
  display: block;
  }

  .livemove{
  margin-left: auto;
  margin-bottom: 0.2vw;
  font-size: 1.5vw;
  }

  /*スタート前のフィルター
  ---------------------------------------*/
  .livestartbtn{
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

  .samune{
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
  .llivebtn{
  display: flex;
  list-style: none;
  justify-content: space-between;
  font-size: 1.5vw;
  margin-top: 1vw;
  }

  .llivebtn li{
  display: block;
  text-align: center;
  margin-top: 0.5vw;
  border: 0.15vw solid;
  height: 4.5vw;
  width: 9vw;
  background-color: #FFFFFF;
  cursor: pointer;
  }

  .llivebtn span{
  line-height: 4.5vw;
  vertical-align: middle;
  }

  .llivebtn .mute{
  width: 11vw;
  }

  .llivebtn .kirikae{
  display: block;
  background-color: #f5deb3;
  }

  .llivebtn .kirikae span{
  margin-top: 1vw;
  line-height: 2.2vw;
  }

  .llivebtn .kirikae2{
  display: none;
  background-color: #f5deb3;
  }

  .llivebtn .kirikae2 span{
  margin-top: 1vw;
  line-height: 2.2vw;
  }

  .llivebtn .end{
  display: none;
  background-color: #f5deb3;
  }

  .sctimer{
    display: none;
    position: absolute;
    margin-top: -15vw;
  }


  /*タイマー
  ---------------------------------------*/
  .timerlist{
    overflow: scroll;
    overflow-x: hidden;
    width: 9vw;
    height: 10vw;
  }

  .timerlist .timeritem{
    display: flex;
    margin: auto 0;
    border: 0;
    height: 3vw;
    background-color: #FFFFFF;
    padding: 0;
  }

  .time{
    margin: auto;
  }

  /*コメント,おたより共通
  ---------------------------------------*/
.TabMenu{
width: 32vw;
}

  #tab-panel{
  width: 100%;
  height: 4vw;
  display: flex;
  font-size: 2.1vw;
  justify-content: center;
  }

  .tab-A{
  width: 50%;
  font-size: 1.3vw;
  text-decoration: none;
  border-width: 0.17vw 0.17vw 0vw 0.17vw;
  border-style: solid;
  border-color: black;
  color: #383635;
  z-index: 0;
  background-color: #FFFFFF;
  }

  .tab-B{
  width: 50%;
  font-size: 1.3vw;
  text-decoration: none;
  border-width: 0.17vw 0.17vw 0vw 0.17vw;
  border-style: solid;
  border-color: black;
  color: #383635;
  background-color: #FFFFFF;
  z-index: 0;
  }

  #tabpage1, #tabpage2, #mailopen0{
  position: relative;
  border: 0.17vw solid black;
  z-index: 0;
  height: 39VW;
  overflow: scroll;
  overflow-x: hidden;
  background-color: #FFFFFF;
  }

  /*コメント
  ---------------------------------------*/

  .listener{
    display: none;
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

  .commentsubmit{
  margin-top: 0.7vw;
  height: 2.5vw;
  width: 100%;
  border: 0.05vw solid;
  display: flex;
  }

  .ssubmit{
  padding: 0;
  width: 20%;
  height: 100%;
  font-size: 1vw;
  line-height: 10vw;
  }

  .ccmon{
  border: 0;
  border-left: 0.1vw solid;
  padding: 0 0 0 0.4vw;
  width: 80%;
  height: 100%;
  font-size: 1vw;
  }

  </style>
