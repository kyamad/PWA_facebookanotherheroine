<template>
  <div class="controlview">
    <div class="left">
      <div class="kaito">
       <p class="okaito">大喜利回答</p><input type="submit" class="osubmit" id="OSubmit" value="送信"><input type="text" class="otext" name="ogiriA" id="ogiriA" maxlength="0" autocomplete="off">
      </div>
      <div class="category">
        <p class="hcategory">配信カテゴリ</p>
        <select name="category" class="Category">
          <option value="none"></option>   
          <option value="talk">雑談</option>
          <option value="oogiri">大喜利</option>
          <option value="game">ゲーム</option>
          <option value="tuyudaku">つゆだく</option>
        </select>
      </div>
      <div class="color">
      <div class="font">
        <p class="mojiiro">お題文字色</p>
        <div class="white"></div><div class="black"></div>
      </div>
      <div class="back">
        <p class="odaiiro">お題背景色</p>
        <div class="black"></div><div class="red"></div><div class="Blue"></div>
      </div>
      </div>
    </div>
    <div class="right">
      <div class="mic">
        <p class="bol">マイク音量</p><input type="range" name="volume" class="volume" min="0" max="100" value="60">
      </div>
      <div class="korabo">
        <p class="kahi"><s>コラボ配信</s></p>
        <select name="yesorno" class="yesno">
        <!--<option value="no">受付けない</option>   
        <option value="yes">受付ける</option>-->
        </select>       
      </div>
      <div class="SNS">
        <p class="tweet">SNSで共有</p>
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" 
        data-text="やあ（´・ω・｀) アマテラスで配信中だよ！" data-hashtags="アマテラス" data-lang="ja" data-show-count="false">
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
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

/*ここからヘッダー
=======================================*/

  /*各操作
  ---------------------------------------*/

  .controlview{
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 3vw 0.5vw 6vw 0;
  font-size: 1.7vw;
  }

  /*左側
  ---------------------------------------*/
  .left{
  width: 40%;
  }

  .kaito{
  display: flex;
  margin-bottom: 3vw;
  color: #686868;
  }

  .okaito{
  margin: auto 0;
  }

  .osubmit{
  margin-left: auto;
  padding: 0.1vw 1vw;
  font-size: 1.5vw;
  }

  .otext{
  width: 23.4vw;
  font-size: 1.3vw;
  }

  .category{
  display: flex;
  margin-bottom: 3vw;
  }

  .hcategory{
  margin: auto 0;
  }

  .Category{
  width: 29vw;
  height: 2.5vw;
  font-size: 1.3vw;
  margin-left: auto;
  text-align: center;
  }

  .color{
  display: flex;
  justify-content: space-between;
  color: #686868;
  }

  .font{
  display: flex;
  }

  .mojiiro{
  margin-top: auto;
  }

  .white{
  margin-top: auto;
  margin-Left: 1vw;
  width: 3vw;
  height: 3vw;
  border: 0.01vw solid;
  background-color: #FFFFFF; 
  }

  .black{
  margin-top: auto;
  margin-left: 1vw;
  width: 3vw;
  height: 3vw;
  border: 0.01vw solid;
  background-color: #000;
  }

  .back{
  display: flex; 
  }

  .odaiiro{
  margin: auto 0.5vw 0 1vw; 
  }

  .red{
  margin-top: auto;
  margin-left: 1vw;
  width: 3vw;
  height: 3vw;
  border: 0.01vw solid;
  background-color: #cc0033;   
  }

  .Blue{
  margin-top: auto;
  margin-left: 1vw;
  width: 3vw;
  height: 3vw;
  border: 0.01vw solid;
  background-color: #007bbb; 
  }

  /*右側
  ---------------------------------------*/
  .right{
  width: 40%;
  }

  .mic{
  display: flex;
  margin-bottom: 3.7vw;
  }

  .bol{
  margin: auto 0;
  }

  .volume{
  width: 29vw;
  margin-left: auto;
  }

  .korabo{
  display: flex;
  margin-bottom: 4.5vw;
  }

  .kahi{
  margin: auto 0;
  }

  .yesno{
  width: 29vw;
  height: 2.5vw;
  font-size: 1.3vw;
  margin-left: auto;
  text-align: center;
  }

  .SNS{
  display: flex;
  }

  .tweet{
  margin: auto 0;
  }

  .twitter-share-button{
  margin-left: 3.3vw;
  margin-top: auto;
  }
  
</style>
