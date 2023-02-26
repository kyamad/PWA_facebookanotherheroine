<template>
  <template v-if="isActive === 'LetterSummary'">
    <li v-for="{key, name, Text} in LetterList" :key="key" class="letter" @click="isSelect('LetterOpen',name,Text)">
      <div class ="LetterOverview">
        <p class="LetterName">{{ name }}</p>
        <div class="LetterText">
          <p class="TextOverview">{{ Text }}</p>
        </div>
      </div>
    </li>
  </template>
  
  <template v-if="isActive === 'LetterOpen'">
    <div id="LetterDetail">
      <div class="BackSummary" @click="isSelect('LetterSummary', '', '')">&lt戻る</div>
      <div class="LetterContent">
        <p class="FullLetterName">{{ LetterName }}</p>
        <p class="FullLetterText">{{ LetterText }}</p>
      </div>
    </div>
  </template>
</template>

<script lang="ts">
import { issuedAtTime } from '@firebase/util';
import { defineComponent } from 'vue';
import FBRTDB from '../services/FirebaseFunctions';

export default defineComponent({
  name: 'LetterList',
  data: function() {
    return{
      isActive:"LetterSummary",
      LetterName:"",
      LetterText:""
    }
  },
  methods: {
    isSelect: function (Select:String, name:string, Text:string) {
      this.isActive = Select as string;
      this.LetterName = name as string;
      this.LetterText = Text as string;
    },
  },

  setup () {

    return {
      LetterList: FBRTDB.LiverReceptionLetter(),
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

/*一覧
  ---------------------------------------*/

.letter{
  height: 5vw;
  font-size: 1vw;
  cursor: pointer;
}

.LetterOverview{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  border-bottom: 0.2vw solid #cccccc;
}

.LetterName{
  padding-left: 0.5vw;
  width: 20%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.LetterText{
  width: 80%;
  height: 80%;
  margin: auto 0;
  border-left: 0.3vw solid; 
  text-align: left;
  display: flex;
  align-items: center;
}

.TextOverview{
  display: -webkit-box;
  margin:0.5vw;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
}

/*詳細
  ---------------------------------------*/

#LetterDetail{
  position: relative;
  z-index: 0;
  width: 32vw;
  height: 39VW;
  overflow: scroll;
  overflow-x: hidden;
  background-color: #FFFFFF;
  text-align: left;
}

.BackSummary{
  margin: 0.66vw auto 0.66vw 0.2vw;
  cursor: pointer;
  font-size: 1.1vw;
}

.FullLetterName{
  font-size: 1.3vw;
  padding: 1vw 0 0.8vw 0.75vw;
  border-top: 0.2vw solid #686868;
  overflow: hidden;
}

.FullLetterText{
  height: 30VW;
  border-top: 0.2vw solid #686868;
  padding: 1vw 0.5vw 0.5vw 0.75vw;
  font-size: 1.5vw;
  overflow: scroll;
  word-break: break-all;
}

</style>
