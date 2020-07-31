import Layout from '../../src/components/common/Layout';
import JoinContainer from '../../src/containers/join';
export default function JoinIndex(props) {
  return (
    <Layout>
      <JoinContainer>{props.children}</JoinContainer>
    </Layout>
  );
}
