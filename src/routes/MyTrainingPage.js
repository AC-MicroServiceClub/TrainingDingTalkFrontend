import React from 'react';
import { connect } from 'dva';
import { NavBar, Icon } from 'antd-mobile';
import DocumentTitle from 'react-document-title';
import styles from './MyTrainingPage.css';

@connect(({ user, menus }) => ({
  user: user,
  menus: menus
}))
export default class MyTrainingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NavBar
        mode="light"
        //icon={<Icon type="left" />}
        onLeftClick={() => this.props.history.push('/')}>{this.props.menus.myTraining.text}</NavBar>
    );
  }
}

MyTrainingPage.propTypes = {
};

