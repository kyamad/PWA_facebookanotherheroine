<template>
  <img id="samuneimg" v-if="!Start" src="../assets/サムネ.jpg">
  <div class="filter" v-if="!Start"></div>
  <label class="imgsetbtn" v-if="!Start">画像を設定<input type="file" accept="image/png, image/jpeg" @change="onImgChange($event)" style="display:none;"></label>
  <button type="button" v-if="!Start" id="startbtn" @click="join()">LIVE<br>スタート</button>
  <div v-if="Start" id="local_video">
    <img
      v-show="uploadedImage"
      class="preview-item-file"
      :src="uploadedImage"
      alt=""
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { onMounted } from 'vue';
import AgoraLiveStreaming from '../services/AgoraFunctions'

declare var document:any; // documentオブジェクトの型チェックエラー一時海回避用

export default defineComponent({
  name: 'RadioComponent',
  data: function(){
    return {
      Start: false,
      uploadedImage: '',
      ImgName:"",
      ImgRatio:"",
    }
  },
  methods:{
    onImgChange(e:any) {
      const files = e.target.files;

      if(files.length > 0) {
          const file = files[0];
          const image = new Image();
          const reader = new FileReader();
          reader.onload = (e) => {
              image.src = e.target!.result as string || '' ;
              this.uploadedImage = image.src;
              this.ImgName = files[0].name;
          };
          
          reader.readAsDataURL(file);
      }
    },

    join: function() {
      this.Start = true as boolean ;   
      AgoraLiveStreaming.RadioStreaming;
    }
  },
});
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

.imgsetbtn{
  position: absolute;
  color: #000;
  font-size: 1.2vw;
  border: 0.2vw solid;
  border-radius: 2.5vw;
  background-color: #dcdcdc;
  bottom: 21vw;
  left: 0;
  right: 0;
  margin: 0 23.5vw;
  padding: 1.2vw 1vw;
  cursor: pointer;
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
