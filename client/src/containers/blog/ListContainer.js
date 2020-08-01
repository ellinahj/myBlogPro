import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import MyList from '../../components/blog/List';
import Menu from '../../components/blog/Menu';
import { colorLuminance } from '../../utils/common';
import { setCate } from '../../actions/base';
import { getCate, getBlog, getSearchedBlog } from '../../api/blog';
import Search from '../../components/blog/Search';
import store from '../../store';
export default function ListContainer() {
  const dispatch = useDispatch();
  const userColor = useSelector(state => state.common.userColor);
  const luminantColor = userColor && colorLuminance(userColor, 0.7);
  const userInfo = useSelector(state => state.common.userInfo);
  const category = useSelector(state => state.common.category);
  const [menuIndex, setMenuIndex] = useState(0);
  const [isSticky, setSticky] = useState(false);
  const [loadMore, setLoadMore] = useState(true);
  const [selectedCateId, setSelectedCateId] = useState();
  const [blogData, setBlogData] = useState(undefined);
  const [sendToListValue, setSendToListValue] = useState('');

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
          if (category && category.length > 0) {
            setSelectedCateId(category[0].id);
          }
          store.dispatch(setCate(res.data.data));
        }
      });
    }
  }, []);

  const handleMenuClick = (index, cateId) => {
    // 메뉴 컴포넌트 변경 클릭
    setMenuIndex(index);
    setSelectedCateId(cateId);
  };
  useEffect(() => {
    const storedToken = localStorage.getItem('mydiary_token') && localStorage.getItem('mydiary_token');
    const config = {
      access_token: storedToken
    };
    if (category && category.length > 0) {
      const cateId = category[0].id;
      getBlog(config, cateId).then(res => {
        if (res.status < 300) {
          setBlogData(res.data.data);
        }
      });
    }
  }, [category]);

  useEffect(() => {
    const storedToken = localStorage.getItem('mydiary_token') && localStorage.getItem('mydiary_token');
    const config = {
      access_token: storedToken
    };
    const cateId = selectedCateId;
    getBlog(config, cateId).then(res => {
      if (res.status < 300) {
        setBlogData(res.data.data);
      }
    });
  }, [menuIndex]);

  const getSearch = value => {
    if (blogData && blogData.length !== 0 && value !== '') {
      const storedToken = localStorage.getItem('mydiary_token') && localStorage.getItem('mydiary_token');
      const config = {
        access_token: storedToken
      };
      if (category && category.length > 0) {
        const cateId = category[0].id;
        getSearchedBlog(config, cateId, value).then(res => {
          if (res.status < 300) {
            setBlogData(res.data.data);
            setSendToListValue(value);
          }
        });
      }
    }
  };
  return (
    <ListCon>
      <Menu
        handleMenuClick={handleMenuClick}
        luminantColor={luminantColor}
        isSticky={isSticky}
        menuIndex={menuIndex}
        userColor={userColor}
      />
      {blogData && blogData.length !== 0 && <Search getSearch={getSearch} />}
      <MyList
        blogData={blogData}
        // scrollable={true}
        luminantColor={luminantColor}
        // isSticky={isSticky}
        // menuIndex={menuIndex}
        userInfo={userInfo}
        userColor={userColor}
        sendToListValue={sendToListValue}
      />
    </ListCon>
  );
}
const ListCon = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
