import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Img_search from '../../../static/images/search.svg';

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [storageValue, setStorageValue] = useState('');
  useEffect(() => {
    console.log(searchValue, '검색어');
  }, [searchValue]);
  const search = () => {
    const searchArr = searchValue;

    const getSearchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    console.log(getSearchHistory, 'gh');
    const combineSearchHistory = [...getSearchHistory, searchArr];

    localStorage.setItem('searchHistory', JSON.stringify(combineSearchHistory));
  };
  const showSearchHistory = () => {
    const getSearchHistory = localStorage.getItem('searchHistory');
    const combineSearchHistory = JSON.parse(getSearchHistory);
    setStorageValue(combineSearchHistory);
  };

  return (
    <SearchWrap>
      <Img src={Img_search} width={28} onClick={search} />
      <Input
        type="text"
        onClick={showSearchHistory}
        onChange={e => setSearchValue(e.target.value)}
        placeholder="검색어를 입력하세요"
        value={searchValue}
      />
      {storageValue}
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
