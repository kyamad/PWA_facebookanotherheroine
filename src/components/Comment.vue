<template>
    <ul class="comment">
        <li class="listener"><p class="lisname">ユーザー名ユーザー名</p><p class="listenerkom"></p>あああああああああああああああああああああああああああああああああああああああああああああああ</li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AgoraRTM from 'agora-rtm-sdk';

export default defineComponent({
    name:'UserComment',

    methods:{
      // let options = {
      //   uid: "",
      //   token: ""
      // },

      // const appID = "49d72a2fc8dc4917804e9e8bacde2661",
      // options.token = "<Your token>",

      // const client = AgoraRTM.createInstance(appID),
      // let channel = client.createChannel("demoChannel"),


      // window.onload = function () {
      //   document.getElementById("send_channel_message").onclick = async function () {

      //     let channelMessage = document.getElementById("channelMessage").value.toString()

      //     if (channel != null) {
      //         await channel.sendMessage({ text: channelMessage }).then(() => {

      //             document.getElementById("comment").appendChild(document.createElement('li')).append(channelMessage)

      //         })
      //     }
      //   }
      // }

    }
});
</script>

<style scoped lang="scss">

body {
  font-family: 'M PLUS Rounded 1c', sans-serif;
}

.listener{
    display: block;/*通常はblock*/
    text-align: justify;
  }

  .comment li{
  padding: 1vw;
  font-size: 1.25vw;
  list-style: none;
  word-break: break-all;
  border-bottom: 0.2vw solid #cccccc;
  }

  .lisname{
  color: #9a493f;
  margin-bottom: 0.4vw;
  }

</style>
