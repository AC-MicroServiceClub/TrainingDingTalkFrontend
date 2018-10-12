
export default {

  namespace: 'menus',

  state: {
    myTraining: {
      text: '我的培训',
      path: '/my-training',
      icon: require('../assets/menu-my-training.png')
    },
    trainingList: {
      text: '培训列表',
      path: '/training-list',
      icon: require('../assets/menu-training-list.png')
    },
    annualPlan: {
      text: '年度计划',
      path: '/annual-plan',
      icon: require('../assets/menu-annual-plan.png')
    },
    teacherCourseList: {
      text: '我讲的课',
      path: '/teacher-course-list',
      icon: require('../assets/menu-teacher-course-list.png')
    },
    teacherSetting: {
      text: '讲师设置',
      path: '/teacher-setting',
      icon: require('../assets/menu-teacher-setting.png')
    },
    adminPlanMangement: {
      text: '计划管理',
      path: '/admin-plan-mangement',
      icon: require('../assets/menu-admin-plan-mangement.png')
    },
    adminTrainingMangement: {
      text: '培训管理',
      path: '/admin-training-mangement',
      icon: require('../assets/menu-admin-training-mangement.png')
    },
    adminTrainingApproval: {
      text: '培训审批',
      path: '/admin-training-approval',
      icon: require('../assets/menu-admin-training-approval.png')
    },
    adminSigninMangement: {
      text: '签到管理',
      path: '/admin-signin-mangement',
      icon: require('../assets/menu-admin-signin-mangement.png')
    },
    adminFeedbackMangement: {
      text: '反馈管理',
      path: '/admin-feedback-mangement',
      icon: require('../assets/menu-admin-feedback-mangement.png')
    }
  },

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
