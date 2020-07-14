import { useState } from 'react';
import styled from 'styled-components';
import ThemeChange from '../../components/mypage/ThemeChange';
import { useSelector } from 'react-redux';
import Container from '../../components/common/Container';
import ProfileChange from '../../components/common/PhotoUpload';
import { theme, BlueEditBtn, BasicTitle, BasicButton } from '../../utils/theme';

export default function InfoContainer(props) {
  const { showEdit, clickEditPw } = props;
  const userInfo = useSelector(state => state.common.userInfo);
  const userColor = useSelector(state => state.common.userColor);
  const [changeImgFile, setChangeImgFile] = useState([]);
  const [value, setValue] = useState({
    username: '',
    mainTitle: ''
  });
  const handlePhotoChange = file => {
    setChangeImgFile(file);
  };
  const handleInputChange = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };
  return (
    <Con>
      <Column>
        <WidthRow>
          <TopCon>
            <ProfileRow>
              <Profile>
                <Img
                  src={userInfo && userInfo.profile_url ? userInfo.profile_url : '/images/default_profile.png'}
                  width={70}
                />
                <ProfileChange imgFormData={handlePhotoChange} />
              </Profile>
            </ProfileRow>

            <MarginRow>
              <Title>닉네임</Title>
              {showEdit && userInfo ? (
                <input
                  name="nickname"
                  defaultValue={userInfo && userInfo.nickname}
                  onChange={e => handleInputChange(e)}
                />
              ) : (
                userInfo && userInfo.nickname
              )}
            </MarginRow>
            <MarginRow>
              <Title>메인타이틀</Title>
              {showEdit && userInfo ? (
                <input
                  name="mainTitle"
                  defaultValue={userInfo && userInfo.main_title}
                  onChange={e => handleInputChange(e)}
                />
              ) : (
                userInfo && userInfo.main_title
              )}
            </MarginRow>
            <MarginRow>
              <ThemeChange />
            </MarginRow>
          </TopCon>
        </WidthRow>
        <WidthRow>
          <Row>
            <SubmitBtn>저장</SubmitBtn>
          </Row>
        </WidthRow>
        <WidthRow>
          <BottomCon>
            <Row>
              <Title>비밀번호</Title>
              <PwEdit onClick={e => clickEditPw(e)}>비밀번호변경</PwEdit>
            </Row>
          </BottomCon>
        </WidthRow>
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
  margin-top: 50px;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
`;
const MarginRow = styled(Row)`
  margin-bottom: 10px;
`;
const WidthRow = styled(Row)`
  display: flex;
  max-width: 630px;
`;
const Title = styled.div`
  ${BasicTitle};
  width: 120px;
`;
const TopCon = styled.div`
  width: 100%;
  background: #fafafa;
  padding: 20px;
`;
const SubmitBtn = styled.button`
  ${BasicButton};
  margin: 15px auto 60px;
  padding: 5px 10px;
  font-size: ${theme.mFont};
`;
const BottomCon = styled(Row)`
  background: #fafafa;
  padding: 20px;
`;
const ProfileRow = styled(Row)`
  justify-content: center;
  margin: 0 0 60px;
`;
const Profile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PwEdit = styled.div`
  ${BlueEditBtn}
`;
const Img = styled.img`
  width: ${props => props.width || '30px'};
  height: ${props => props.width || '30px'};
  border-radius: ${props => props.width / 2 || 15}px;
  margin-right: 0;
`;
