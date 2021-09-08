# xm-snippets README

some useful snippets

## Features

shortcut | description
--- | ---
`log` | `console.log('log:$1-------------: ', $1);`
`.map` | `.map((item, index) => {})`
`.forEach` | `.forEach((item, index) => {})`
`.filter` | `.filter((item, index) => {})`
`.find` | `.find((item, index) => {})`
`.findIndex` | `.findIndex((item, index) => {})`
`.includes` | `.includes((item, index) => {})`
`.every` | `.every((item, index) => {})`
`.some` | `.some((item, index) => {})`
`.reduce` | `.reduce((accumulator, currentValue, index) => {}, initialValue)`
`.reduceRight` | `.reduceRight((accumulator, currentValue, index) => {}, initialValue)`
`switch` | `switch (key) { case value: break; default: break }`
`for` | `for (let index = 0; index < array.length; index++) { const element = array[index] }`
`func` | `react function component` both support `javascript` and `typescript`
`reactComponent` | `react class component`


### switch

```
switch (key) {
  case value:
    
    break;

  default:
    break;
}
```

### for

```
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}
```

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

### reactComponent

```
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Index extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {

    };
  }
  static getDerivedStateFromProps(props, state) {}

  componentDidMount() {
    // do something
  }

  shouldComponentUpdate(nextProps, nextState) {}

  getSnapshotBeforeUpdate(prevProps, prevState) {}

  componentDidUpdate(prevProps, prevState, snapshot) {}

  componentWillUnmount() {
    // do something
  }

  render() {
    return (
      <div>这里是组件</div>
    );
  }
}

```