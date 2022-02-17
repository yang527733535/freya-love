import React from 'react';
import styles from './index.less';
import { Avatar } from 'antd';
import ava from '@/assets/avatar.jpg';
export default function ImgItem() {
  return (
    <div className={styles.item}>
      <div className={styles['imghead']}></div>
      <div className={styles['title']}>今天去吃了西餐</div>
      <div className={styles['content']}>
        <div className={styles['avatar']}>
          <Avatar
            style={{
              marginLeft: 5,
              marginBottom: 4,
            }}
            src={ava}
          />
        </div>
        <div className={styles['username']}>yang</div>
      </div>
    </div>
  );
}
