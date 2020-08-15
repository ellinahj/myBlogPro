import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { theme } from '../../utils/theme';

export default function SearchContainer(props) {
  const [searchValue, setSearchValue] = useState('');
  const [storageValue, setStorageValue] = useState('');
  const [showHistory, setShowHistory] = useState(false);
  const inputArea = useRef(null);
  const bodyArea = useRef(null);
  const { getSearch, searched } = props;

  useEffect(() => {
    const replace = searchValue.replace(' ', '');
    setSearchValue(replace);
  }, [searchValue]);
  useEffect(() => {
    if (!searched) {
      setSearchValue('');
    }
  }, [searched]);

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
    getSearch(searchValue);
    setShowHistory(false);
  };

  const showSearchHistory = () => {
    const getSearchHistory = localStorage.getItem('searchedHistory');
    const combineSearchHistory = JSON.parse(getSearchHistory);
    setStorageValue(combineSearchHistory);
    setShowHistory(true);
  };

  const removeHistory = index => {
    const arr = JSON.parse(localStorage.getItem('searchedHistory')) || [];
    arr.splice(index, 1);
    localStorage.setItem('searchedHistory', JSON.stringify(arr));
    setStorageValue(arr);
    arr.length === 0 && setStorageValue(null);
  };
  useEffect(() => {
    //입력창 밖 선택 시 검색내역창 감추기
    function handleClickOutside(e) {
      if (inputArea.current && !inputArea.current.contains(e.target) && bodyArea.current.contains(e.target)) {
        setShowHistory(false);
        setSearchValue('');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [inputArea]);

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  return (
    <ListArea ref={bodyArea}>
      <Content>
        <Container>
          <SearchCon ref={inputArea}>
            <Input
              type="text"
              onClick={showSearchHistory}
              onKeyDown={e => {
                e.keyCode === 13 && search();
              }}
              onChange={e => handleChange(e)}
              placeholder="검색어를 입력하세요"
              value={searchValue}
            />
            <Img src={'/images/search.svg'} width={28} onClick={search} />
          </SearchCon>
          <SearchHistoryCon showHistory={showHistory} ref={inputArea}>
            <ul>
              {storageValue ? (
                storageValue.map((item, index) => {
                  return (
                    <li key={index}>
                      <Word
                        onClick={() => {
                          getSearch(storageValue[index]);
                          setShowHistory(false);
                        }}
                      >
                        {item}
                      </Word>
                      <IconCloseCon onClick={() => removeHistory(index)}>
                        <IconCloseImg src={'/images/close.svg'} />
                      </IconCloseCon>
                    </li>
                  );
                })
              ) : (
                <HistoryNotexist>최근 검색어가 없습니다.</HistoryNotexist>
              )}
            </ul>
          </SearchHistoryCon>
        </Container>
      </Content>
    </ListArea>
  );
}
const ListArea = styled.div`
  width: 100%;
  height: 100%;
`;
const Content = styled.section`
  padding: 40px 40px 0;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SearchCon = styled.div`
  width: 100%;
  height: 45px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  width: ${props => props.width || '32px'};
  height: ${props => props.width || '32px'};
  cursor: pointer;
  margin-right: 15px;
`;
const Input = styled.input`
  background-color: transparent;
  width: 100%;
  height: 25px;
  margin: 0 20px;
  border: none;
  outline: none;
  font-size: 18px;
  @media (max-width: 480px) {
    ::-webkit-input-placeholder {
      font-size: ${theme.sFont};
    }
  }
`;
const SearchHistoryCon = styled.div`
  display: ${props => !props.showHistory && 'none'};
  width: 99.6%;
  border-bottom: 1px solid #eee;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  ul {
    padding: 0;
    width: 100%;
  }
  li {
    box-sizing: border-box;
    padding: 5px 20px;
    width: 100%;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
`;
const HistoryNotexist = styled.div`
  color: #aaa;
`;
const Word = styled.div`
  width: 100%;
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
