import React from 'react';
import { connect } from 'dva';
import { NavBar, Icon } from 'antd-mobile';
import styles from './AdminSigninMangementPage.css';

@connect(({ user, menus }) => ({
  user: user,
  menus: menus
}))
export default class AdminSigninMangementPage extends React.Component {
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
        onLeftClick={() => this.props.history.push('/')}>{this.props.menus.adminSigninMangement.text}</NavBar>
    );
  }
}

  AdminSigninMangementPage.propTypes = {
};

