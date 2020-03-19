import React from 'react';
import Layout from '../../src/components/common/Layout';
import MyInfo from '../../src/components/mypage/MyInfo';

export default function Mypage() {
  // const dispatch = useDisp atch();
  // const [openPicker, setOpenPicker] = useState(false);
  // const handlePickComplete = color => {
  //   dispatch(setThemeColor(color.hex));
  //   localStorage.setItem('myThemeColor', color.hex);
  //   setOpenPicker(!openPicker);
  // };
  // const userColor = useSelector(state => state.common.enteredColor);
  return (
    <Layout>
      <MyInfo />
    </Layout>
  );
}
// const ThemeButton = styled.div`
//   width: 90px;
//   height: 38px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 10px;
//   outline: none;
//   cursor: pointer;
//   border: 1px solid ${props => props.userColor};
//   color: ${props => props.userColor};
//   :hover {
//     opacity: 0.7;
//   }
// `;
