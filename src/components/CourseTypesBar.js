import React from 'react';
import { connect } from 'dva';
import { browserHistory } from 'react-router'
import { Grid, WhiteSpace } from 'antd-mobile';
import auth from '../utils/auth';
import styles from './MenuBar.css';

const CourseTypesBar = (props) => {
  return (
    <div>
      <Grid data={props.courseTypes} columnNum={5} hasLine={false} activeStyle={false} onClick={(el, index) => { props.history.push(el.path) }} />
    </div>
  );
};

CourseTypesBar.propTypes = {
};

export default connect(({ courseTypes }) => ({
	courseTypes: courseTypes
})) (CourseTypesBar);
