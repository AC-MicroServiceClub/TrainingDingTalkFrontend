import React from 'react';
import { connect } from 'dva';
import { NavBar, SearchBar, Icon } from 'antd-mobile';
import CourseTypesBar from '../components/CourseTypesBar';
import styles from './TrainingListPage.css';

@connect(({ user, menus }) => ({
  user: user,
  menus: menus
}))
export default class TrainingListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
	    <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.push('/')}>{this.props.menus.trainingList.text}</NavBar>
        <CourseTypesBar history={this.props.history} />
        <SearchBar placeholder="课程/老师" maxLength={10} />
      </div>
    );
  }
}

TrainingListPage.propTypes = {
};

