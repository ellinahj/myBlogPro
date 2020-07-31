import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ThemeChange from '../../components/mypage/ThemeChange';
import { useSelector } from 'react-redux';
import Container from '../../components/common/Container';
import ProfileChange from '../../components/common/PhotoUpload';
import { theme, BlueEditBtn, BasicTitle, BasicButton } from '../../utils/theme';
import { updateInfo } from '../../api/user';

export default function InfoContainer(props) {
  const { showEdit, clickEditPw, clickEdit } = props;
  const userInfo = useSelector(state => state.common.userInfo);
  const userColor = useSelector(state => state.common.userColor);
  const [changeImgFile, setChangeImgFile] = useState([]);
  const [prevImg, setPrevImg] = useState('');
  const [value, setValue] = useState({
    nickname: '',
    main_title: ''
  });
  useEffect(() => {
    setValue({ nickname: userInfo && userInfo.nickname, main_title: userInfo && userInfo.main_title });
  }, []);
  const handlePhotoChange = (file, prevImg) => {
    setChangeImgFile(file);
    setPrevImg(prevImg);
  };

  const handleInputChange = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = () => {
    const formData = new FormData();
    changeImgFile && changeImgFile.forEach((item, index) => formData.append(`file`, item));
    console.log(changeImgFile, 'changeImgFile');
    console.log(formData, 'formData');
    const data = {
      ...value,
      user_color: userColor
    };
    console.log(data, 'data');
    formData.append('data', JSON.stringify(data));

    const token = localStorage.getItem('mydiary_token') && localStorage.getItem('mydiary_token');
    const config = {
      access_token: token
    };

    updateInfo(config, formData).then(res => {
      if (res.status < 300) {
        console.log(res.data, 'res');
      }
    });
  };
  return (
    <Con>
      <Column>
        <Row>
          <TopCon>
            <ProfileChange
              clickEdit={clickEdit}
              imgFormData={handlePhotoChange}
              prevImg={setPrevImg}
              showEdit={showEdit}
            />
            <MarginRow>
              <Title>닉네임</Title>
              <div>
                {showEdit && userInfo ? (
                  <Input name="nickname" value={value.nickname} onChange={e => handleInputChange(e)} />
                ) : (
                  userInfo && userInfo.nickname
                )}
              </div>
            </MarginRow>
            <MarginRow>
              <Title>대표문구</Title>
              <div>
                {showEdit && userInfo ? (
                  <Input name="main_title" value={value.main_title} onChange={e => handleInputChange(e)} />
                ) : (
                  userInfo && userInfo.main_title
                )}
              </div>
            </MarginRow>
            <MarginRow>
              <ThemeChange />
            </MarginRow>
            <Row>
              {showEdit && (
                <SubmitBtn onClick={handleSubmit} userColor={userColor}>
                  변경
                </SubmitBtn>
              )}
            </Row>
          </TopCon>
        </Row>
      </Column>
    </Con>
  );
}
const Con = styled(Container)`
  display: flex;
  justify-content: center;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin-top: 30px; */
  width: 100%;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
`;
const MarginRow = styled(Row)`
  margin-bottom: 20px;
`;
const Title = styled.div`
  ${BasicTitle};
  width: 120px;
`;
const TopCon = styled.div`
  width: 100%;
  background: #fafafa;
  padding: 30px;
`;
const Input = styled.input`
  width: 120px;
  height: 20px;
`;
const SubmitBtn = styled.button`
  ${BasicButton};
  margin: 30px auto 0;
  padding: 5px 10px;
  font-size: ${theme.mFont};
`;
