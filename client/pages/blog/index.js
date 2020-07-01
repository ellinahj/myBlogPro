import MyInfoContainer from '../../src/containers/blog/MyInfoContainer';
import ListContainer from '../../src/containers/blog/ListContainer';
import Layout from '../../src/components/common/Layout';

export default function BlogIndex() {
  return (
    <Layout>
      <MyInfoContainer />
      <ListContainer />
    </Layout>
  );
}
