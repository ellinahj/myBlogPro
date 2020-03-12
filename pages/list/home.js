import React from 'react';
import styled from 'styled-components';
import Layout from '../../src/components/common/Layout';
import MyList from '../../src/components/list/MyList';
import MyInfo from '../../src/components/list/MyInfo';

export default function HomeWrap() {
  return (
    <Layout>
      <MyInfo />
      <MyList />
    </Layout>
  );
}
