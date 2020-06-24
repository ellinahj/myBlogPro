import React from 'react';
import Layout from '../../src/components/common/Layout';
import MyInfo from '../../src/components/mypage/Info';
import Login from '../../src/containers/login';
import { useSelector } from 'react-redux';
export default function Mypage() {
  const isLoggedIn = useSelector(state => state.common.isLoggedIn);

  return <Layout>{isLoggedIn ? <MyInfo /> : <Login />}</Layout>;
}
