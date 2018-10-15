
export default {

  namespace: 'courseTypes',

  state: [
    {
      text: '技术',
      path: '/training-list',
      icon: require('../assets/menu-my-training.png')
    },
    {
      text: '管理',
      path: '/training-list',
      icon: require('../assets/menu-training-list.png')
    },
    {
      text: '生活',
      path: '/training-list',
      icon: require('../assets/menu-annual-plan.png')
    },
    {
      text: '行业',
      path: '/training-list',
      icon: require('../assets/menu-teacher-course-list.png')
    },
    {
      text: '其他',
      path: '/training-list',
      icon: require('../assets/menu-teacher-setting.png')
    }
  ],

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  }

};
