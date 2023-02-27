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
import AgoraRTC, { IAgoraRTCClient } from "agora-rtc-sdk-ng";
import { RtcTokenBuilder, RtcRole } from 'agora-access-token';

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

    let rtc:any = {
      localAudioTrack: null,
      client: null
    };

    let options = {
      appId: "49d72a2fc8dc4917804e9e8bacde2661",
      channel: "haisinnmeiireru",
      uid: "aaaaa",
      appCertificate: "e4736ccd47ad4fb9ae0bc8e713398b55",
      expirationTimeInSeconds : 60 * 60,// トークンの有効期間
      currentTimestamp : Math.floor(Date.now() / 1000)
    };

    const privilegeExpiredTs = options.currentTimestamp + options.expirationTimeInSeconds;

    const token = RtcTokenBuilder.buildTokenWithAccount(options.appId, options.appCertificate, options.channel, options.uid, RtcRole.PUBLISHER, privilegeExpiredTs);

    async function initializeRTC() {
      rtc.client = AgoraRTC.createClient({ mode: "live", codec: "vp8" }) as IAgoraRTCClient;
      await rtc.client.join(options.appId, options.channel, token, options.uid);
      rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
      rtc.localAudioTrack.play("local_video");
      await rtc.client.publish([rtc.localAudioTrack]); // await rtc.client.publish([rtc.localAudioTrack, rtc.localVideoTrack]);
    }
    initializeRTC();

    function Livestart() {
      document.getElementById("samuneimg").style.display = "none";
    }

    Livestart();
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
