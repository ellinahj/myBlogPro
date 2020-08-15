import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import MyList from '../../components/blog/List';
import Menu from '../../components/blog/Menu';
import { colorLuminance } from '../../utils/common';
import { setCategory, setClickMenu } from '../../actions/base';
import { getCate, getBlog, getSearchedBlog, deleteBlog } from '../../api/blog';
import Search from '../../components/blog/Search';
import { theme } from '../../utils/theme';

export default function ListContainer() {
  const dispatch = useDispatch();
  const userColor = useSelector(state => state.common.userColor);
  const luminantColor = userColor && colorLuminance(userColor, 0.5);
  const userInfo = useSelector(state => state.common.userInfo);
  const category = useSelector(state => state.common.category);
  const clickMenu = useSelector(state => state.common.clickMenu);

  const [isSticky, setSticky] = useState(false);
  const [blogData, setBlogData] = useState(undefined);
  const [searchValue, setSearchValue] = useState('');
  const [searched, setSearched] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset >= 150) {
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
    const getToken = localStorage.getItem('mydiary_token');
    if (getToken) {
      const config = {
        access_token: getToken
      };
      getCate(config).then(res => {
        if (res.status === 200 && res.data) {
          dispatch(setCategory(res.data.data));
          if (!clickMenu.cateId) {
            dispatch(setClickMenu({ cateId: res.data.data[0].id }));
          }
        }
      });
    }
  }, []);

  const fetchBlogData = cateId => {
    const storedToken = localStorage.getItem('mydiary_token');
    if (!storedToken) {
      return;
    }
    const config = {
      access_token: storedToken
    };
    getBlog(config, cateId).then(res => {
      if (res.status === 200) {
        setBlogData(res.data.data);
        dispatch(setClickMenu({ cateId }));
        setSearched(true);
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
      const storedToken = localStorage.getItem('mydiary_token') && localStorage.getItem('mydiary_token');
      const config = {
        access_token: storedToken
      };
      getSearchedBlog(config, clickMenu && clickMenu.cateId, value).then(res => {
        if (res.status === 200) {
          setBlogData(res.data.data);
        }
      });
    }
  };
  const deleteItem = (id, imageName) => {
    const getToken = localStorage.getItem('mydiary_token');
    if (getToken) {
      const config = {
        access_token: getToken
      };
      const data = { id, image_url: imageName };
      deleteBlog(config, data).then(res => {
        if (res.status === 200 && res.data) {
          setBlogData(res.data.data);
          alert('삭제되었습니다.');
        }
      });
    }
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
`;
const AllViewWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px 0 0;
  padding-right: 40px;
  box-sizing: border-box;
`;
const AllView = styled.div`
  color: ${props => props.userColor && props.userColor};
  font-size: ${theme.mFont};
  cursor: pointer;
`;
