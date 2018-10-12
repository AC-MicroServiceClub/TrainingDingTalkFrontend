import React from 'react';
import { connect } from 'dva';
import { NavBar, Icon } from 'antd-mobile';
import styles from './AdminFeedbackMangementPage.css';

@connect(({ user, menus }) => ({
  user: user,
  menus: menus
}))
export default class AdminFeedbackMangementPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => this.props.history.push('/')}>{this.props.menus.adminFeedbackMangement.text}</NavBar>
    );
  }
}

  AdminFeedbackMangementPage.propTypes = {
};

