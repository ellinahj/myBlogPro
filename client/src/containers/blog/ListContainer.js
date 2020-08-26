import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import MyList from '../../components/blog/List';
import Menu from '../../components/blog/Menu';
import { colorLuminance, tokenConfig } from '../../utils/common';
import { setCategory, setClickMenu, setLoading } from '../../actions/base';
import { getCate, getBlog, getSearchedBlog, deleteBlog } from '../../api/blog';
import Search from '../../components/blog/Search';
import { theme } from '../../utils/theme';

export default function ListContainer() {
  const dispatch = useDispatch();
  const userColor = useSelector(state => state.common.userColor);
  const luminantColor = userColor && colorLuminance(userColor, 0.5);
  const userInfo = useSelector(state => state.common.userInfo);
  const clickMenu = useSelector(state => state.common.clickMenu);

  const [isSticky, setSticky] = useState(false);
  const [blogData, setBlogData] = useState(undefined);
  const [searchValue, setSearchValue] = useState('');
  const [searched, setSearched] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset >= 140) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    getCate(tokenConfig()).then(res => {
      if (res.status === 200 && res.data) {
        dispatch(setCategory(res.data.data));
        if (!clickMenu.cateId) {
          dispatch(setClickMenu({ cateId: res.data.data[0].id }));
        }
      }
    });
  }, []);
  const fetchBlogData = cateId => {
    dispatch(setLoading(true));
    getBlog(tokenConfig(), cateId).then(res => {
      if (res.status === 200) {
        setBlogData(res.data.data);
        dispatch(setClickMenu({ cateId }));
        setSearched(true);
        dispatch(setLoading(false));
      }
    });
  };

  const handleMenuClick = cateId => {
    fetchBlogData(cateId);
    setSearched(false);
  };

  useEffect(() => {
    if (!blogData && clickMenu.cateId) {
      fetchBlogData(clickMenu.cateId);
    }
  }, [blogData, clickMenu]);

  const getSearch = value => {
    setSearchValue(value);
    if (blogData && blogData.length !== 0 && value !== '') {
      getSearchedBlog(tokenConfig(), clickMenu && clickMenu.cateId, value).then(res => {
        if (res.status === 200) {
          setBlogData(res.data.data);
        }
      });
    }
  };
  const deleteItem = (id, imageName) => {
    const delQuestion = confirm('삭제하시겠습니까?');
    if (!delQuestion) {
      return;
    }
    const data = { id, image_url: imageName };
    deleteBlog(tokenConfig(), data).then(res => {
      if (res.status === 200 && res.data) {
        setBlogData(res.data.data);
        alert('삭제되었습니다.');
      }
    });
  };

  return (
    <ListCon>
      <Menu handleMenuClick={handleMenuClick} luminantColor={luminantColor} isSticky={isSticky} userColor={userColor} />
      {blogData && blogData.length !== 0 && <Search getSearch={getSearch} blogData={blogData} searched={searched} />}
      {searchValue !== '' && searched && (
        <Col>
          <AllViewWrap>
            <AllView onClick={() => handleMenuClick(clickMenu.cateId)} userColor={userColor}>
              전체보기
            </AllView>
          </AllViewWrap>
          <SearchResult>'{searchValue}'(으)로 검색한 결과입니다.</SearchResult>
        </Col>
      )}
      <MyList
        blogData={blogData}
        luminantColor={luminantColor}
        userInfo={userInfo}
        userColor={userColor}
        deleteItem={deleteItem}
      />
    </ListCon>
  );
}
const ListCon = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
`;
const AllViewWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px 0 0;
  box-sizing: border-box;
`;
const AllView = styled.div`
  color: ${props => props.userColor && props.userColor};
  font-size: ${theme.mFont};
  cursor: pointer;
`;
const SearchResult = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
