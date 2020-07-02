import styled from 'styled-components';
import ThemeChange from '../../components/mypage/ThemeChange';
import { useSelector } from 'react-redux';
import defaultImg from '../../../static/images/default_profile.png';
import edit from '../../../static/images/edit.svg';
import Container from '../../components/common/Container';
import Router from 'next/router';
export default function EditContainer(props) {
  const { showEdit, clickEditPw } = props;
  const userInfo = useSelector(state => state.common.userInfo);
  return (
    <Con>
      <Column>
        <Row>
          <TopCon>
            <Row>
              <ProfileRow>
                <Profile>
                  <Img src={userInfo && userInfo.profile_url ? userInfo.profile_url : defaultImg} width={70} />
                  <EditWrap>
                    <EditImg src={edit} width={16} />
                  </EditWrap>
                </Profile>
              </ProfileRow>
            </Row>
            <Row>
              <Title>닉네임</Title>
              {showEdit && userInfo ? <input value={userInfo && userInfo.nickname} /> : userInfo && userInfo.nickname}
            </Row>
            <Row>
              <Title>메인타이틀</Title>
              {showEdit && userInfo ? (
                <input value={userInfo && userInfo.main_title} />
              ) : (
                userInfo && userInfo.main_title
              )}
            </Row>
            <Row>
              <ThemeChange />
            </Row>
          </TopCon>
        </Row>
        <Row>
          <button>저장</button>
        </Row>
        <Row>
          <BottomCon>
            <Title>
              비밀번호
              <PwEdit onClick={e => clickEditPw(e)}>비밀번호변경</PwEdit>
            </Title>
          </BottomCon>
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
  margin-top: 50px;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
  max-width: 630px;
`;
const Title = styled.div`
  width: 120px;
`;
const TopCon = styled.div`
  width: 100%;
  background: #fafafa;
  padding: 20px;
  margin-bottom: 50px;
`;
const BottomCon = styled(Row)`
  background: #fafafa;
  padding: 20px;
`;
const ProfileRow = styled(Row)`
  justify-content: center;
  margin: 20px 0 60px;
`;
const Profile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  width: ${props => props.width || '30px'};
  height: ${props => props.width || '30px'};
  border-radius: ${props => props.width / 2 || 15}px;
  margin-right: 15px;
`;
const PwEdit = styled.div`
  color: #6da3f7;
  font-weight: bold;
  cursor: pointer;
`;
const EditWrap = styled.div`
  cursor: pointer;
  background-color: #666;
  position: absolute;
  bottom: 0;
  left: 46px;
  margin-right: 0;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const EditImg = styled(Img)`
  margin-right: 0;
`;
