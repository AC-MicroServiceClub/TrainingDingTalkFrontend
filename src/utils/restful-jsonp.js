import request from '../utils/request-jsonp';
import requestUrl from '../utils/request-url';

const options = {
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'include'
};

class Restful {
  get(url, query) {
    options.method = 'get';
    return request(requestUrl.wrapUrl(url, query), options);
  }

  post(url, body, query) {
    options.method = 'post';
    if (body) {
      options.body = JSON.stringify(body);
    }
    return request(requestUrl.wrapUrl(url, query), options);
  }

  put(url, body, query) {
    options.method = 'put';
    if (body) {
      options.body = JSON.stringify(body);
    }
    return request(requestUrl.wrapUrl(url, query), options);
  }

  del(url, query) {
    options.method = 'delete';
    return request(requestUrl.wrapUrl(url, query), options);
  }
};

export default new Restful;
