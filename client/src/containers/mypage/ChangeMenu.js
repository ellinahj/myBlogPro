import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Container from '../../components/common/Container';
export default function ChangeMenu(props) {
  const { showEdit } = props;
  const category = useSelector(state => state.common.category);
  return (
    <Con>
      <Column>
        <Row>
          <TopCon>
            <div>{showEdit ? '메뉴변경' : '메뉴'} </div>
            <div>
              기본1->{showEdit ? <input value={'기본1'} /> : '기본1'}
              ?선택박스?
            </div>
            <div>"(있으면)기본2->"{showEdit ? <input value={'기본2'} /> : '기본2'}</div>
            <div>"(있으면)기본3->"{showEdit ? <input value={'기본3'} /> : '기본3'}</div>
          </TopCon>
        </Row>
      </Column>
    </Con>
  );
}
const Con = styled(Container)``;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
  max-width: 630px;
`;

const TopCon = styled.div`
  width: 100%;
  background: #fafafa;
  padding: 20px;
`;

// const BottomCon = styled(Row)`
//   margin-top: 20px;
//   background: #fafafa;
//   padding: 20px;
// `;
