<template>
  <div v-if="ThemaDisplay == false" class="Theme-Fld">
    <TalkThemaList v-if="TalkThema === true" @onClick="ThemaDisplayChange"></TalkThemaList>
    <OgiriThemaList v-if="TalkThema === false" @onClick="ThemaDisplayChange"></OgiriThemaList>
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
  <div v-if="ThemaDisplay == true" class="Thema-Display-Fld">
    <div class="Thema-Category" v-for="{key, Category} in ThemaSnapShot" :key="key" >{{Category}}</div>
    <div class="Thema-Content" v-for="{key, Content} in ThemaSnapShot" :key="key" >{{ Content }}</div>
    <div class="Thema-Fld-Close-btn">閉じる</div>
  </div>
  <div class="Ogiri-Answer-Fld">
    <div class="Answer-Title">回答</div>
    <div class="Answer-Content"></div>
    <div class="Answer-Fld-Close-btn">閉じる</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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

    ThemaDisplayChange(){
      this.ThemaDisplay = true
    },
  },
  setup () {
    return{
      ThemaSnapShot:FBRTDB.AddTopic(),
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

.Thema-Display-Fld{
 position: absolute;
 top: 1%;
 left: 2.5%;
 width: 95%;
 height: 30%;
 background-color: rgb(0, 123, 187, 0.7);
 color: #FFFFFF;
}

.Thema-Category{
  margin-top: 1.7vw;
  font-size: 1.5vw;
}

.Thema-Content{
  margin-top: 1.8vw;
  font-size: 1.7vw;
}

.Thema-Fld-Close-btn{
 position: absolute;
 width: 6%;
 bottom: 5%;
 right: 2%;
 font-size: 1vw;
 cursor: pointer;
}

.Ogiri-Answer-Fld{
  display: none;
  position: absolute; /*themefldに対してabso*/
  top: 26%;
  left: 0.1%;
  width: 98%;
  height: 40%;
  border: 0.5vw solid;
  background-color: #FFFFFF;
  color: #000000;
  z-index: 1;
}

.Answer-Title{
  margin-top: 1vw;
}

.Answer-Content{
  margin-top: 2vw;
  font-size: 2vw;
}

.Answer-Fld-Close-btn{
  position: absolute; /*displayに対してabso*/
  width: 6%;
  bottom: 5%;
  right: 2%;
  font-size: 1vw;
  cursor: pointer;
}

</style>
