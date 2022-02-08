import React, { FC, ReactElement } from 'react';
import styles from './index.less';
interface Iprops {}
const BookItem: FC<Iprops> = (): ReactElement => {
  return (
    <div style={{ marginRight: 11 }} className={styles['bookItems']}>
      <div className={styles['bookItems_img']}>
        <img
          src="http://cdnoss.stardustgod.com/chapters_test/image/202112/61cacbe575d7e.jpg"
          alt=""
        />
      </div>
      <div className={styles['bookitem_title']}>Falling for Her Fiance</div>
      <div className={styles['booktype']}>Romance</div>
    </div>
  );
};
export default BookItem;
