<template>
  <div class="Theme-Fld">
    <TalkThemaList v-if="TalkThema === true" @onClick="AddThema"></TalkThemaList>
    <OgiriThemaList v-if="TalkThema === false" @onClick="AddThema"></OgiriThemaList>
    <div class="Theme-Control-btn-Fld">
      <div class="Theme-Fld-Close-btn" @click="ThemeFldClose()">閉じる</div>
      <div class="Random-Choice-btn">ランダム</div>
      <div class="Change-Ogiri-btn" v-if="TalkThema === true" @click= "ChangeOgiri()">大喜利に切り替え</div>
      <div class="Change-TalkThema-btn" v-if="TalkThema === false" @click= "ChangeTalkThema()">テーマに切り替え</div>
      <div class="Theme-Input-Fld">
        <input type="submit" class="Theme-Input-Submit-btn" id="kiriSub" value="表示">
        <input type="text" class="Theme-Input-Text-Area" name="chtheme" id="Chtheme" autocomplete="off" maxlength="32">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, watchEffect, reactive } from 'vue';
import TalkThemaList from '@/components/TalkThemaList.vue';
import OgiriThemaList from '@/components/OgiriThemaList.vue';
import FBRTDB from '../services/FirebaseFunctions';

export default defineComponent({
  name: 'ThemaField',
  components: {
    TalkThemaList,
    OgiriThemaList,
  },
  data: function(){
    return{
      TalkThema:true,
      ThemaDisplay:false,
      ThemaCategoly:"",
      ThemaContent:"",
    }
  },
  methods:{
    ChangeOgiri(){
      this.TalkThema = false
    },

    ChangeTalkThema(){
      this.TalkThema = true
    },

    ThemeFldClose(){
      this.$emit("onClick", "false")
    },

    AddThema(){
      this.ThemaDisplay = true
      this.$emit("onClick", "false")
    },
  },
  setup () {
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

.Theme-Fld{
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background-color: rgb(128, 128, 128, 0.5);
 z-index: 1;
}

.Theme-Control-btn-Fld{
 display: flex;
 position: absolute;
 height: 15%;
 width: 100%;
 bottom: 0;
 cursor: default;
 font-size: 1.5vw;
 justify-content: space-around;
}

.Theme-Fld-Close-btn{
  cursor: pointer;
 margin: auto 0 auto 1vw;
 border: 0.2vw solid;
 border-radius: 0.5vw;
 padding: 1vw;
 background-color: #cc0033;
}

.Random-Choice-btn{
 margin: auto 1vw;
 border: 0.2vw solid;
 border-radius: 0.5vw;
 padding: 1vw;
 background-color: #4682b4;
 cursor: pointer;
}

.Change-Ogiri-btn{
 margin: auto 0.4vw auto 0;
 border: 0.2vw solid;
 border-radius: 0.5vw;
 padding: 1vw;
 background-color: #4169e1;
 cursor: pointer;
}

.Change-TalkThema-btn{
 margin: auto 0.4vw auto 0;
 border: 0.2vw solid;
 border-radius: 0.5vw;
 padding: 1vw;
 background-color: #228b22;
 cursor: pointer;
}

.Theme-Input-Fld{
 margin: auto;
 height: 2.5vw;
 width: 41%;
 border: 0.2vw solid;
 display: flex;
}

.Theme-Input-Submit-btn{
 font-family: 'M PLUS Rounded 1c', sans-serif;
 padding: 0;
 width: 20%;
 height: 100%;
 font-size: 1vw;
 line-height: 10vw;
}

.Theme-Input-Text-Area{
 font-size: 1vw;
 height: 100%;
 width: 80%;
 padding: 0 0 0 0.2vw;
 border: 0;
 border-left: 0.2vw solid;
}
</style>
