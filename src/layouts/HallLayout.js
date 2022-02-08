import { useEffect, useState } from 'react';
import styles from './index.less';
import SelectHome from '../assets/hall/selecthome.png';
import Home from '../assets/hall/home.png';
import Mybook from '../assets/hall/MyBooks.png';
import profile from '../assets/hall/profile.png';
import logo from '../assets/hall/log.png';
import iconticket from '../assets/hall/icon_ticket_96px.png';
import iconAdd from '../assets/hall/icon_add.png';
import diamond from '../assets/hall/diamond.png';
import selectmybook from '../assets/hall/selectmybook.png';
import selectprofile from '../assets/hall/selectprofile.png';
import { history } from 'umi';
export default (props) => {
  if (props.location.pathname === '/search/index') {
    return <div>{props.children}</div>;
  }
  useEffect(() => {}, []);

  const [footertype, setfootertype] = useState('hall');
  return (
    <div className={styles.myContainer}>
      <div className={styles['header']}>
        <div className={styles['header_logo']}>
          <img src={logo}></img>
        </div>
        <div className={styles['diamondInput']}>
          <div>
            <img className={styles['add']} src={iconAdd}></img>
          </div>
          <div>
            <img className={styles['ticket']} src={iconticket}></img>
          </div>
          <div className={styles['diamondInput_num']}>65535</div>
        </div>
        <div className={styles['diamondInput2']}>
          <div>
            <img className={styles['add']} src={iconAdd}></img>
          </div>
          <div>
            <img className={styles['ticket']} src={diamond}></img>
          </div>
          <div className={styles['diamondInput_num']}>65535</div>
        </div>
      </div>
      <div className={styles['content']}>{props.children}</div>
      <div className={styles['footer']}>
        <div
          onClick={() => {
            history.push('/hall/index');
            setfootertype('hall');
          }}
          className={styles['footer_item']}
        >
          <img src={footertype === 'hall' ? SelectHome : Home}></img>
          {footertype === 'hall' && (
            <div className={styles['footer_item_title']}>主页</div>
          )}
        </div>
        {/* <div
          onClick={() => {
            history.push('/hall/mybook');
            setfootertype('mybook');
          }}
          className={styles['footer_item']}
        >
          <img src={footertype === 'mybook' ? selectmybook : Mybook}></img>
          {footertype === 'mybook' && (
            <div className={styles['footer_item_title']}>MyBooks</div>
          )}
        </div> */}
        <div
          onClick={() => {
            history.push('/hall/userinfo');
            setfootertype('userinfo');
          }}
          className={styles['footer_item']}
        >
          <img src={footertype === 'userinfo' ? selectprofile : profile}></img>
          {footertype === 'userinfo' && (
            <div className={styles['footer_item_title']}>个人中心</div>
          )}
        </div>
      </div>
    </div>
  );
};
