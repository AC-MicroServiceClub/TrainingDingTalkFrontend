import React from 'react';
import { connect } from 'dva';
import { WhiteSpace } from 'antd-mobile';
import PageBar from '../components/PageBar';
import CarouselBar from '../components/CarouselBar';
import MenuBar from '../components/MenuBar';
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

