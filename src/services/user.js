import restful from '../utils/restful';
import * as dd from 'dingtalk-jsapi';
import ReactDOM from 'react-dom';
import { NoticeBar, Icon } from 'antd-mobile';

const userid = {
	val: ''
};

// 免登录设置
if ('notInDingTalk' != dd.env.platform) {
  dd.ready(function() {
    dd.runtime.permission.requestAuthCode({
      corpId: 'ding11e2d6305c40beeb35c2f4657eb6378f',
        onSuccess: function(result) {
          // 通过免登录code获取userid并保存到常量userid对象中
          userid.val = restful.get('https://oapi.dingtalk.com/user/getuserinfo', {access_token: '', code: result.code});
          ReactDOM.render(
            <NoticeBar mode="link" action={<span>Debug</span>}>
              {userid.val}
            </NoticeBar>,
            document.getElementById("notice")
          );
        },
        onFail : function(err) {}
    });
  });
}

export function getUserInfo() {
  // 从userid中获取当前登录用户的userid
  return restful.get('/api/user/' + userid.val);
}

export function query() {
  return restful.get('/api/users');
}
