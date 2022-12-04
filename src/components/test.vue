mRtmClient = RtmClient.createInstance(getBaseContext(), getString(R.string.agora_app_id), new RtmClientListener(){
    mRtmClient.login(null, login_name + mUid, new ResultCallback<Void>() {
        mRtmChannel = mRtmClient.createChannel(channel, new MyChannelListener());

        mRtmChannel.join(new ResultCallback<Void>() {
            mRtmChannel = mRtmClient.createChannel(channel, new MyChannelListener());
                    mRtmChannel.join(new ResultCallback<Void>() {
                        RtmMessage message = mRtmClient.createMessage();
                        message.setText(”Please unmute”);
                        mRtmChannel.sendMessage(message, new ResultCallback<Void>() {
                            class MyChannelListener implements RtmChannelListener {
                                @Override
                                public void onMessageReceived(final RtmMessage message, final RtmChannelMember fromMember) {

                                String account = fromMember.getUserId();
                                String msg = message.getText();
                                //Please unmute//
                                    if (getString(R.string.msg_unmute).equals(arrMsg[0])) {
                                        //リクエスト文字を画面に表示
                                        txReq =  (TextView) findViewById(R.id.textReq3);
                                        txReq.setText(getString(R.string.msg_unmute));
                                    }

                                    //You can unmute
                                    if (getString(R.string.msg_can_unmute).equals(arrMsg[0])) {
                                        //マイクをON
                                        doVoiceLocalMute(false);
                                   }
   }
}