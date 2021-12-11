import styled from "styled-components";
import { Card } from "../HomeComponents/PastRecruiter";
const Container = styled.div`
  color: rgba(138, 94, 191, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .card_container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
export default function CompanySection() {
  return (
    <Container>
      <h1> Recruiters</h1>
      <div className="card_container">
        <Card>
          <h3>GOOGLE</h3>
        </Card>
        <Card>
          <h3>FACEBOOK</h3>
        </Card>
        <Card>
          <h3>MICROSOFT</h3>
        </Card>
        <Card>
          <h3>ADOBE</h3>
        </Card>
        <Card>
          <h3>AMAZON</h3>
        </Card>
        <Card>
          <h3>BOOMBERG</h3>
        </Card>
      </div>
    </Container>
  );
}
