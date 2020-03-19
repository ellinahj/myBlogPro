import React from 'react';
import styled from 'styled-components';
import Layout from '../../src/components/common/Layout';
import SearchBar from '../../src/components/search/SearchBar';

export default function Mypage() {
  return (
    <Layout>
      <Container>
        <SearchBar />
      </Container>
    </Layout>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
