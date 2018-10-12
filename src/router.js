import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ResourcePage from './routes/ResourcePage';
import MyPage from './routes/MyPage';
import TrainingListPage from './routes/TrainingListPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/resource" exact component={ResourcePage} />
        <Route path="/my" exact component={MyPage} />
        <Route path="/training-list" exact component={TrainingListPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
