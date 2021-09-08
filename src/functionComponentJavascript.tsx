import React, { useEffect, useState } from 'react';

const $Index = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    setData('hello');
  }, []);

  return <div>{data}</div>;
};

export default $Index;
