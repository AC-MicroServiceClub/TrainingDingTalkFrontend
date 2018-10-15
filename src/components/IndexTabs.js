import React from 'react';
import { connect } from 'dva';
import { TabBar } from 'antd-mobile';
import styles from './IndexTabs.css';
import indexSvg from '../assets/tab-index.svg';
import indexActiveSvg from '../assets/tab-index-active.svg';
import resourceSvg from '../assets/tab-resource.svg';
import resourceActiveSvg from '../assets/tab-resource-active.svg';
import mySvg from '../assets/tab-my.svg';
import myActiveSvg from '../assets/tab-my-active.svg';

class IndexTabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'indexTab',
      hidden: false,
      fullScreen: true
    };
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}>
          <TabBar.Item
            title="首页"
            key="index"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(' + indexSvg + ') center center /  21px 21px no-repeat' }} />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(' + indexActiveSvg + ') center center /  21px 21px no-repeat' }} />
            }
            selected={this.state.selectedTab === 'indexTab'}
            //badge={1}
            onPress={function() {
              this.setState({
                selectedTab: 'indexTab',
              });
            }.bind(this)}
            data-seed="logId">
            {this.props.callback('index')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(' + resourceSvg + ') center center /  21px 21px no-repeat' }} />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(' + resourceActiveSvg + ') center center /  21px 21px no-repeat' }} />
            }
            title="资源"
            key="Resource"
            //badge={'new'}
            selected={this.state.selectedTab === 'resourceTab'}
              onPress={function() {
              this.setState({
                selectedTab: 'resourceTab',
              });
            }.bind(this)}
            data-seed="logId1">
            {this.props.callback('resource')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(' + mySvg + ') center center /  21px 21px no-repeat' }} />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(' + myActiveSvg + ') center center /  21px 21px no-repeat' }} />
            }
            title="我的"
            key="My"
            //dot
            selected={this.state.selectedTab === 'myTab'}
            onPress={function() {
              this.setState({
                selectedTab: 'myTab',
              });
            }.bind(this)}>
            {this.props.callback('my')}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }

};

IndexTabs.propTypes = {
};

export default connect() (IndexTabs);
