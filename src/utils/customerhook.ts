import { useEffect, useState } from 'react';

export const useMount = (callback: Function) => {
  useEffect(() => {
    callback();
  }, []);
};

const isFalsy = (value: unknown) => {
  return value === 0 ? false : !value;
};

export const cleanObject = (object: any): any => {
  const result: any = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    // 这里的0要特殊处理下
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useDebounce = (value: any, delay: number) => {
  const [debounceValue, setdebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setdebounceValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounceValue;
};

export const useArray = <T>(initialArray: T[]) => {
  const [value, setvalue] = useState(initialArray);
  return {
    value,
    setvalue,
    add: (item: T) => setvalue([...value, item]),
    clear: () => setvalue([]),
  };
};
