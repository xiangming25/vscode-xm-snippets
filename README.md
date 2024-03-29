## common

shortcut | description
--- | ---
`todo` | `// TODO: ==== modify - delete ====`
`fixme` | `// FIXME: ==== 待修复 ====`
`log` | `console.log('log:------$1：$lineNumber------: ', $0);`
`divide-line`、`line-divide` | `// ======================分隔线======================`
`///`、`、、、` | `/**  */`
``、、` | `// `

<!-- ## javascript

shortcut | description
--- | ---
`values` | `Object.values(obj)`
`assign` | `Object.assign({}, obj)`
`freeze` | `Object.freeze(obj)`
`promise` | `new Promise((resolve, reject) => {})`
`resolve` | `Promise.resolve()`
`reject` | `Promise.reject()`
`race` | `Promise.race()`
`all` | `Promise.all([])`
`stringify` | `JSON.stringify()`
`parse` | `JSON.parse()` -->

## React

shortcut | description
--- | ---
`dp` | `const { value } = props`
`dpc` | `const { value } = this.props`
`dsc` | `const { value } = this.state`
`do` | `const { value } = objectName`
`da` | `const [ value ] = arrayName`
`className` | `className={styles.}`

### func (component for javascript)

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

### func (component for typescript)

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

### reactComponent (component for class)

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

### Hooks

#### useEffect

```
useEffect(() => {

}, []);
```

#### useCallback

```
useCallback(() => {

}, []);
```

#### useMemo

```
useMemo(() => {}, []);
```

#### useState

```
const [, set] = useState();
```

#### useRef

```
const $1Ref = useRef($0);
```

#### useImperativeHandle

```
useImperativeHandle(ref, () => ({

}), []);
```