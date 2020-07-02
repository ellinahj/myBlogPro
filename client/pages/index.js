import React from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import styled from 'styled-components';
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
