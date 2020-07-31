import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker, { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import Router from 'next/router';

import styled from 'styled-components';
import Con from '../../components/common/Container';
import Button from '../../components/common/Button';
import UploadComponent from '../../components/blog/ThreePhotoUpload';
import { setBlog } from '../../../src/api/blog';

export default function addContainer() {
  const [startDate, setStartDate] = useState('');
  const [category, setCategory] = useState([]);
  const [radioIndex, setRadioIndex] = useState(0);
  const [imgFile, setImgFile] = useState('');
  const userColor = useSelector(state => state.common.userColor);

  const handleChange = date => {
    setStartDate(date);
  };
  registerLocale('ko', ko);
  const checked = (e, index) => {
    setRadioIndex(index);
  };
  const imgFormData = file => {
    setImgFile(file);
  };
  useEffect(() => {
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
  const upload = () => {
    const formData = new FormData();
    imgFile && imgFile.forEach((item, index) => formData.append(`file`, item));
    console.log(imgFile, 'file');
    console.log(formData, 'formData');
    const data = {
      id: 1,
      id2: 'id2'
    };
    formData.append('data', JSON.stringify(data));
    const getToken = localStorage.getItem('mydiary_token');
    if (getToken) {
      const config = {
        access_token: getToken
      };
      // console.log(data, 'in data');
      setBlog(config, formData).then(res => {
        if (res.status === 200 && res.data) {
          console.log(res.data, 'post data');
        }
      });
    }
  };
  return (
    <Contaniner>
      <Row>
        <Subject>분류</Subject>
        <>
          {category.length > 0 &&
            category.map((item, index) => {
              return (
                <label className="radio_container" key={index} userColor={userColor}>
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
        <Input type="text" name="title"></Input>
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
        <Subject name="content">내용</Subject>
        <Textarea type="text" maxLength="200"></Textarea>
      </Row>
      <Row>
        <Subject>사진첨부</Subject>
        <UploadComponent imgFormData={e => imgFormData(e)} />
      </Row>
      <RowRight>
        <Col>
          <SubmitBtn onClick={e => upload(e)}>저장</SubmitBtn>
        </Col>
      </RowRight>
    </Contaniner>
  );
}
const Contaniner = styled(Con)`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 20px 15px;
  box-sizing: border-box;
  align-items: center;
  .end {
    margin-left: auto;
  }
  .react-datepicker__input-container input {
    height: 30px;
    font-size: 15px;
    line-height: 30px;
    padding-left: 5px;
    background: #eee;
    outline: none;
    border: 0;
    border-radius: 5px;
    ::placeholder {
      color: #000;
    }
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
    background: ${props => props.userColor || '#aaa'};
    border-radius: 50%;
  }

  /* On mouse-over, add a grey background color */
  .radio_container:hover input ~ .checkmark {
    background-color: ${props => props.userColor || '#aaa'};
  }

  /* When the radio button is checked, add a blue background */
  .radio_container input:checked ~ .checkmark {
    background-color: ${props => props.userColor || '#aaa'};
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
    background: ${props => props.userColor || '#fff'};
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
  height: 30px;
  border: none;
  background: #eee;
  border-radius: 5px;
`;
const Textarea = styled.textarea`
  flex: 1;
  min-height: 200px;
`;
const SubmitBtn = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  font-size: 16px;
`;
const RowRight = styled(Row)`
  justify-content: center;
`;
