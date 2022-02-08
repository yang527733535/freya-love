import React, { FC, ReactElement } from 'react';
import { Carousel } from 'antd';
import { BannerContent } from './typings';
import styles from './index.less';
function onChange(a: any) {
  console.log(a);
}
interface Iprops {
  bannerItem: BannerContent;
}

const CarouselImg: FC<Iprops> = ({ bannerItem = {} }: Iprops): ReactElement => {
  const contentStyle: any = {
    height: '375px',
    color: '#fff',
    textAlign: 'center',
    background: '#364d79',
  };
  const { items = [] } = bannerItem;
  return (
    <div>
      <Carousel afterChange={onChange}>
        {items?.map((element: any): ReactElement => {
          return (
            <div key={element.image}>
              <div style={contentStyle}>
                <img className={styles.bannerImg} src={element.image} alt="" />
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselImg;
