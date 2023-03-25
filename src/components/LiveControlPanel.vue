<template>
  <div class="column-control">
    <div class="column-control--left">
      <div class="section--answer">
       <p class="answer--ogiri">大喜利回答</p>
       <input type="submit" @click="SendAnswer(OgiriAnswer,id)" class="AddOgirAnswer" value="送信">
       <input type="text" class="WriteAnswerFld"  v-model="OgiriAnswer" maxlength="100" autocomplete="off">
      </div>
      <div class="section--category">
        <p class="stream-category">配信カテゴリ</p>
        <select name="category" class="select--categories">
          <option value="none"></option>   
          <option value="talk">雑談</option>
          <option value="oogiri">大喜利</option>
          <option value="game">ゲーム</option>
          <option value="tuyudaku">つゆだく</option>
        </select>
      </div>
      <div class="section--colorsettings">
        <div class="section--textcolor">
          <p class="section-heading--mojiiro">お題文字色</p>
          <div class="colortip--white"></div><div class="colortip--black"></div>
        </div>
        <div class="section--bgcolor">
          <p class="section-heading--odaiiro">お題背景色</p>
          <div class="colortip--black"></div><div class="colortip--red"></div><div class="colortip--blue"></div>
        </div>
      </div>
    </div>
    <div class="column-control--right">
      <div class="section--mic-settings">
        <p class="section-heading--mic-volume">マイク音量</p><input type="range" name="volume" class="volume" min="0" max="100" value="60">
      </div>
      <div class="section--collaboration-settings">
        <p class="costream-permission"><s>コラボ配信</s></p>
        <select name="yesorno" class="yesno">
        <!--<option value="no">受付けない</option>   
        <option value="yes">受付ける</option>-->
        </select>       
      </div>
      <div class="section--socialmedias">
        <p class="section-heading--tweet">SNSで共有</p>
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" 
        data-text="やあ（´・ω・｀) アマテラスで配信中だよ！" data-hashtags="アマテラス" data-lang="ja" data-show-count="false">
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {useRoute} from 'vue-router';
import FBRTDB from '../services/FirebaseFunctions';

export default defineComponent({
  name:'LiveControlPanel',
  data: function(){
    return{
      OgiriAnswer:""
    }
  },
  methods:{
    SendAnswer(OgiriAnswer:string,id:string){
      FBRTDB.SendAnswer(OgiriAnswer,id);
      this.OgiriAnswer = "";
    },
  },
  setup () {
    const route = useRoute();
    let  id  = JSON.stringify(route.params.id).replace(/"/g, "");
    
    return {
      id,
    }
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

// Scoped CSSなので、body指定は意味を為さない

// body {
//   margin: 0;
//   font-family: 'M PLUS Rounded 1c', sans-serif;
// }


/*ここからヘッダー
=======================================*/

  /*各操作
  ---------------------------------------*/

  .column-control{
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 3vw 0.5vw 6vw 0;
  font-size: 1.7vw;
  }

  /*左側
  ---------------------------------------*/
  .column-control--left{
  width: 40%;
  }

  .section--answer{
  display: flex;
  margin-bottom: 3vw;
  color: #686868;
  }

  .answer--ogiri{
  margin: auto 0;
  }

  .AddOgirAnswer{
  margin-left: auto;
  padding: 0.1vw 1vw;
  font-size: 1.5vw;
  }

  .WriteAnswerFld{
  width: 23.4vw;
  font-size: 1.3vw;
  }

  .section--category{
  display: flex;
  margin-bottom: 3vw;
  }

  .stream-category{
  margin: auto 0;
  }

  .select--categories{
  width: 29vw;
  height: 2.5vw;
  font-size: 1.3vw;
  margin-left: auto;
  text-align: center;
  }

  .section--colorsettings{
  display: flex;
  justify-content: space-between;
  color: #686868;
  }

  .section--textcolor{
  display: flex;
  }

  .section-heading--mojiiro{
  margin-top: auto;
  }

  .section--bgcolor{
  display: flex; 
  }

  .section-heading--odaiiro{
  margin: auto 0.5vw 0 1vw; 
  }

  [class^="colortip--"],
  [class*=" colortip--"] {
    margin-top: auto;
    margin-left: 1vw;
    width: 3vw;
    height: 3vw;
    border: 0.01vw solid;
  }

  .colortip--black{
    background-color: #000;
  }

  .colortip--red{
    background-color: #cc0033;   
  }

  .colortip--blue{
    background-color: #007bbb; 
  }

  .colortip--white{
    background-color: #FFFFFF; 
  }


  /*右側
  ---------------------------------------*/
  .column-control--right{
  width: 40%;
  }

  .section--mic-settings{
  display: flex;
  margin-bottom: 3.7vw;
  }

  .section-heading--mic-volume{
  margin: auto 0;
  }

  .volume{
  width: 29vw;
  margin-left: auto;
  }

  .section--collaboration-settings{
  display: flex;
  margin-bottom: 4.5vw;
  }

  .costream-permission{
  margin: auto 0;
  }

  .yesno{
  width: 29vw;
  height: 2.5vw;
  font-size: 1.3vw;
  margin-left: auto;
  text-align: center;
  }

  .section--socialmedias{
  display: flex;
  }

  .section-heading--tweet{
  margin: auto 0;
  }

  .twitter-share-button{
  margin-left: 3.3vw;
  margin-top: auto;
  }
  
</style>
