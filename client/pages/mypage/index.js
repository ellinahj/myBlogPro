import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../src/components/common/Layout';
import MyInfo from '../../src/containers/mypage/Info';
import MyEdit from '../../src/containers/mypage/Edit';
import EditPw from '../../src/containers/mypage/ChangePw';
import ChangeMenu from '../../src/containers/mypage/ChangeMenu';
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
        <MyInfo clickEdit={clickEdit} />
        {showEditPw ? (
          <EditPw />
        ) : (
          <>
            <MyEdit showEdit={showEdit} clickEditPw={clickEditPw} /> <ChangeMenu showEdit={showEdit} />
          </>
        )}
      </>
    </Layout>
  );
}
