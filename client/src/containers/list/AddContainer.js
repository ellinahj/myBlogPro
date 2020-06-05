import { useSelector } from 'react-redux';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import DatePicker, { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import Router from 'next/router';

import styled from 'styled-components';
import Con from '../../components/common/Container';
import Button from '../../components/common/Button';
import UploadComponent from '../../components/list/Upload';

export default function addContainer() {
  const [startDate, setStartDate] = useState('');
  const [category, setCategory] = useState([]);
  const [radioIndex, setRadioIndex] = useState(0);
  const userColor = useSelector(state => state.common.enteredColor);
  useEffect(() => {
    // 반복로직... 고민
    const getToken = localStorage.getItem('mydiary_token');
    if (getToken) {
      const config = {
        headers: {
          access_token: getToken
        }
      };
      axios
        .get('http://127.0.0.1:3001/api/category', config)
        .then(res => {
          if (res.status === 200 && res.data) {
            setCategory(res.data.data);
          }
        })
        .catch(err => {
          Router.push('/login');
        });
    }
  }, []);

  const handleChange = date => {
    setStartDate(date);
  };
  registerLocale('ko', ko);
  const checked = (e, index) => {
    setRadioIndex(index);
  };
  return (
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
        <>
          {category.length > 0 &&
            category.map((item, index) => {
              return (
                <label className="radio_container" key={index}>
                  {item.title}
                  <input type="radio" onChange={e => checked(e, index)} checked={radioIndex === index} />
                  <span className="checkmark"></span>
                </label>
              );
            })}
        </>
      </Row>
      <Row>
        <Subject>제목</Subject>
        <Input type="text"></Input>
      </Row>
      <Row>
        <Subject>날짜</Subject>
        <DatePicker
          selected={startDate}
          onChange={handleChange}
          dateFormat="Pp"
          locale="ko"
          showTimeSelect
          timeFormat="HH:mm"
          showPopperArrow={false}
          showPopperArrow={false}
          timeIntervals={30}
          dateFormat="yyyy/MM/dd aa hh:mm"
          placeholderText="날짜 선택"
        />
      </Row>
      <Row>
        <Subject>장소</Subject>
        <Button type="button">장소추가</Button>
      </Row>
      <Row>
        <Subject>내용</Subject>
        <Textarea type="text" maxLength="200"></Textarea>
      </Row>
      <Row>
        <Subject>사진첨부</Subject>
        <UploadComponent />
      </Row>
    </Contaniner>
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
    padding-left: 5px;
    background: #efefef;
    border: 1px solid #aaa;
    cursor: pointer;
    color: #000;
  }
  /* Customize the label (the container) */
  .radio_container {
    display: block;
    position: relative;
    padding-left: 30px;
    margin-right: 30px;
    cursor: pointer;
    font-size: 16px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default radio button */
  .radio_container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom radio button */
  .checkmark {
    position: absolute;
    top: 3px;
    left: 0;
    height: 21px;
    width: 21px;
    background-color: #eee;
    border-radius: 50%;
  }

  /* On mouse-over, add a grey background color */
  .radio_container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the radio button is checked, add a blue background */
  .radio_container input:checked ~ .checkmark {
    background-color: #ec0909;
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  /* Show the indicator (dot/circle) when checked */
  .radio_container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  .radio_container .checkmark:after {
    top: 7px;
    left: 7px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: white;
  }
  /* .check_container {
    display: block;
    position: relative;
    padding-left: 25px;
    margin-right: 15px;
    cursor: pointer;
    font-size: 16px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  //check box
  /* Hide the browser's default checkbox */
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
