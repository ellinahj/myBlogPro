import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://hyunjung.site" />
          <meta property="og:title" content="MyBlog" />
          <meta property="og:description" content="나의 스타일을 표현하는 블로그" />
          <meta
            property="og:image"
            content="https://myblogs3.s3.ap-northeast-2.amazonaws.com/images/KakaoTalk_Photo_2020-08-23-22-15-05.jpeg"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;700&family=Nanum+Myeongjo:wght@400;700&display=swap"
            rel="stylesheet"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
