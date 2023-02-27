<template>
  <div id="local_video"></div>
  <div class="filter" v-if="!Start"></div>
  <button type="button" v-if="!Start" id="startbtn" @click="join()">LIVE<br>スタート</button>
  </template>

<script lang="ts">
import { defineComponent } from 'vue';
import { onMounted } from 'vue';
import AgoraLiveStreaming from '../services/AgoraFunctions'

export default defineComponent({
  name: 'VideoComponent',
  data: function(){
    return {
      Start: false
    }
  },
  methods: {
    join: function() {
      this.Start = true as boolean ;
      AgoraLiveStreaming.VideoStreaming();
    }
  },

  setup(){
    onMounted(() => {  
      AgoraLiveStreaming.VideoLocalPreview();    
    });
  }
})
</script>

<style scoped lang="scss">
#startbtn{
 position: absolute;
 color: #000;
 font-size: 2vw;
 background-color: #fcd575;
 box-shadow: 0 0 1vw;
 border-radius: 50%;
 bottom: 4vw;
 left: 0;
 right: 0;
 margin: 0 23.5vw;
 padding: 3.6vw 1.7vw;
 cursor: pointer;
}

#local_video {
  width: 100%;
  height: 100%;
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

</style>