import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import search from '../../../static/images/search.svg';

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    console.log(searchValue, '검색어');
  }, [searchValue]);

  return (
    <SearchWrap>
      <Img src={search} width={28} />
      <Input
        type="text"
        ref={input => input && input.focus()}
        onChange={e => setSearchValue(e.target.value)}
        placeholder="검색어를 입력하세요"
        value={searchValue}
      />
    </SearchWrap>
  );
}
const SearchWrap = styled.div`
  width: 95%;
  height: 45px;
  border-radius: 5px;
  background-color: #efefef;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  width: ${props => props.width || '32px'};
  height: ${props => props.width || '32px'};
  cursor: pointer;
  margin-left: 10px;
`;
const Input = styled.input`
  background-color: transparent;
  width: 100%;
  height: 25px;
  margin: 0 10px;
  border: none;
  outline: none;
  font-size: 18px;
`;
