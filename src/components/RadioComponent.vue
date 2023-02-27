<template>
  <div id="local_video">
    <img
      v-show="ImgURL"
      v-bind:class="{Imgwidth: width, ImgHigh: !width}"
      :src="ImgURL"
      alt=""
    />
  </div>
  <div class="filter" v-if="!Start"></div>
  <label class="imgsetbtn" v-if="!Start">画像を設定
    <input type="file" accept="image/png, image/jpeg" @change="onImgChange($event)" style="display:none;">
  </label>
  <button type="button" v-if="!Start" id="startbtn" @click="join()">LIVE<br>スタート</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AgoraLiveStreaming from '../services/AgoraFunctions';
import { getStorage, ref, uploadString, getDownloadURL } from "firebase/storage";
import store from '../store';

export default defineComponent({
  name: 'RadioComponent',
  data: function(){
    return {
      Start: false,
      userid: store.getters['userid'] as string || "",
      uploadedImage: '',
      Format:"",
      ImgURL:"",
      width:false,
    }
  },
  methods:{
    onImgChange(e:any) {
      const files = e.target.files;
      const storage = getStorage();
      
      if(files.length > 0) {
        const file = files[0];
        const img = new Image();
        const reader = new FileReader();
        let ImgRatio:number = 0;
        reader.onload = (e) => {
            this.uploadedImage = e.target!.result as string || '' ;
            img.src = e.target!.result as string || '' ;
            img.onload = function() {
              ImgRatio = img.naturalWidth - img.naturalHeight;
            }
            const photoRef = ref(storage, "images/" + this.userid + "/" + "RadioImg");
            uploadString(photoRef, this.uploadedImage, 'data_url').then((snapshot) => {
              getDownloadURL(photoRef).then((url) => {
                this.ImgURL = url;
              });
            });
            if(ImgRatio > 0){
              this.width = true;
            } else {
              this.width = false;
            }
        };
        reader.readAsDataURL(file);
      }
    },

    join: function() {
      this.Start = true as boolean ;   
      AgoraLiveStreaming.RadioStreaming();
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

.Imgwidth{
  width: 100%;
  height: auto;
}

.ImgHigh{
  width: auto;
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
