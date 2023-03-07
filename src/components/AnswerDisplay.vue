<template>
    <div class="Ogiri-Answer-Fld" v-for="{key, Answer} in AnswerFldText" :key="key">
        <div class="Answer-Title">回答</div>
        <div class="Answer-Content">{{ Answer }}</div>
        <div class="Answer-Fld-Close-btn" @click="AnswerFldClose">閉じる</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import FBRTDB from '../services/FirebaseFunctions';
import {useRoute} from 'vue-router';


export default defineComponent({
    name:'AnswerDisplay',
    props: ['AnswerFldText'],
    setup () {
        const route = useRoute();
        let  id  = JSON.stringify(route.params.id).replace(/"/g, "");
        
        return {
        id,
        }
    },
    methods:{
        AnswerFldClose(){
            FBRTDB.SendFldStatus(this.id,"OgiriAnswerFld","false")
        },
    },
});
</script>

<style scoped lang="scss">
.Ogiri-Answer-Fld{
  position: absolute;
  top: 26%;
  left: 0.1%;
  width: 98%;
  height: 40%;
  border: 0.5vw solid;
  background-color: #FFFFFF;
  color: #000000;
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
