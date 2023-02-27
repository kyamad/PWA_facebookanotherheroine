import AgoraRTC, { IAgoraRTCClient } from "agora-rtc-sdk-ng";
import { RtcTokenBuilder, RtcRole } from 'agora-access-token';
import store from '../store';

class AgoraLiveStreaming {
      
      public options:any = {};
      public rtc:any = {};

      constructor(){
        this.options = {
            appId: "49d72a2fc8dc4917804e9e8bacde2661",
            channel: store.getters['userid'] as string || "", // FBAuthIDを入れてる
            uid: store.getters['userid'] as string || "", // FBAuthIDを入れてる
            appCertificate: "e4736ccd47ad4fb9ae0bc8e713398b55",
            expirationTimeInSeconds : 60 * 60,// トークンの有効期間
            currentTimestamp : Math.floor(Date.now() / 1000)
        },

        this.rtc = {
            localAudioTrack: null,
            localVideoTrack: null,
            client: null
        }
    }

    VideoStreaming(){
        let options:any = this.options;
        let rtc:any = this.rtc;

        const privilegeExpiredTs = options.currentTimestamp + options.expirationTimeInSeconds;
        const token = RtcTokenBuilder.buildTokenWithAccount(options.appId, options.appCertificate, options.channel, options.uid, RtcRole.PUBLISHER, privilegeExpiredTs);
        
        async function initializeRTC() {
            rtc.client = AgoraRTC.createClient({ mode: "live", codec: "vp8" }) as IAgoraRTCClient;
            rtc.client.setClientRole("host");
            await rtc.client.join(options.appId, options.channel, token, options.uid);
            rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
            rtc.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
            rtc.localVideoTrack.play("local_video");
            await rtc.client.publish([rtc.localAudioTrack, rtc.localVideoTrack]);
        }
        initializeRTC();
    };

    RadioStreaming(){
        let options:any = this.options;
        let rtc:any = this.rtc;

        const privilegeExpiredTs = options.currentTimestamp + options.expirationTimeInSeconds;
        const token = RtcTokenBuilder.buildTokenWithAccount(options.appId, options.appCertificate, options.channel, options.uid, RtcRole.PUBLISHER, privilegeExpiredTs);

        async function initializeRTC() {
            rtc.client = AgoraRTC.createClient({ mode: "live", codec: "vp8" }) as IAgoraRTCClient;
            rtc.client.setClientRole("host");
            await rtc.client.join(options.appId, options.channel, token, options.uid);
            rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
            rtc.localAudioTrack.play("local_video");
            await rtc.client.publish([rtc.localAudioTrack]);
        }
        initializeRTC();
    };

    VideoLocalPreview(){
        let rtc:any = this.rtc;
        async function initializeRTC() {
            rtc.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
            rtc.localVideoTrack.play("local_video");
        }
        initializeRTC();
    };
}

export default new AgoraLiveStreaming();