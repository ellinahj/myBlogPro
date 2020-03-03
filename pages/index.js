import React from 'react';
import Head from 'next/head';
import Layout from '../src/components/common/Layout';
import MainImage from '../src/components/main/MainImage';
import MyRecent from '../src/components/main/MyRecent';
export default function Index() {
  return (
    <div>
      <Head>
        <title>My Diary</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <MainImage />
        <MyRecent />
      </Layout>
    </div>
  );
}
