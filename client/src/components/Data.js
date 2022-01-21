import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./Data.module.css";

const Data = () => {
  const params = useParams();
  console.log(params);

  const [data, setData] = useState({});

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
  }, [params]);

  if (params.type !== "placement" && params.type !== "internship") {
    return <>Not found</>;
  }

  return (
    <>
      <Container style={{ width: "70%", margin: "auto" }}>
        <h1 className={styles.comp_name}>{data.company_name}</h1>
        <Row>
          <div className={styles.logo_discription}>
            <Col>
              <p>CGPA : {data.CGPA}</p>
              <p>Selected Students : {data.selected_students}</p>
              <p>Eligible Branch : {data.eligible_branch} </p>
            </Col>
            <Col className={styles.logo}>
              <img
                style={{ height: "5rem" }}
                src={data.logo}
                alt="logo"
                draggable={false}
              />
            </Col>
          </div>
        </Row>
      </Container>

      <Container className="sm-6 md-6 lg-6 flex">
        <>
          <h1
            style={{
              fontFamily: "sans-serif",
              fontSize: "2rem",
              margin: "2rem",
            }}
          >
            {" "}
            Selection Process
          </h1>

          {Object.keys(data).map((e, i) => {
            if (e === "logo" || e === "_id" || e === "__v") {
              return <></>;
            }
            return (
              <div>
                <h3 style={{ textTransform: "capitalize" }}>{e}</h3>
                {typeof data[e] === "object" ? (
                  Object.keys(data[e]).map((x, idx) => {
                    return <div>{data[e][x]}</div>;
                  })
                ) : (
                  <div>{data[e]}</div>
                )}
              </div>
            );
          })}
        </>
      </Container>
    </>
  );
};

export default Data;
