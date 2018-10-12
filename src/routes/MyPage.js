import React from 'react';
import { connect } from 'dva';
import styles from './TrainingListPage.css';

@connect(({ user }) => ({
  user: user
}))
export default class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderContent() {
      return (
        <div></div>
      );
  }

  render() {
    return (
      <div></div>
    );
  }
}


MyPage.propTypes = {
};

