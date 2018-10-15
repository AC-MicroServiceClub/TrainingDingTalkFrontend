import React from 'react';
import { connect } from 'dva';
import { NavBar, Icon, Tabs, Badge, List } from 'antd-mobile';
import styles from './AnnualPlanPage.css';

const tabs = [
  { title: <span>1月</span> },
  { title: <span>2月</span> },
  { title: <span>3月</span> },
  { title: <span>4月</span> },
  { title: <span>5月</span> },
  { title: <span>6月</span> },
  { title: <span>7月</span> },
  { title: <span>8月</span> },
  { title: <span>9月</span> },
  { title: <span>10月</span> },
  { title: <span>11月</span> },
  { title: <span>12月</span> }
];

@connect(({ user, menus }) => ({
  user: user,
  menus: menus
}))
export default class AnnualPlanPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let month = new Date().getMonth();
	return (
      <div>
        <NavBar
          mode="light"
          //icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.push('/')}>{this.props.menus.annualPlan.text}</NavBar>
        <Tabs tabs={tabs}
          initialPage={month}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}>
          <div>
            <List renderHeader={() => 'Basic Style'}>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
            </List>
          </div>
          <div>
            <List renderHeader={() => 'Basic Style'}>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
            </List>
          </div>
          <div>
            <List renderHeader={() => 'Basic Style'}>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
            </List>
          </div>
          <div>
            <List renderHeader={() => 'Basic Style'}>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
            </List>
          </div>
          <div>
            <List renderHeader={() => 'Basic Style'}>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
            </List>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div>
            <List renderHeader={() => 'Basic Style'}>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
              <List.Item extra={'extra content'}>Title</List.Item>
            </List>
          </div>
        </Tabs>
      </div>
    );
  }
}

AnnualPlanPage.propTypes = {
};

