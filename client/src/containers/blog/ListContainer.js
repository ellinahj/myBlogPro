import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
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
  const [searchValue, setSearchValue] = useState('');
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
      // .catch(error => {
      //   console.log(error, 'error.response.status');
      // });
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
      // .catch(err => {
      //   console.log(err.response.status, '1error.response.status');
      // });
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
    // .catch(error => {
    //   console.log(error, '2error.response.status');
    // });
  }, [menuIndex]);

  // const getData = load => {
  //   if (load) {
  //     fetch('http://localhost:3001/api/hello').then(res => {
  //       return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json().then(body => console.log(body, 'body'));
  //     });
  //     // .then(res => {
  //     //   console.log('getData then2');
  //     //   props.setState([...props.state, ...res.message]);
  //     // });
  //   }
  // };
  //   useEffect(() => {
  //     if (document.body.scrollHeight <= window.innerHeight && props.state.length > 0) {
  //       console.log(document.body.scrollHeight, window.innerHeight, 'scrollHeight<inner?');
  //       setLoadMore(true);
  //     }
  //   }, [state]);

  // useEffect(() => {
  //   if (loadMore) {
  //     getData(loadMore);
  //     setLoadMore(false);
  //   }
  // }, [getData, loadMore]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY + window.innerHeight === document.body.scrollHeight) {
        // console.log('-->bottom');
        // console.log(window.scrollY, '*window.scrollY');
        // console.log(document.body.scrollHeight, '*document.body.scrollHeight');
        setLoadMore(true);
      }
    });
  }, []);
  const getSearchValue = value => {
    setSearchValue(value);
  };
  useEffect(() => {
    if (searchValue !== '') {
      const storedToken = localStorage.getItem('mydiary_token') && localStorage.getItem('mydiary_token');
      const config = {
        access_token: storedToken
      };
      if (category && category.length > 0) {
        const cateId = category[0].id;
        console.log(cateId, 'cateId');
        console.log('in');
        getSearchedBlog(config, cateId, searchValue).then(res => {
          if (res.status < 300) {
            setBlogData(res.data.data);
            setSendToListValue(searchValue);
          }
        });
      }
    }
  }, [searchValue]);
  const handleClickStorageValue = value => {
    //fetch
    console.log(value);
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
      <Search setSearchedValue={getSearchValue} handleClickStorageValue={handleClickStorageValue} />
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
