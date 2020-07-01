import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../src/components/common/Layout';
import MyInfo from '../../src/containers/mypage/Info';
import MyEdit from '../../src/containers/mypage/Edit';
import LoginPage from '../login';
export default function Mypage() {
  const isLoggedIn = useSelector(state => state.common.isLoggedIn);
  return (
    <Layout>
      {isLoggedIn ? (
        <>
          <MyInfo />
          <MyEdit />
        </>
      ) : (
        <LoginPage />
      )}
    </Layout>
  );
}
