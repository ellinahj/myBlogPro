import React, { useEffect, useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from '../src/store';
import * as theme from '../src/utils/theme';
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
            background: #fbfbfb;
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
  font-family: 'Nanum Myeongjo'H, serif;
}
`;

export default function MyApp({ Component, pageProps }) {
  const [currentColor, setCurrentColor] = useState('#ff254f');

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
