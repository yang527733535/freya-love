import React, { useEffect } from 'react';
import Count from './Count';
import { useArray } from '@/utils/customerhook';
export default function Mybook() {
  interface Person {
    name: string;
    age: number;
  }
  const persons: Person[] = [
    {
      name: 'jack',
      age: 12,
    },
    {
      name: 'tom',
      age: 13,
    },
  ];
  const { value, clear, add } = useArray(persons);
  console.log('value: ', value);
  return (
    <div>
      {/* <Count></Count> */}
      {value.map((item) => {
        return <div key={item.name}>{item.name}</div>;
      })}
      <button
        onClick={() => {
          add({ name: 'yangte' + new Date(), age: 12 });
        }}
      >
        增加
      </button>
      <button onClick={clear}>清空</button>
    </div>
  );
}
