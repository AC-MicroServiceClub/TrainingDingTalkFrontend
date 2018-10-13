import request from '../utils/request';

const options = {
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'include'
};

// JSON转URL参数串
function toUrlParamString(param) {
  try {
    var tempArr = [];
    for (var i in param) {
      var key = encodeURIComponent(i);
      var value = encodeURIComponent(param[i]);
      tempArr.push(key + '=' + value);
    }
    var urlParamStr = tempArr.join('&');
    return urlParamStr;
  } catch (err) {
    return '';
  }
}

// 拼接参数到url中
function wrapUrl(url, param) {
  let urlParamStr = toUrlParamString(param);
  url = url.trim();
  if (0 < url.indexOf('?')) {
    if (url.endsWith('&')) {
      return url + urlParamStr || '';
    } else {
    	return url + '&' + urlParamStr || '';
    }
  } else {
    return url + '?' + urlParamStr || '';
  }
}

class Restful {
  get(url, query) {
    options.method = 'get';
    return request(wrapUrl(url, query), options);
  }

  post(url, body, query) {
    options.method = 'post';
    if (body) {
      options.body = JSON.stringify(body);
    }
    return request(wrapUrl(url, query), options);
  }

  put(url, body, query) {
    options.method = 'put';
    if (body) {
      options.body = JSON.stringify(body);
    }
    return request(wrapUrl(url, query), options);
  }

  del(url, query) {
    options.method = 'delete';
    return request(wrapUrl(url, query), options);
  }
};

export default new Restful;
