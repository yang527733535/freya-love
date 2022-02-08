import React, { FC, ReactElement, useRef, useEffect, useState } from 'react';
import BookCarouselImg from './CarouselImg';
import styles from './index.less';
import NormalBookShelf from './normalBookShelf';
import { reqgetHallDataApi } from '@/api/hall';
import { HallList } from './typings';
import { useDebounce } from '@/utils/customerhook';
import { useMount } from '@/utils/customerhook';
interface IProps {}
const Discover: FC<IProps> = ({}: IProps): ReactElement => {
  const [bannerItem, setbannerItem] = useState<any>();
  const getHallData = async () => {
    let param = {
      version: '618',
    };
    let data: HallList = await reqgetHallDataApi(param);
    console.log('data: ', data);
    // setbannerItem(data.data.list[1]);
  };
  const [inputValue, setinputValue] = useState<any>();
  useMount(getHallData);

  const dbvalue = useDebounce(inputValue, 1000);
  return (
    <div className={styles['myDiscoverBox']}>
      <BookCarouselImg bannerItem={bannerItem}></BookCarouselImg>
      <NormalBookShelf></NormalBookShelf>
    </div>
  );
};

export default Discover;
