export const diabledZoom = () => {
  document.addEventListener(
    'touchstart',
    function (event) {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    },
    { passive: false },
  );
  var lastTouchEnd = 0;
  document.addEventListener(
    'touchend',
    function (event) {
      var now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    },
    { passive: false },
  );
  // iOS 里有一组双指手势操作的事件：gesturestart、gesturechange、gestureend
  document.addEventListener(
    'gesturestart',
    function (event) {
      event.preventDefault();
    },
    { passive: false },
  );
};
