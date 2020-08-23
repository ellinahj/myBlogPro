import React from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import BlogPage from './blog';

export default function Index() {
  return (
    <div>
      <Head>
        <title>MyBlog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogPage />
    </div>
  );
}
