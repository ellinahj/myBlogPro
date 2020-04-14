import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Img_search from '../../../static/images/search.svg';
import Img_close from '../../../static/images/close.svg';

export default function SearchContainer() {
  const [searchValue, setSearchValue] = useState('');
  const [storageValue, setStorageValue] = useState('');
  useEffect(() => {
    const replace = searchValue.replace(/^ /gi, '');
    setSearchValue(replace);
  }, [searchValue]);
  const search = () => {
    if (searchValue === '') return;
    const getSearchHistory = JSON.parse(localStorage.getItem('searchedHistory')) || [];
    const isDuplicate = getSearchHistory.filter(item => {
      return item === searchValue;
    });
    if (isDuplicate.length === 0) {
      const combineSearchHistory = [...getSearchHistory, searchValue];
      localStorage.setItem('searchedHistory', JSON.stringify(combineSearchHistory));
    }
  };

  const showSearchHistory = () => {
    const getSearchHistory = localStorage.getItem('searchedHistory') || [];
    const combineSearchHistory = JSON.parse(getSearchHistory);
    setStorageValue(combineSearchHistory);
  };
  const removeHistory = index => {
    const arr = JSON.parse(localStorage.getItem('searchedHistory')) || [];
    arr.splice(index, 1);
    localStorage.setItem('searchedHistory', JSON.stringify(arr));
    setStorageValue(arr);
  };

  return (
    <Container>
      <SearchCon>
        <Img src={Img_search} width={28} onClick={search} />
        <Input
          type="text"
          onClick={showSearchHistory}
          onKeyDown={e => {
            e.keyCode === 13 && search();
          }}
          onChange={e => setSearchValue(e.target.value)}
          placeholder="검색어를 입력하세요"
          value={searchValue}
        />
      </SearchCon>
      <SearchHistoryCon>
        <ul>
          {storageValue &&
            storageValue.map((item, index) => {
              return (
                <li key={index}>
                  {item}
                  <IconCloseCon onClick={e => removeHistory(index)}>
                    <IconCloseImg src={Img_close} />
                  </IconCloseCon>
                </li>
              );
            })}
        </ul>
      </SearchHistoryCon>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SearchCon = styled.div`
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
const SearchHistoryCon = styled.div`
  width: 95%;
  ul {
    padding: 0;
    width: 100%;
  }
  li {
    box-sizing: border-box;
    padding: 5px;
    width: 100%;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
  }
`;
const IconCloseCon = styled.div`
  width: 18px;
  height: 18px;
  background-color: #ddd;
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;
const IconCloseImg = styled.img`
  position: absolute;
  top: 2px;
  left: 2px;
`;
