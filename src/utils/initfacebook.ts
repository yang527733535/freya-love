// export
import { facebookLogin } from './login';
function initFaceBook() {
  const script = document.createElement('script');
  script.src = 'https://connect.facebook.net/en_US/fbinstant.6.3.js';
  script.id = 'fbinstant';
  document.body.appendChild(script);
  const win: any = window;
  //在这里要封装一个逻辑 判断是否本地还是线上调试
  script.onload = () => {
    win?.FBInstant.initializeAsync().then(function () {
      // console.log('startGameAsync', win?.FBInstant);
      facebookLogin();
      console.info('=====> FBInstant.startGameAsync');
      win.FBInstant.startGameAsync().then(function () {
        // console.log('startGameAsync', win?.FBInstant);
        console.info('=====> FBInstant.startGameAsync');
        // history.replace(`/base`);
        console.info(
          '=====> screen size: ' +
            `${window.screen.width} x ${window.screen.height}`,
        );
        console.info(
          '=====> window size: ' +
            `${window.innerWidth} x ${window.innerHeight}`,
        );
      });
    });
  };
}

export default initFaceBook;
