import React, { FC, ReactElement } from 'react';
import styles from './index.less';
import icon_arr_r from '@/assets/hall/icon_arr_r.png';
import BookItem from './BookItem';
interface Iprops {}
const NormalBookShelf: FC<Iprops> = (): ReactElement => {
  return (
    <>
      <div className={styles['bookShelfheader']}>
        <div className={styles['left_bookShelfheader']}>日常记录</div>
        <div className={styles['rigth_bookShelfheader']}>
          查看全部
          <img
            className={styles['rigth_bookShelfheader_img']}
            src={icon_arr_r}
          ></img>
        </div>
      </div>
      <div className={styles['bookShelfContent']}>
        <div className={styles['ScrollContent']}>
          <BookItem></BookItem>
          <BookItem></BookItem>
          <BookItem></BookItem>
          <BookItem></BookItem>
          <BookItem></BookItem>
          <BookItem></BookItem>
          <BookItem></BookItem>
          <BookItem></BookItem>
        </div>
      </div>
    </>
  );
};

export default NormalBookShelf;
