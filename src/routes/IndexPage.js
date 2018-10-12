import React from 'react';
import { connect } from 'dva';
import { SearchBar, ListView, WhiteSpace } from 'antd-mobile';
import PageBar from '../components/PageBar';
import CarouselBar from '../components/CarouselBar';
import MenuBar from '../components/MenuBar';
import SearchList from '../components/SearchList';
import styles from './IndexPage.css';

@connect(({ user }) => ({
  user: user
}))
export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderContent(pageIndex) {
    if ('index' == pageIndex) {
      return (
        <div style={{height: '100%', background: '#fff'}}>
          <CarouselBar />
          <MenuBar history={this.props.history} user={this.props.user} />
        </div>
      );
    } else if ('resource' == pageIndex) {
      return (
        <div style={{height: '100%', background: '#fff'}}>
          <SearchBar placeholder="搜索全部课程资料/讲师" maxLength={10} />
          <SearchList />
        </div>
      );
    } else if ('my' == pageIndex) {
      return (
        <div style={{height: '100%', background: '#fff'}}>
          
        </div>
      );
    }
  }

  render() {
    return (
      <PageBar callback={this.renderContent.bind(this)} />
    );
  }
}

IndexPage.propTypes = {
};

