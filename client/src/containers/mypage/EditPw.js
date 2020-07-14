import styled from 'styled-components';
import Container from '../../components/common/Container';
import { useState } from 'react';
export default function ChangePw() {
  const [value, setValue] = useState({ prevPw: '', postPw: '' });

  const handleInputChange = e => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  console.log(value, 'value');
  return (
    <Con>
      <Column>
        <TopCon>
          <Row>
            <Title>이전비밀번호</Title>
            <input name="prevPw" value={value.prevPw} onChange={e => handleInputChange(e)} />
          </Row>
          <Row>
            <Title>새비밀번호</Title>
            <input name="postPw" value={value.postPw} onChange={e => handleInputChange(e)} />
          </Row>
          <Row>
            <Title>새비밀번호 확인</Title>
            <input name="postPw" value={value.postPw} onChange={e => handleInputChange(e)} />
            <SamePw>일치</SamePw>
          </Row>
        </TopCon>
        저장
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
const SamePw = styled.span`
  color: #32be3f;
`;
