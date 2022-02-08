import React from 'react';
import { history } from 'umi';
import styles from './index.less';
import icon_arr from '../assets/other/icon_arr.png';
const Layout = ({ children }) => (
  <>
    <div className={styles['inputBox']}>
      <div>
        <img
          onClick={() => {
            history.goBack();
          }}
          src={icon_arr}
        ></img>
      </div>
      <input placeholder="Please enter story or keyword" />
    </div>
    {children}
  </>
);

export default Layout;
