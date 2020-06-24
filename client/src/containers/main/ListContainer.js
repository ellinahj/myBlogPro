import MyList from '../../components/main/List';
import MyInfo from '../../components/main/Info';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { colorLuminance } from '../../utils/common';
import axios from 'axios';
import { setLogin } from '../../actions/base';

export default function ListContainer() {
  const userColor = useSelector(state => state.common.enteredColor);
  const luminantColor = colorLuminance(userColor, 0.7);
  const [menuIndex, setMenuIndex] = useState(0);
  const [isSticky, setSticky] = useState(false);
  const [category, setCategory] = useState([]);
  const [loadMore, setLoadMore] = useState(true);
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.common.userInfo);
  const userName = userInfo && userInfo;

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
  const handleClick = index => {
    setMenuIndex(index);
  };

  // const [loading, response, error] = useRequest('https://jsonplaceholder.typicode.com/posts');
  // console.log(loading, response, error);
  // if (!loading && !response) {
  //   return null;
  // }

  const getData = load => {
    if (load) {
      fetch('http://localhost:3001/api/hello').then(res => {
        return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json().then(body => console.log(body, 'body'));
      });
      // .then(res => {
      //   console.log('getData then2');
      //   props.setState([...props.state, ...res.message]);
      // });
    }
  };
  //   useEffect(() => {
  //     if (document.body.scrollHeight <= window.innerHeight && props.state.length > 0) {
  //       console.log(document.body.scrollHeight, window.innerHeight, 'scrollHeight<inner?');
  //       setLoadMore(true);
  //     }
  //   }, [state]);
  useEffect(() => {
    if (loadMore) {
      getData(loadMore);
      setLoadMore(false);
    }
  }, [getData, loadMore]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY + window.innerHeight === document.body.scrollHeight) {
        console.log('-->bottom');
        console.log(window.scrollY, '*window.scrollY');
        console.log(document.body.scrollHeight, '*document.body.scrollHeight');
        setLoadMore(true);
      }
    });
  }, []);
  useEffect(() => {
    const getToken = localStorage.getItem('mydiary_token');
    if (getToken) {
      const config = {
        headers: {
          access_token: getToken
        }
      };
      axios
        .get('http://127.0.0.1:3001/api/category', config)
        .then(res => {
          if (res.status === 200 && res.data) {
            setCategory(res.data.data);
          }
        })
        .catch(err => {
          if (err.response && err.response.status === 400) {
            dispatch(setLogin(false));
          } else {
            alert('MyListCon 서버접속이 원활하지 않습니다.');
          }
        });
    }
  }, []);

  return (
    <>
      <MyInfo />
      <MyList
        // scrollable={true}
        luminantColor={luminantColor}
        handleMenuClick={handleClick}
        isSticky={isSticky}
        category={category}
        userColor={userColor}
        menuIndex={menuIndex}
      />
    </>
  );
}
