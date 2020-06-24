import React, { useEffect } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Layout from '../src/components/common/Layout';
import Login from '../src/containers/login';
import { useSelector } from 'react-redux';
import ListContainer from '../src/containers/main/ListContainer';

export default function Index() {
  const isLoggedIn = useSelector(state => state.common.isLoggedIn);
  console.log('index: logged In', isLoggedIn);

  return (
    <div>
      <Head>
        <title>My Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>{isLoggedIn ? <ListContainer /> : <Login />}</Layout>
    </div>
  );
}
