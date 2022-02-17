import React, { FC, ReactElement, useRef, useEffect, useState } from 'react';
import styles from './index.less';
import ImgItem from './imageitem/index';
import { imglist } from '@/api/hall';
interface IProps {}
const Discover: FC<IProps> = ({}: IProps): ReactElement => {
  useEffect(() => {
    getInitData();
  }, []);
  const getInitData = async () => {
    let param = {
      pageNum: 1,
      pageSize: 10,
    };
    let data = await imglist(param);
    console.log('data: ', data);
  };
  return (
    <div className={styles['myDiscoverBox']}>
      <div className={styles['imgBox']}>
        <ImgItem></ImgItem>
        <ImgItem></ImgItem>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 60,
          // zIndex: 40,
        }}
      >
        <a href="https://beian.miit.gov.cn">
          <span style={{ color: 'blue' }}>粤ICP备2022016405号</span>
        </a>
      </div>
    </div>
  );
};

export default Discover;
