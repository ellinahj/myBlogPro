import React from 'react';
import Layout from '../../src/components/common/Layout';
import MyList from '../../src/components/list/MyList';
import MyInfo from '../../src/components/list/MyInfo';

export default function List() {
  return (
    <Layout>
      <MyInfo />
      <MyList />
    </Layout>
  );
}
