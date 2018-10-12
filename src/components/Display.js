import React from 'react';
import { connect } from 'dva';

const Display = ({ expression, content }) => {
  if (expression) {
    return (
      content
    );
  } else {
    return (
      null
    );
  }
};

Display.propTypes = {
};

export default Display;
