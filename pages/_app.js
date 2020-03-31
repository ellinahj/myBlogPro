import React, { useEffect, useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from '../src/store';
import { setThemeColor } from '../src/actions/base';
import * as theme from '../src/js/theme';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const GlobalStyle = createGlobalStyle`
    html,#__next,body{
        margin:0;
        padding:0;
        width:100%;
        height:100%;
        font-family: 'Noto Sans KR', sans-serif;
        /* font-family: 'Nanum Gothic Coding', monospace; */
    };
    a {
        text-decoration:none; 
        outline:none;
              
    };
    ul{
        list-style:none;
    }; 
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

  return (
    <Provider store={store}>
      <GlobalStyle userTheme={currentColor} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
