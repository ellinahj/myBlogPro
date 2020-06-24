import React, { useEffect, useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import axios from 'axios';
import store from '../src/store';
import { setThemeColor, setLogin, setUserInfo } from '../src/actions/base';
import * as theme from '../src/utils/theme';
//css
import 'react-image-crop/dist/ReactCrop.css';
import 'react-datepicker/dist/react-datepicker.css';

const GlobalStyle = createGlobalStyle`
  html{
        width:100%;
        height:100%;
  };
  body{
        margin:0;
        padding:0;
        width:100%;
        height:100%;
        position: relative;
        font-family: 'Nanum Myeongjo', serif;
        /* font-family: 'Noto Sans KR', sans-serif; */
        /* font-family: 'Noto Serif KR', serif; */
        /* font-family: 'Nanum Gothic Coding', monospace; */
  };
  #__next{
            max-width:767px;
            min-height:100%;
            box-sizing:border-box;
            margin: 0 auto;
            /* overflow-y:auto; */
            border-left: 1px solid #dedede;
            border-right: 1px solid #dedede;
            background: #fdfaf2;//color
          /* font-family: 'Nanum Gothic Coding', monospace; */
  };
  a {
      text-decoration:none; 
      outline:none;        
  };
  ul{
      list-style:none;
  };
  button{
    :hover {
    opacity: 0.7;
    }
  }
  ::-webkit-input-placeholder {
  font-family: 'Nanum Myeongjo', serif;
}
`;

export default function MyApp({ Component, pageProps }) {
  const [currentColor, setCurrentColor] = useState('#000');
  useEffect(() => {
    const getMyTheme = localStorage.getItem('myThemeColor') || '#000';
    store.dispatch(setThemeColor(getMyTheme));
  }, []);

  useEffect(() => {
    function handleSubscribe() {
      const newColor = store.getState().common.enteredColor;
      if (newColor !== currentColor) {
        setCurrentColor(newColor);
      }
    }
    const subscribeStore = store.subscribe(handleSubscribe);
    return () => subscribeStore();
  }, [currentColor]);

  useEffect(() => {
    const storedToken = localStorage.getItem('mydiary_token') && localStorage.getItem('mydiary_token');

    const config = {
      headers: {
        access_token: storedToken
      }
    };

    axios
      .get('http://127.0.0.1:3001/api/user/info', config)
      .then(res => {
        if (res.status < 300) {
          store.dispatch(setLogin(true));
          store.dispatch(setUserInfo(res.data));
        } else if (res.status === 400) {
          alert('여기는 안들어오지?400 _app');
        }
      })
      .catch(err => {
        console.log(err, '_app err');
        if (err.response && err.response.status === 400) {
          store.dispatch(setLogin(false));
        } else {
          alert('서버접속이 원활하지 않습니다.??');
        }
      });
  }, []);

  return (
    <Provider store={store}>
      <GlobalStyle userTheme={currentColor} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
