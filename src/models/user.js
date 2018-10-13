import * as userService from '../services/user';

export default {

  namespace: 'user',

  state: {
    role: 0 // 0:学生; 1:老师; 999: 管理员
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *getUserInfo({ payload }, { call, put }) {
      const user =  yield call(userService.getUserInfo, {});
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  }

};
