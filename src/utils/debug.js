import React from 'react';
import { connect } from 'dva';
import restful from '../utils/restful';

class Debug {
  constructor(props) {
    this.state = {
    };
  }

  log(info, user) {
    restful.post('http://localhost:3000/debug', {info: info, user: user});
  }
}

export default new Debug;
