import React, { FC, ReactElement, useCallback, useRef, useState } from 'react';

const Count: FC = (): ReactElement => {
  //  状态一改变 可以不被重新创建
  const [count, setcount] = useState<number>(0);
  // 状态一改变 可以不被重新创建
  let timer = useRef<any>();
  const start = useCallback(() => {
    if (!timer.current) {
      timer.current = setInterval(() => {
        setcount((count) => count + 1);
      }, 1000);
    }
  }, []);
  const pause = useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  }, []);
  const reset = useCallback(() => {
    clearInterval(timer.current);
    timer.current = null;
    setcount(0);
  }, []);

  return (
    <div>
      <h1>计数器:{count}</h1>
      <div>
        <button onClick={start}>启动</button>
      </div>
      <div>
        <button onClick={pause}>暂停</button>
      </div>
      <div>
        <button onClick={reset}>重置</button>
      </div>
    </div>
  );
};
export default Count;
