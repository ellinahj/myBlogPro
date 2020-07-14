import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../src/components/common/Layout';
import TopInfo from '../../src/containers/mypage/TopInfo';
import EditBasicInfo from '../../src/containers/mypage/EditBasicInfo';
import EditPw from '../../src/containers/mypage/EditPw';
import EditMenu from '../../src/containers/mypage/EditMenu';
export default function Mypage() {
  const [showEdit, setShowEdit] = useState(false);
  const [showEditPw, setShowEditPw] = useState(false);
  const clickEdit = e => {
    setShowEdit(true);
    setShowEditPw(false);
  };
  const clickEditPw = e => {
    setShowEditPw(true);
    setShowEdit(false);
  };

  return (
    <Layout>
      <>
        <TopInfo clickEdit={clickEdit} />
        {showEditPw ? (
          <EditPw />
        ) : (
          <>
            <EditBasicInfo showEdit={showEdit} clickEditPw={clickEditPw} />
            <EditMenu />
          </>
        )}
      </>
    </Layout>
  );
}
