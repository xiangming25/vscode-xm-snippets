import React, { FC, useEffect, useState } from 'react';

interface IProps {
  id: number;
}

const $Index: FC<IProps> = (props) => {
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

export default $Index;
