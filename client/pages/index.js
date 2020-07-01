import React from 'react';
import Head from 'next/head';∂
import BlogPage from './blog';
export default function Index() {
  return (
    <div>
      <Head>
        <title>My Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogPage />
    </div>
  );
}
