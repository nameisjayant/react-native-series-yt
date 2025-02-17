import React, {useEffect, useState} from 'react';
import {Alert, Text} from 'react-native';

const UseEffectView = () => {
  const [countDown, setCountDown] = useState(10);

  useEffect(() => {
    if (countDown <= 0) return;
    const intervals = setTimeout(() => {
      setCountDown(prevState => prevState - 1);
    }, 1000);
    return () => {
      clearTimeout(intervals);
    };
  }, [countDown]);

  return (
    <Text
      style={{
        fontSize: 20,
        fontWeight: 600,
      }}>{`Count down : ${countDown}`}</Text>
  );
};

export default UseEffectView;
