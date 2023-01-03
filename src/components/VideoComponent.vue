<template>
  <button type="button" id="startbtn" v-on:click="join()">LIVE<br>スタート</button>
  <div id="local_video"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AgoraRTC, { IAgoraRTCClient } from "agora-rtc-sdk-ng";

export default defineComponent({
  name: 'VideoComponents',
  methods: {
    join: () => {
      // let rtc = this.rtc;
      // let options = this.options;

      let rtc = {
        localAudioTrack: null,
        localVideoTrack: null,
        client: null
      };
      
      let options = {
        appId: "49d72a2fc8dc4917804e9e8bacde2661",
        channel: "demochannel",
        token: "007eJxTYNg9bflqRqOJC2fNLyjQ2KVvuWhj/4aUZCG1fHPzedtbcxgUGEwsU8yNEo3Ski1Skk0sDc0tDExSLVMtkhKTU1KNzMwMDy/bnNwQyMjQO0GblZEBAkF8boaU1Nz85IzEvLzUHAYGAOE1IVw=",
        uid: 0
      }
      
      async function initializeRTC() {
        rtc.client = AgoraRTC.createClient({ mode: "live", codec: "vp8" });
        await rtc.client.join(options.appId, options.channel, options.token, options.uid);
        rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
        rtc.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
        rtc.localVideoTrack.play("local_video");
        await rtc.client.publish([rtc.localAudioTrack, rtc.localVideoTrack]);
      }
      initializeRTC();

      function Livestart() {
        document.getElementById("samuneimg").style.display = "none";
        document.querySelector(".filter").style.display = "none";
        document.getElementById("startbtn").style.display = "none";
      }
      Livestart();
    }
  },
  mounted: () => {
    // const client: IAgoraRTCClient = AgoraRTC.createClient({ codec: "h264", mode: "live" });
    // console.log("Client:", client);
  },

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
</style>