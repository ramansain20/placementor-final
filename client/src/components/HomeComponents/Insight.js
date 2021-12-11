import styled from "styled-components";
import InsightSvg from "../../assets/Suitboi2.svg";
const Heading = styled.h1`
  font-size: 3rem;
  color: #8a5ebf;
  text-align: center;
  margin: 35px;
  margin-bottom: 10px;

  @media screen and (max-width: 600px) {
    font-size: 2.5rem;
  }
`;
const Paragraph = styled.p`
  font-size: 1.5rem;
  color: #8a5ebf;
  text-align: center;
  padding: 10px;
  max-width: 50%;
  margin: auto;
  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
`;
const Div = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const PlacementDiv = styled.div`
  background: rgb(238, 109, 152);
  background: linear-gradient(
    0deg,
    rgba(238, 109, 152, 1) 48%,
    rgba(138, 94, 191, 1) 92%
  );
  margin: 30px 0;
  width: 50%;
  height: 300px;
  max-width: 300px;
  border-radius: 15px;
  text-align: center;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    width: 80%;
    max-width: 400px;
  }
`;

const InternDiv = styled.div`
  color: #8a5ebf;
  text-align: center;
  padding: 20px;
  border: 2px dashed #8a5ebf;
  border-radius: 10px;
  border-left: 0;
  height: 250px;
  max-width: 300px;
  width: 45%;
  cursor: pointer;
  transform: translateX(-10px);

  @media screen and (max-width: 600px) {
    border: 2px dashed #8a5ebf;
    margin: auto;
    transform: translateX(0) translateY(-35px);
    border-top: 0;
    width: 70%;
  }
`;

const Svg = styled.img`
  display: none;
  @media screen and (min-width: 1000px) {
    display: block;
    width: 400px;
    height: 400px;
    margin: 50px;
    transform: translateY(50px);
  }
`;

export default function Insight() {
  return (
    <>
      <Heading>Insights</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam
      </Paragraph>
      <Div>
        <Svg src={InsightSvg} />
        <PlacementDiv>
          <img
            style={{ fill: "#fff" }}
            src="https://img.icons8.com/ios/64/000000/doughnut-chart--v2.png"
            alt="placementdiv"
          />
          <h2>Placement Insights</h2>
          <p style={{ marginTop: "35px" }}>
            {" "}
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et
          </p>
        </PlacementDiv>
        <InternDiv>
          <h2>Intern Insights</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor
          </p>
        </InternDiv>
      </Div>
    </>
  );
}
