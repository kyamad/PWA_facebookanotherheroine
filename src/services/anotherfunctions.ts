

export default {
  sendPostRequest(email:string, nickname:string, month:string, day:string, message:string, user_ps:string, confirm_ps:string, agree:boolean) {
    const url = 'https://123chat.jp/registration/entry/';

    const data = new FormData();
    data.append('purpose', '5');
    data.append('ad_code', 'bar_01');
    data.append('ajax', '1');
    data.append('reg_mail', email);
    data.append('nickname', nickname);
    data.append('month', month);
    data.append('day', day);
    data.append('message', message);
    data.append('user_ps', user_ps);
    data.append('confirm_ps', confirm_ps);
    data.append('agree', agree ? '1' : '0');

    const requestOptions:any = {
      method: 'POST',
      body: data,
      redirect: 'follow'
    };

    return fetch(url, requestOptions)
  }
}