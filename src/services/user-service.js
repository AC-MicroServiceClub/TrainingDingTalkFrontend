import request from '../utils/request';

export function query() {
  alert(window.dd.runtime.permission.requestAuthCode);
  window.dd.runtime.permission.requestAuthCode({
    corpId: "ding11e2d6305c40beeb35c2f4657eb6378f",
    onSuccess: function(data) {
      alert(data);
    },
    onFail: function(err) {
      alert('fail: ' + JSON.stringify(err));
    }
  });
  //return request('/api/users');
}
