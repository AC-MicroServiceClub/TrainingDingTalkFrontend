import React from 'react';
import { connect } from 'dva';
import styles from './ResourcePage.css';

@connect(({ user }) => ({
  user: user
}))
export default class ResourcePage extends React.Component {
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


ResourcePage.propTypes = {
};

