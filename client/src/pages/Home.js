import About from "../components/HomeComponents/About";
import HomeStat from "../components/HomeComponents/HomeStat";
import Insight from "../components/HomeComponents/Insight";
import styled from "styled-components";
import PastRecruiter from "../components/HomeComponents/PastRecruiter";
import HomeStatSection from "../components/HomeComponents/HomeStatSection";
import Contact from "../components/HomeComponents/Contact";
import Footer from "../components/HomeComponents/Footer";
const Card = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 80%;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  @media screen and (max-width: 600) {
    font-size: 1.5rem;
  }
`;

const Stat = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 5px;
`;

export default function Home() {
  return (
    <>
      <About />
      <Insight />
      <HomeStat>
        <Card>
          <Stat>
            <p>Lorem ipsum</p>
            <h2>1000+</h2>
          </Stat>
          <Stat>
            <p>Lorem ipsum</p>
            <h2>25+</h2>
          </Stat>
          <Stat>
            <p>Lorem ipsum</p>
            <h2>300+</h2>
          </Stat>
        </Card>
      </HomeStat>
      <PastRecruiter />
      <HomeStatSection />
    </>
  );
}
