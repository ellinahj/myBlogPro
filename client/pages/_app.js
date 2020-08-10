import React, { useEffect, useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from '../src/store';
import { theme } from '../src/utils/theme';
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
        font-family: ${props => props.currentValue};
        font-size:${props => props.theme.mFont};
        background:#fcfcfc;
  };
  #__next{  
            max-width:767px;
            min-height:100%;
            box-sizing:border-box;
            margin: 0 auto;
            border-left: 1px solid #dedede;
            border-right: 1px solid #dedede;
            background: #fff;
  };
  a {
      text-decoration:none; 
      outline:none;        
  };
  ul{
      list-style:none;
  };
  button{
    font-family: ${props => props.currentValue};
    :hover {
    opacity: 1;
    }
  }
  ::-webkit-input-placeholder {
    font-family: ${props => props.currentValue};
}
input{
  font-family: ${props => props.currentValue};
  font-size:${props => props.theme.mFont};
}
textarea{
  font-family: ${props => props.currentValue};
  font-size:${props => props.theme.mFont};
}
`;

export default function MyApp({ Component, pageProps }) {
  const [currentColor, setCurrentColor] = useState('#7c7cec');
  const [currentValue, setCurrentValue] = useState(`'Noto Sans KR', sans-serifo'`);

  useEffect(() => {
    function handleSubscribe() {
      const newColor = store.getState().common.userColor;
      if (newColor !== currentColor) {
        setCurrentColor(newColor);
      }
    }
    const subscribeStore = store.subscribe(handleSubscribe);
    return () => subscribeStore();
  }, [currentColor]);

  useEffect(() => {
    function handleChange() {
      const newValue = store.getState().common.selectFont;

      if (newValue !== currentValue) {
        setCurrentValue(newValue);
      }
    }

    const unsubscribe = store.subscribe(handleChange);
    return () => unsubscribe();
  }, [currentValue]);

  return (
    <Provider store={store}>
      <GlobalStyle theme={theme} userTheme={currentColor} currentValue={currentValue} />
      <ThemeProvider theme={theme} userColor={currentColor}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
