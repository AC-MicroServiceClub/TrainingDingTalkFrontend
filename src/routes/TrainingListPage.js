import React from 'react';
import { connect } from 'dva';
import { NavBar, SearchBar, Icon } from 'antd-mobile';
import ButtonGrid from '../components/ButtonGrid';
import styles from './TrainingListPage.css';

@connect(({ user, menus, courseTypes }) => ({
  user: user,
  menus: menus,
  courseTypes: courseTypes
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
        <ButtonGrid items={this.props.courseTypes} colNum={5} history={this.props.history} />
        <SearchBar placeholder="课程/老师" maxLength={10} />
      </div>
    );
  }
}

TrainingListPage.propTypes = {
};

