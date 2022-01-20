import { useEffect, useState } from "react";
import { Accordion, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
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

    <h2>company details by name...</h2>

      {/* <h1 className=" text-center mt-3"> Selection Process</h1>
      <Container className="sm-6 md-6 lg-6 flex">
        <Accordion defaultActiveKey="1">
          {Object.keys(data).map((e, i) => {
            return (
              <Accordion.Item eventKey="0">
                <Accordion.Header>{e}</Accordion.Header>
                <Accordion.Body>{data[e]}</Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </Container> */}
    </>
  );
};

export default Data;
