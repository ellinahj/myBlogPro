import { useSelector } from 'react-redux';
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Layout from '../../src/components/common/Layout';
import Con from '../../src/components/common/Container';
import Button from '../../src/components/common/Button';
import DatePicker, { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import axios from 'axios';
import UploadComponent from '../../src/components/list/Upload';

export default function add() {
  const [startDate, setStartDate] = useState(new Date());
  const userColor = useSelector(state => state.common.enteredColor);

  const handleChange = date => {
    setStartDate(date);
  };
  registerLocale('ko', ko);

  return (
    <Layout>
      <Contaniner>
        <Row>
          <Col>
            <Button type="button">저장</Button>
          </Col>
          <Col className="end" userColor={userColor}>
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              aria-labelledby="starIconTitle"
              stroke="#777"
              strokeWidth="1"
              strokeLinecap="square"
              strokeLinejoin="miter"
              fill="none"
              color="#777"
            >
              <title id="starIconTitle">Star</title>
              <polygon points="12 17.844 6.183 20.902 7.294 14.425 2.588 9.838 9.092 8.893 12 3 14.908 8.893 21.412 9.838 16.706 14.425 17.817 20.902" />
            </svg>
          </Col>
        </Row>
        <Row>
          <Subject>분류</Subject>
          <Input type="text"></Input>
        </Row>
        <Row>
          <Subject>제목</Subject>
          <Input type="text"></Input>
        </Row>
        <Row>
          <Subject>일시</Subject>
          <DatePicker selected={startDate} onChange={handleChange} showTimeSelect dateFormat="Pp" locale="ko" />
        </Row>
        <Row>
          <Subject>장소</Subject>
          <Button type="button">장소추가</Button>
        </Row>
        <Row>
          <Subject>내용</Subject>
          <Textarea type="text"></Textarea>
        </Row>
        <Row>
          <Subject>사진첨부</Subject>
          <UploadComponent />
        </Row>
      </Contaniner>
    </Layout>
  );
}
const Contaniner = styled(Con)`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 15px;
  box-sizing: border-box;
  .end {
    margin-left: auto;
  }
  .react-datepicker__input-container input {
    height: 25px;
    font-size: 15px;
    line-height: 25px;
  }
`;
const Col = styled.div`
  display: inline-flex;
  svg:hover {
    fill: ${props => props.userColor};
    cursor: pointer;
  }
`;
const Subject = styled.div`
  margin-right: 20px;
  white-space: pre;
`;
const Input = styled.input`
  flex: 1;
  height: 25px;
`;
const Textarea = styled.textarea`
  flex: 1;
  min-height: 200px;
`;
