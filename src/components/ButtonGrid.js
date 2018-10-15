import React from 'react';
import { connect } from 'dva';
import { browserHistory } from 'react-router'
import { Grid, WhiteSpace } from 'antd-mobile';
import auth from '../utils/auth';

const ButtonGrid = (props) => {
  return (
    <div>
      <Grid data={props.items} columnNum={props.colNum} hasLine={false} activeStyle={false} onClick={(el, index) => { props.action(el, index) }} />
    </div>
  );
};

ButtonGrid.propTypes = {
};

export default connect() (ButtonGrid);
