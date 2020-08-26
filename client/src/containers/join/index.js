import { useState } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import { join, findId } from '../../api/auth';

export default function JoinContainer() {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwdCheck, setPwdCheck] = useState('');
  const [idAvailable, setIdAvailable] = useState(null);
  const [checkTimeout, setCheckTimeout] = useState(0);

  const enterKey = () => {
    if (window.event.keyCode === 13) {
      userJoin();
    }
  };
  const pwdConfirm = value => {
    setPwd(value);
  };
  const pwdCheckConfirm = value => {
    setPwdCheck(value);
  };

  const idConfirm = value => {
    console.log(value, 'vluaa');
    const replaceValue = value.replace(/\s/g, '');
    setId(replaceValue);
    setIdAvailable(null);
    console.log(value);
    checkTimeout && clearTimeout(checkTimeout);
    if (replaceValue.length === 0) {
      return;
    }
    if (!!replaceValue && idRegCheck(replaceValue) === true) {
      console.log(replaceValue, 'in');
      const timer = setTimeout(() => {
        const data = { user_id: replaceValue };
        findId(data).then(res => {
          console.log(res, 'res');
          if (res.status === 200) {
            if (res.data.message === 'available') {
              setIdAvailable(true);
            } else if (res.data.message === 'dupilicatedId') {
              setIdAvailable(false);
            }
          }
        });
      }, 1000);
      setCheckTimeout(timer);
    }
  };
  const userJoin = () => {
    const data = { user_id: id, password: pwd };
    join(data).then(res => {
      if (res.status === 200) {
        alert(' 회원가입이 완료되었습니다.');
        Router.push('/login');
      }
    });
  };
  console.log(idAvailable, 'idAvailable');
  return (
    <Container>
      <InputWrap>
        <Title>회원가입</Title>
        <SubTitle>아이디 *</SubTitle>
        <input name="id" value={id} onChange={e => idConfirm(e.target.value)} autoComplete="off" />
        {id.length > 0 && !idRegCheck(id) && (
          <WarningWrap>
            <Warning>영문, 영문+숫자조합 6~15자리로 입력해주세요.</Warning>
          </WarningWrap>
        )}
        {id !== '' && idAvailable === true && <Match>사용가능합니다.</Match>}
        {id !== '' && idAvailable === false && <Mismatch>이미 사용중인 아이디입니다.</Mismatch>}
        <SubTitle>비밀번호 *</SubTitle>
        <input type="password" name="pwd" value={pwd} onChange={e => pwdConfirm(e.target.value)} autoComplete="off" />
        {pwd.length > 0 && !pwRegCheck(pwd) && (
          <WarningWrap>
            <Warning>영문,숫자,특수문자(!@#$%^&+=) 조합 6~13자리로 입력해주세요.</Warning>
          </WarningWrap>
        )}
        <SubTitle>비밀번호 확인 *</SubTitle>
        <input
          type="password"
          name="pwdCheck"
          onKeyUp={enterKey}
          value={pwdCheck}
          onChange={e => pwdCheckConfirm(e.target.value)}
          autoComplete="off"
        ></input>
        {pwdCheck.length > 0 && pwdCheck !== pwd && (
          <WarningWrap>
            <Warning>비밀번호가 일치하지 않습니다.</Warning>
          </WarningWrap>
        )}
        <JoinBtn
          disabled={idAvailable !== true || !idRegCheck(id) || !pwRegCheck(pwd) || pwdCheck !== pwd}
          onClick={userJoin}
          onKeyUp={enterKey}
          allOk={idAvailable === true && idRegCheck(id) && pwRegCheck(pwd) && pwdCheck === pwd}
        >
          회원가입
        </JoinBtn>
        <BottomWrap>
          <LoginCon onClick={() => Router.push('/login')}>로그인</LoginCon>
        </BottomWrap>
      </InputWrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const InputWrap = styled.div`
  width: 300px;
  height: auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    margin-bottom: 10px;
    padding-left: 10px;
    font-size: ${props => props.theme.theme.mFont};
  }
`;
const JoinBtn = styled.button`
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  font-size: ${props => props.theme.theme.sFont};
  background: ${props => (props.allOk ? '#e36f63' : '#ddd')};
  cursor: ${props => (props.allOk ? 'pointer' : 'not-allowed')};
  text-align: center;
  line-height: 45px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #fff;
  border: none;
  border-radius: 2px;
`;

const Title = styled.div`
  text-align: center;
  color: #333;
  font-size: ${props => props.theme.theme.xlFont};
  margin-bottom: 30px;
`;
const WarningWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const SubTitle = styled.div`
  font-size: ${props => props.theme.theme.mFont};
  margin: 10px 0 10px;
`;
const Warning = styled.div`
  color: ${props => props.theme.theme.redFont};
  font-size: ${props => props.theme.theme.ssFont};
`;
const idRegex = /^[A-Za-z0-9+]{6,15}$/;

function idRegCheck(value) {
  return idRegex.test(value);
}

const pwdRegex = /^.*(?=^.{6,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

function pwRegCheck(value) {
  return pwdRegex.test(value);
}

const LoginCon = styled.div`
  margin-bottom: 15px;
  font-size: ${props => props.theme.theme.ssFont};
  cursor: pointer;
`;
const BottomWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Match = styled.div`
  color: ${props => props.theme.theme.greenFont};
  font-size: ${props => props.theme.theme.ssFont};
  display: flex;
  align-items: center;
`;
const Mismatch = styled.div`
  color: ${props => props.theme.theme.redFont};
  font-size: ${props => props.theme.theme.ssFont};
  display: flex;
  align-items: center;
`;
