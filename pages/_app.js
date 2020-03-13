import React from 'react';
import { createGlobalStyle } from 'styled-components';
import App from 'next/app';
import { Provider } from 'react-redux';
import store from '../src/store';

const GlobalStyle = createGlobalStyle`
   /* html{
    scroll-behavior: smooth;
   } */
    body{
        margin:0;
        width:100%;
        height:100%;
    };
    a {
        text-decoration:none; 
        outline:none;
              
    };
    ul{
        list-style:none;
    };
`;

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps = { query: ctx.query };
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
        <GlobalStyle />
      </>
    );
  }
}
