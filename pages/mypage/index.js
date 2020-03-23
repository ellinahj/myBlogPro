import React, { useState } from 'react';
import Layout from '../../src/components/common/Layout';
import MyInfo from '../../src/components/mypage/MyInfo';
import MoveLogin from '../../src/components/common/MoveLogin';

export default function Mypage() {
  const [isLogin, setIsLogin] = useState(false);
  return <Layout>{isLogin ? <MyInfo /> : <MoveLogin />}</Layout>;
}
