import React, { useState } from 'react';
import Layout from '../../src/components/common/Layout';
import MyList from '../../src/components/list/MyList';
import MyInfo from '../../src/components/list/MyInfo';

export default function List() {
  const [state, setState] = useState([]);
  return (
    <Layout>
      <MyInfo />
      <MyList state={state} setState={setState} scrollable={'true'} />
    </Layout>
  );
}
