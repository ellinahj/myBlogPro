import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import MyList from '../../components/blog/List';
import Menu from '../../components/blog/Menu';
import { colorLuminance } from '../../utils/common';
import { setCategory, setClickMenu } from '../../actions/base';
import { getCate, getBlog, getSearchedBlog, deleteBlog } from '../../api/blog';
import Search from '../../components/blog/Search';

export default function ListContainer() {
  const dispatch = useDispatch();
  const userColor = useSelector(state => state.common.userColor);
  const luminantColor = userColor && colorLuminance(userColor, 0.5);
  const userInfo = useSelector(state => state.common.userInfo);
  const category = useSelector(state => state.common.category);
  const clickMenu = useSelector(state => state.common.clickMenu);

  const [isSticky, setSticky] = useState(false);
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
      }
    });
  };

  const handleMenuClick = cateId => {
    fetchBlogData(cateId);
  };

  useEffect(() => {
    if (!blogData && clickMenu.cateId) {
      fetchBlogData(clickMenu.cateId);
    }
  }, [blogData, clickMenu]);

  const getSearch = value => {
    if (blogData && blogData.length !== 0 && value !== '') {
      const storedToken = localStorage.getItem('mydiary_token') && localStorage.getItem('mydiary_token');
      const config = {
        access_token: storedToken
      };
      getSearchedBlog(config, clickMenu && clickMenu.cateId, value).then(res => {
        if (res.status === 200) {
          setBlogData(res.data.data);
          setSendToListValue(value);
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
      {blogData && blogData.length !== 0 && <Search getSearch={getSearch} />}
      <MyList
        blogData={blogData}
        luminantColor={luminantColor}
        userInfo={userInfo}
        userColor={userColor}
        sendToListValue={sendToListValue}
        deleteItem={deleteItem}
        handleMenuClick={handleMenuClick}
      />
    </ListCon>
  );
}
const ListCon = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
