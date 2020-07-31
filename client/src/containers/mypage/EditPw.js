import styled, { css } from 'styled-components';
import Container from '../../components/common/Container';
import { useState, useEffect } from 'react';
import { updatePwd, checkPwd } from '../../api/user';
import { theme, BlueEditBtn, BasicTitle, BasicButton } from '../../utils/theme';
export default function ChangePwd(props) {
  const { clickEditPw, showEditPw } = props;
  const [value, setValue] = useState({ prevPwd: '', newPwd: '', newPwdCheck: '' });
  const [prevPwdTimeout, setPrevPwdTimeout] = useState(0);
  const [newPwdTimeout, setNewPwdTimeout] = useState(0);
  const [allOk, setAllOk] = useState(false);
  const [newPwdState, setNewPwdState] = useState('');
  const [prevPwdState, setPrevPwdState] = useState('');
  const [newPwdCheckState, setNewPwdCheckState] = useState('');
  const [prevPwdTyping, setPrevPwdTyping] = useState(false);
  const regex = /^.*(?=^.{6,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  const handlePrevPwd = e => {
    const nextValue = { [e.target.name]: e.target.value };
    setValue({ ...value, ...nextValue });
    prevPwdTimeout && clearTimeout(prevPwdTimeout);
    const timer = setTimeout(() => {
      console.log('e');
      const getToken = localStorage.getItem('mydiary_token');
      if (getToken) {
        const config = {
          access_token: getToken
        };
        const data = { pwd: nextValue.prevPwd };
        checkPwd(config, data)
          .then(res => {
            console.log(res, 'res');
            if (res.status === 200) {
              console.log('in');
              setPrevPwdTyping(true);
              setPrevPwdState(true);
            }
          })
          .catch(err => {
            if (err.response.status === 401) {
              setPrevPwdTyping(true);
              setPrevPwdState(false);
            }
          });
      }
    }, 2500);
    setPrevPwdTimeout(timer);
  };

  const handleNewPwd = e => {
    setValue({ ...value, newPwd: e.target.value });
    if (!regex.test(e.target.value)) {
      console.log('false');
      setNewPwdState(false);
    } else {
      console.log('true');
      setNewPwdState(true);
    }
  };
  const handleNewPwdCheck = e => {
    setValue({ ...value, newPwdCheck: e.target.value });
    if (newPwdState && value.newPwd === e.target.value) {
      setNewPwdCheckState(true);
    } else {
      setNewPwdCheckState(false);
    }
  };
  useEffect(() => {
    if (prevPwdState && newPwdCheckState) {
      setAllOk(true);
    }
  }, [newPwdCheckState]);
  const handleSubmit = () => {
    //최종 변경
    const getToken = localStorage.getItem('mydiary_token');
    if (getToken) {
      const config = {
        access_token: getToken
      };
      const data = value;
      console.log(value, 'last value');
      updatePwd(config, data).then(res => {
        if (res.status === 200 && res.data) {
          alert('비밀번호 변경이 완료되었습니다.');
        }
      });
    }
  };
  return (
    <Con>
      <Column>
        <Row>
          <TopCon>
            <Row>
              <MainTitle>비밀번호</MainTitle>
              <PwEdit onClick={e => clickEditPw(e)}>비밀번호변경</PwEdit>
            </Row>

            {showEditPw && (
              <>
                <MarginTopRow>
                  <Title>이전비밀번호</Title>
                  <Input type="password" name="prevPwd" value={value.prevPwd} onChange={e => handlePrevPwd(e)} />
                </MarginTopRow>

                {prevPwdTyping && (prevPwdState ? <Match>일치</Match> : <Mismatch>일치하지 않습니다.</Mismatch>)}
                <MarginRow>
                  <Title>새비밀번호</Title>
                  <Input type="password" name="newPwd" value={value.newPwd} onChange={e => handleNewPwd(e)} />
                </MarginRow>
                {!newPwdState ? <Mismatch>영문,숫자,특수문자포함 6~15자리로 입력해주세요.</Mismatch> : ''}

                <MarginRow>
                  <Title>새비밀번호 확인</Title>
                  <Input
                    type="password"
                    name="newPwdCheck"
                    value={value.newPwdCheck}
                    onChange={e => handleNewPwdCheck(e)}
                  />
                </MarginRow>
                {newPwdState &&
                  value.newPwdCheck &&
                  value.newPwdCheck.length > 0 &&
                  (newPwdCheckState ? <Match>일치</Match> : <Mismatch>일치하지 않습니다.</Mismatch>)}
                <Row>
                  <SubmitBtn disabled={!newPwdCheckState} allOk={allOk} onClick={handleSubmit}>
                    변경
                  </SubmitBtn>
                </Row>
              </>
            )}
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
  margin-top: 30px;
  width: 100%;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
`;
const MarginRow = styled(Row)`
  margin-top: 20px;
`;
const MarginTopRow = styled(Row)`
  margin-top: 40px;
`;
const Title = styled.div`
  ${BasicTitle};
  width: 120px;
`;
const MainTitle = styled(Title)`
  font-size: ${props => props.theme.mlFont};
`;
const TopCon = styled.div`
  width: 100%;
  background: #fafafa;
  padding: 30px;
`;
const SubmitBtn = styled.button`
  color: #aaa;
  margin: 30px auto 0;
  padding: 5px 10px;
  font-size: ${theme.mFont};
  ${props =>
    props.allOk &&
    css`
      color: #111;
      cursor: pointer;
    `}
`;
const Input = styled.input`
  width: 150px;
  height: 20px;
`;
const PwEdit = styled.div`
  ${BlueEditBtn}
`;
const Match = styled.div`
  color: ${theme.greenFont};
  margin: 10px 0 0 0;
  font-size: ${theme.sFont};
  display: flex;
  align-items: center;
`;
const Mismatch = styled.div`
  color: ${theme.redFont};
  margin: 10px 0 0 0;
  font-size: ${theme.sFont};
  display: flex;
  align-items: center;
`;
