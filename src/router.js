import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import MyTrainingPage from './routes/MyTrainingPage';
import TrainingListPage from './routes/TrainingListPage';
import AnnualPlanPage from './routes/AnnualPlanPage';
import TeacherCourseListPage from './routes/TeacherCourseListPage';
import TeacherSettingPage from './routes/TeacherSettingPage';
import AdminPlanMangementPage from './routes/AdminPlanMangementPage';
import AdminTrainingMangementPage from './routes/AdminTrainingMangementPage';
import AdminTrainingApprovalPage from './routes/AdminTrainingApprovalPage';
import AdminSigninMangementPage from './routes/AdminSigninMangementPage';
import AdminFeedbackMangementPage from './routes/AdminFeedbackMangementPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/my-training" exact component={MyTrainingPage} />
        <Route path="/training-list" exact component={TrainingListPage} />
        <Route path="/annual-plan" exact component={AnnualPlanPage} />
        <Route path="/teacher-course-list" exact component={TeacherCourseListPage} />
        <Route path="/teacher-setting" exact component={TeacherSettingPage} />
        <Route path="/admin-plan-mangement" exact component={AdminPlanMangementPage} />
        <Route path="/admin-training-mangement" exact component={AdminTrainingMangementPage} />
        <Route path="/admin-training-approval" exact component={AdminTrainingApprovalPage} />
        <Route path="/admin-signin-mangement" exact component={AdminSigninMangementPage} />
        <Route path="/admin-feedback-mangement" exact component={AdminFeedbackMangementPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
