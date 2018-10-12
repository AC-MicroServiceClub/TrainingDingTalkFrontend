import React from 'react';
import { connect } from 'dva';
import styles from './TrainingListPage.css';


@connect(({ user }) => ({
  user: user
}))
export default class TrainingListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      fullScreen: true
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


TrainingListPage.propTypes = {
};

