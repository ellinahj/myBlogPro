import React, { useState, useEffect } from 'react';
import Layout from '../../src/components/common/Layout';
import TopInfo from '../../src/containers/mypage/TopInfo';
import EditBasicInfo from '../../src/containers/mypage/EditBasicInfo';
import EditPw from '../../src/containers/mypage/EditPw';
import EditMenu from '../../src/containers/mypage/EditMenu';
export default function Mypage() {
  const [showEdit, setShowEdit] = useState(false);
  const [showEditPw, setShowEditPw] = useState(false);
  const clickEdit = e => {
    setShowEdit(!showEdit);
  };
  const clickEditPw = e => {
    setShowEditPw(!showEditPw);
  };

  return (
    <Layout>
      <>
        <TopInfo />
        <EditBasicInfo clickEdit={clickEdit} showEdit={showEdit} setShowEdit={setShowEdit} />
        <EditMenu />
        <EditPw showEditPw={showEditPw} clickEditPw={clickEditPw} />
      </>
    </Layout>
  );
}
