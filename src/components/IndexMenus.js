import React from 'react';
import { connect } from 'dva';
import { browserHistory } from 'react-router'
import { Grid, WhiteSpace, List } from 'antd-mobile';
import auth from '../utils/auth';
import styles from './IndexMenus.css';

const IndexMenus = (props) => {
  let anyOneMenus = [];
  let teacherMenus = [];
  let adminMenus = [];
  anyOneMenus.push(props.menus.myTraining);
  anyOneMenus.push(props.menus.trainingList);
  anyOneMenus.push(props.menus.annualPlan);
  if (auth.isTeacher(props.user)) {
    teacherMenus.push(props.menus.teacherCourseList);
    teacherMenus.push(props.menus.teacherSetting);
  } else if (auth.isAdmin(props.user)) {
    adminMenus.push(props.menus.adminPlanMangement);
    adminMenus.push(props.menus.adminTrainingMangement);
    adminMenus.push(props.menus.adminTrainingApproval);
    adminMenus.push(props.menus.adminSigninMangement);
    adminMenus.push(props.menus.adminFeedbackMangement);
  }

  return (
    <div>
      <div className={styles['sub-title']}>学生专栏</div>
      <Grid data={anyOneMenus} columnNum={4} hasLine={false} activeStyle={false} onClick={(el, index) => { props.history.push(el.path) }} />
      {
        auth.isTeacher(props.user) ? (
          <div>
            <WhiteSpace size='xs' style={{background: '#eee'}} />
            <div className={styles['sub-title']}>教学专栏</div>
            <Grid data={teacherMenus} columnNum={4} hasLine={false} activeStyle={false} onClick={(el, index) => { props.history.push(el.path) }} />
          </div>
        ) : (
          <div></div>
        )
      }
      {
        auth.isAdmin(props.user) ? (
          <div>
            <WhiteSpace size='xs' style={{background: '#eee'}} />
            <div className={styles['sub-title']}>管理专栏</div>
            <Grid data={adminMenus} columnNum={4} hasLine={false} activeStyle={false} onClick={(el, index) => { props.history.push(el.path) }} />
          </div>
        ) : (
          <div></div>
        )
      }
    </div>
  );
};

IndexMenus.propTypes = {
};

export default connect(({ menus }) => ({
  menus: menus
})) (IndexMenus);
