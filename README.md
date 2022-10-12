# xm-snippets README

some useful snippets for front-end

## Features

### common

shortcut | description
--- | ---
`todo` | `// TODO: xm [modify|delete]`


### js

shortcut | description
--- | ---
`dp` | `const { $1 } = props`
`dpc` | `const { $1 } = this.props`
`dsc` | `const { $1 } = this.state`
`do` | `const { value } = objectName`
`da` | `const [ value ] = arrayName`


### Log

shortcut | description
--- | ---
`log` | `console.log('log:$1-------------: ', $1);`

### divide line

shortcut | description
--- | ---
`divide-line`、`line-divide` | `// ==============================分隔线==============================`

### Array

shortcut | description
--- | ---
`map` | `array.map((item, index) => {})`
`forEach` | `array.forEach((item, index) => {})`
`filter` | `array.filter((item, index) => {})`
`find` | `array.find((item, index) => {})`
`findIndex` | `array.findIndex((item, index) => {})`
`includes` | `array.includes((item, index) => {})`
`every` | `array.every((item, index) => {})`
`some` | `array.some((item, index) => {})`
`reduce` | `array.reduce((accumulator, currentValue, index) => {}, initialValue)`
`reduceRight` | `array.reduceRight((accumulator, currentValue, index) => {}, initialValue)`

### Object

shortcut | description
--- | ---
`keys` | `Object.keys(obj)`
`values` | `Object.values(obj)`
`assign` | `Object.assign({}, obj)`
`freeze` | `Object.freeze(obj)`

### Promise

shortcut | description
--- | ---
`promise` | `new Promise((resolve, reject) => {})`
`resolve` | `Promise.resolve()`
`reject` | `Promise.reject()`
`race` | `Promise.race()`
`all` | `Promise.all([])`

### JSON

shortcut | description
--- | ---
`stringify` | `JSON.stringify()`
`parse` | `JSON.parse()`

### Others

#### switch

```
switch (key) {
  case value:
    
    break;

  default:
    break;
}
```

#### for

```
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}
```

#### func (component for javascript)

```
import React, { useEffect, useState } from 'react';

const Index = () => {

  useEffect(() => {}, []);

  return (
    <section>
    </section>
  );
};

export default Index;

```

#### func (component for typescript)

```
import React, { FC, useEffect, useState } from 'react';

interface IProps {
}

const Index: FC<IProps> = (props) => {
  const {} = props;

  useEffect(() => {}, []);

  return (
    <section>
    </section>
  );
};

export default Index;

```

#### reactComponent (component for class)

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