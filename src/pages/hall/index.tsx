import React, { FC, ReactElement, useEffect } from 'react';
import { Tabs } from 'antd';
import styles from './index.less';
import Discover from './discover/index';
import SearchLogo from '@/assets/hall/btn_icon_search.png';
import { history } from 'umi';
const { TabPane } = Tabs;
interface Iprops {}
const Hall: FC<Iprops> = ({}): ReactElement => {
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <div
        onClick={() => {
          history.push('/search/index');
        }}
        className={styles.logoContent}
      >
        <img src={SearchLogo} />
      </div>
      <Tabs
        destroyInactiveTabPane
        className={styles.myTab}
        defaultActiveKey="Discovers"
        tabBarStyle={{
          position: 'fixed',
          top: '15.46667vw',
          width: '100vw',
          zIndex: 10,
        }}
      >
        <TabPane style={{ overflowY: 'auto' }} tab="图片" key="Discover">
          <Discover />
        </TabPane>
        <TabPane style={{ overflow: 'auto' }} tab="视频" key="Category">
          <div className={styles.CATE}>123</div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Hall;
