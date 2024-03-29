import { Accordion } from "react-bootstrap";
import styled from "styled-components";
import styles from "./Data.module.css"
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
// import AboutSvg from "../../assets/Suitboi2.svg";
const Heading = styled.h1`
position:relative;
margin:auto;
margin-top:50px;
margin-bottom:0px;
  font-size:70px;
  @media screen and (max-width:730px){
    font-size:3rem;
  }
  @media screen and (max-width:490px){
    font-size:2rem;
  }
`;
const Strip = styled.div`
background: linear-gradient(
  270deg,
  rgba(238, 109, 152, 1) 15%,
  rgba(138, 94, 191, 1) 85%
  
);
color: #fff;
width: 100%;
height:39vh;
padding: 1.3rem;
text-align:center;
@media screen and (max-width: 600px) {
  padding: 0.3rem;
  }`;
const AboutSection = styled.div`
  background: linear-gradient(
    270deg,
    rgba(238, 109, 152, 1) 15%,
    rgba(138, 94, 191, 1) 85%
    
  );
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  color: #fff;
  width: 100%;
  height: 50vh;
  padding: 0.5rem;
  @media screen and (max-width: 400px) {
    padding: 0.3rem;
    flex-direction:column;
  }
`;
const Paragraph = styled.p`
  position:relative;
  // text-align: right;
  margin: auto;
  max-width: 45%;
  font-weight: 500;
  
  @media screen and (max-width: 750px) {
    max-width:80%;
    }
  
`;

const Image = styled.img`
  width: 300px;
  height: 22rem;
  position: absolute;
  left: 15px;
  top: 90px;
  @media screen and (max-width: 700px) {
    height: 250px;
    width: 200px;
    top: 150px;
    left:10px;
    
  }
`;
const Data = () => {

  const params = useParams();
  console.log(params);

  const [data, setData] = useState({
    selection_process: {
      step1: '1',
      step2: '1'
    },
    influence_of: {
      projects: '1',
      PORs: '2',
    },
    logo: "",
    eligible_branch: 'CS',
    selected_students: '4',

  });

  useEffect(() => {

    axios
      .get(`http://localhost:3000/${params.type}/${params.id}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });

  }, [setData]);

  if (params.type !== "placement" && params.type !== "internship") {
    return <div style={{margin:"2rem auto" ,textAlign:"center",fontSize:"2.5rem",color:"rgba(138, 94, 191, 1) "}}>Not Found 😔</div>;
  }

  if(!data)
  {
    return<div style={{margin:"2rem auto" ,textAlign:"center",fontSize:"2.5rem",color:"rgba(138, 94, 191, 1) "}}>Not Found 😔</div>
  }

  return (

    <>


      <div className={styles.main_content}>
        <h3 className={styles.company_name}>{data.company_name}</h3>
        {console.log(data)}
        <img src={data.logo} className={styles.logo_small} />

        <Strip className={styles.data_container}>

          <div className={styles.frosty}>
            <ul style={{ listStyleType: "none" }}>
              <li><b>Profile  </b> Software Engineer</li>
              <li><b>Branches Eligible : </b> {data.eligible_branch}</li>
              <li><b>CGPA Criteria:  </b> {data.CGPA} CGPA</li>
            </ul>
          </div>
        </Strip>

      </div>
    <Container style={{width:"auto",display:"flex",flexDirection:"column",margin:"auto"}}>
      <Row className={styles.temp}>
        <div className="col-lg-5" style={{
          border: "solid 2px black",
          padding: "10px",
          borderRadius: '7px',
          margin: '12px'
        }}>
          <h1 className={styles.data_container}> Selection Process</h1>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Round 1</Accordion.Header>
              <Accordion.Body>
                {data.selection_process.step1}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Interview Round</Accordion.Header>
              <Accordion.Body>
                {data.selection_process.step2}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

        </div>
        <div className="col-lg-5" style={{
          border: "solid 2px black",
          padding: "10px",
          borderRadius: '7px',
          margin: '12px'
        }}>
          <h1 className={styles.data_container}> Influence Of</h1>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Projects/Previous Internships</Accordion.Header>
              <Accordion.Body>
                {data.influence_of.projects}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>PORs</Accordion.Header>
              <Accordion.Body>
                {data.influence_of.PORs};
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

      </Row>

      <Row className={styles.temp}>
        <div className="col-lg-5" style={{
          border: "solid 2px black",
          padding: "10px",
          borderRadius: '7px',
          margin: '12px'
        }}>
          <h1 className={styles.data_container}>Test Preparation</h1>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Test Series</Accordion.Header>
              <Accordion.Body>
                {data.test_series}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="col-lg-5" style={{
          border: "solid 2px black",
          padding: "10px",
          borderRadius: '7px',
          margin: '12px'
        }}>
          <h1 className={styles.data_container}> Takeaways</h1>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Key Takeaways</Accordion.Header>
              <Accordion.Body>
                {data.takeaways}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Row>
      </Container>
    </>
  );

}

export default Data;