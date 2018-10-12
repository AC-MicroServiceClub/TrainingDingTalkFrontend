import React from 'react';
import { connect } from 'dva';
import { NavBar, Icon } from 'antd-mobile';
import styles from './TeacherCourseListPage.css';

@connect(({ user, menus }) => ({
  user: user,
  menus: menus
}))
export default class TeacherCourseListPage extends React.Component {
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
        onLeftClick={() => this.props.history.push('/')}>{this.props.menus.teacherCourseList.text}</NavBar>
    );
  }
}

  TeacherCourseListPage.propTypes = {
};

