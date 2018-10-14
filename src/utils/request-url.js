
class RequestUrl {
  // JSON转URL参数串
  toUrlParamString(param) {
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
  wrapUrl(url, param) {
    let urlParamStr = this.toUrlParamString(param);
    url = url.trim();
    if (0 < url.indexOf('?')) {
      if (url.endsWith('&')) {
        return url + urlParamStr || '';
      } else {
        return url + '&' + urlParamStr || '';
      }
    } else {
      if (urlParamStr) {
        return url + '?' + urlParamStr || '';
      }
      return url;
    }
  }
};

export default new RequestUrl;
