import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Con from '../../components/common/Container';
import UploadComponent from '../../components/blog/ThreePhotoUpload';
import { setBlog, getCate } from '../../../src/api/blog';
import Router from 'next/router';
import { setClickMenu, setCategory } from '../../actions/base';
import { tokenConfig } from '../../utils/common';

export default function addContainer(props) {
  const dispatch = useDispatch();
  const [imgFile, setImgFile] = useState('');
  const [value, setValue] = useState({
    cate: 0,
    title: '',
    location: '',
    comment: ''
  });
  const userColor = useSelector(state => state.common.userColor);
  const category = useSelector(state => state.common.category);

  const handleData = e => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const checked = id => {
    setValue({ ...value, cate: id });
  };

  const imgFormData = file => {
    setImgFile(file);
  };

  useEffect(() => {
    getCate(tokenConfig()).then(res => {
      if (res.status === 200 && res.data) {
        dispatch(setCategory(res.data.data));
      }
    });
  }, []);

  useEffect(() => {
    if (!category) {
      return;
    }
    setValue({ cate: category[0].id, title: '', location: '', comment: '' });
  }, [category]);

  const submit = () => {
    if (value.title.length > 0 && value.comment.length > 0) {
      const existFileItems = imgFile.filter(item => item !== null);
      const formData = new FormData();

      existFileItems && existFileItems.forEach(item => formData.append(`file`, item));
      const data = value;
      formData.append('data', JSON.stringify(data));

      setBlog(tokenConfig(), formData).then(res => {
        if (res.status === 200) {
          alert('등록되었습니다.');
          Router.push('/blog');
          dispatch(setClickMenu({ cateId: value.cate }));
        }
      });
    } else {
      alert('제목과 내용은 필수항목입니다.');
    }
  };

  return (
    <Contaniner>
      <Row userColor={userColor}>
        <Subject>분류</Subject>
        {category &&
          category.length > 0 &&
          category.map((item, index) => {
            return (
              <CateWrap key={index}>
                <label className="radio_container" key={index}>
                  {item.title}
                  <input
                    type="radio"
                    onChange={e => checked(item.id)}
                    checked={item.id === value.cate}
                    autoComplete="off"
                  />
                  <span className="checkmark" />
                </label>
              </CateWrap>
            );
          })}
      </Row>
      <Row>
        <Subject>제목</Subject>
        <Input type="text" name="title" value={value.title} onChange={handleData} autoComplete="off" />
      </Row>
      <Row>
        <Subject>장소</Subject>
        <Input
          type="text"
          name="location"
          value={value.location}
          width={150}
          onChange={handleData}
          autoComplete="off"
        />
      </Row>
      <Row>
        <div>
          <Subject>내용</Subject>
          <CountRow>
            <CountComment>
              {value.comment && value.comment.length <= MAX_COMMENT ? value.comment.length : 0}
            </CountComment>
            <Slush>/</Slush>
            <Maxcount>{MAX_COMMENT}</Maxcount>
          </CountRow>
        </div>
        <Textarea
          type="text"
          maxLength="200"
          name="comment"
          value={value.comment}
          onChange={handleData}
          autoComplete="off"
        />
      </Row>
      <Row>
        <Subject>사진첨부</Subject>
        <UploadComponent imgFormData={e => imgFormData(e)} />
      </Row>
      <RowRight>
        <Col userColor={userColor}>
          <SubmitBtn onClick={e => submit(e)}>저장</SubmitBtn>
        </Col>
      </RowRight>
    </Contaniner>
  );
}
const Contaniner = styled(Con)`
  display: flex;
  flex-direction: column;
`;
const CateWrap = styled.div`
  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 20px 15px;
  box-sizing: border-box;
  align-items: center;
  @media (max-width: 768px) {
    display: block;
  }
  .end {
    margin-left: auto;
  }
  .react-datepicker__input-container input {
    height: 30px;
    font-size: ${props => props.theme.theme.sFont};
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
  .radio_container {
    display: block;
    position: relative;
    padding-left: 30px;
    margin-right: 30px;
    cursor: pointer;
    font-size: ${props => props.theme.theme.sFont};
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .radio_container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 0px;
    left: 0;
    height: 21px;
    width: 21px;
    background: #ddd;
    border-radius: 50%;
  }
  .radio_container:hover input ~ .checkmark {
    background-color: #ddd;
  }
  .radio_container input:checked ~ .checkmark {
    background-color: ${props => props.userColor || '#aaa'};
  }
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }
  .radio_container input:checked ~ .checkmark:after {
    display: block;
  }
  .radio_container .checkmark:after {
    top: 7px;
    left: 7px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${props => props.userColor || '#fff'};
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
  ${props => props.theme.BasicTitle}
`;
const Input = styled.input`
  /* flex: 1; */
  height: 30px;
  border: none;
  background: #eee;
  border-radius: 5px;
  width: ${props => props.width}px;
  flex: ${props => !props.width && 1};
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;
const Textarea = styled.textarea`
  flex: 1;
  min-height: 200px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;
const SubmitBtn = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  font-size: ${props => props.theme.theme.sFont};
`;
const RowRight = styled(Row)`
  justify-content: center;
`;
const CountRow = styled.div`
  display: flex;
  margin: 10px 20px 0 0;
`;
const CountComment = styled.div`
  color: #aaa;
  font-size: ${props => props.theme.theme.sFont};
`;
const Slush = styled.div`
  color: #aaa;
  margin: 0 2px 0;
  font-size: ${props => props.theme.theme.sFont};
`;
const Maxcount = styled.span`
  color: #aaa;
  font-size: ${props => props.theme.theme.sFont};
`;
const MAX_COMMENT = 200;
