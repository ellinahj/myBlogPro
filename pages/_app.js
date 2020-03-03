import React from 'react';
import { createGlobalStyle } from 'styled-components';
import App from 'next/app';

const GlobalStyle = createGlobalStyle`
    body{
        margin:0;
    };
    a {
        text-decoration:none;       
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
        <Component {...pageProps} />
        <GlobalStyle />
      </>
    );
  }
}
