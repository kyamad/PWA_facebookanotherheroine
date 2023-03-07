<template>
    <div class="Thema-Display-Fld">
        <div class="Thema-Category" v-for="{key, Category} in ThemaSnapShot" :key="key" >{{Category}}</div>
        <div class="Thema-Content" v-for="{key, Content} in ThemaSnapShot" :key="key" >{{ Content }}</div>
        <div class="Thema-Fld-Close-btn" @click="ThemaClose()">閉じる</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FBRTDB from '../services/FirebaseFunctions';
import {useRoute} from 'vue-router';

export default defineComponent({
    name:'ThemaDisplay',
    props: ['ThemaSnapShot'],
    setup () {
        const route = useRoute();
        let  id  = JSON.stringify(route.params.id).replace(/"/g, "");
        
        return {
        id,
        }
    },
    methods:{
        ThemaClose(){
            FBRTDB.SendFldStatus(this.id,"ThemaTextFld","false")
        },
    },
});
</script>

<style scoped lang="scss">

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

</style>
