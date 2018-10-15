import React from 'react';
import { connect } from 'dva';
import { NavBar, SearchBar, Icon } from 'antd-mobile';
import DocumentTitle from 'react-document-title';
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

  switchType(el, index) {
    alert(el.text);
  }

  render() {
    return (
      /*<NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => this.props.history.push('/')}>{this.props.menus.trainingList.text}</NavBar>*/
      <div>
        <DocumentTitle title={this.props.menus.trainingList.text}></DocumentTitle>
        <ButtonGrid items={this.props.courseTypes} colNum={5} action={this.switchType.bind(this)} />
        <SearchBar placeholder="课程/老师" maxLength={10} />
      </div>
    );
  }
}

TrainingListPage.propTypes = {
};

