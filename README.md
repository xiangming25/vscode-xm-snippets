# xm-snippets README

some useful snippets

## Features

shortcut | description
--- | ---
`log` | a `console.log` with some middle horizontal line
`func` | `react function component` both support `javascript` and `typescript`

### log

`console.log('log:$1-------------: ', $1);`

### func

#### for javascript

```
import React, { useEffect, useState } from 'react';

const Index = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    setData('hello');
  }, []);

  return <div>{data}</div>;
};

export default Index;

```

#### for typescript

```
import React, { FC, useEffect, useState } from 'react';

interface IProps {
  id: number;
}

const Index: FC<IProps> = (props) => {
  const { id } = props;
  const [state, setState] = useState<string>();

  useEffect(() => {
    setState('');
  }, []);

  return (
    <div>
      {state}
      <p></p>
    </div>
  );
};

export default Index;

```

## Release Notes

### 0.0.1

add console.log snippets

### 0.0.2

add react function component both support javascript and typescript