import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
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
      <h1 className=" text-center mt-3"> Selection Process</h1>
      <Container className="sm-6 md-6 lg-6 flex">
        <>
          <h1>{data.company_name}</h1>
          <img src={data.logo} alt="logo" draggable={false} />
          {Object.keys(data).map((e, i) => {
            if (e === "logo" || e === "_id" || e === "__v") {
              return <></>;
            }
            return (
              <div>
                <h1>{e}</h1>
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
