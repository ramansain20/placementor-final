import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Row from "react-bootstrap/Row";
// import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AddCompanyModal from "../components/AdminComponent/AddCompanyModal";
// import EditModal from "../components/AdminComponent/EditModal";
import styles from "./../components/Data.module.css";

export default function Admin() {
  const [modalShow, setModalShow] = useState(false);
  // const [editModalShow, setEditModalShow] = useState(false);
  const [data, setData] = useState([]);
  const [type, setType] = useState("placement");
  const deleteHandle = async (e) => {
    await fetch(`http://localhost:3000/${type}/delete/${e.target.id}`, {
      method: "DELETE",
    });

    setData((prev) => {
      return prev.filter((ele) => {
        return ele.id !== e.target.id;
      });
    });
  };
  const typeHandle = (e) => {
    setType(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/${type}/all_companies`)
      .then((response) => {
        setData(response.data);
      });
  }, [type]);

  return (
    <Container sm={12} md={6}>
      <Form.Select
        className="m-3"
        style={{ width: "50%" }}
        value={type}
        onChange={typeHandle}
        aria-label="Default select example"
      >
        <option value="placement">Placement</option>
        <option value="internship">Internship</option>
      </Form.Select>

      <AddCompanyModal show={modalShow} onHide={() => setModalShow(false)} />
      <Button
        variant="outline-primary m-3 align-self-end"
        onClick={() => setModalShow(true)}
      >
        Add New
      </Button>
      <Row>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          {data.map((comp) => {
            return (
              <div
                style={{ width: "50%", margin: "auto", marginBottom: "2rem" }}
              >
                <h1 className={styles.comp_name}>{comp.company_name}</h1>
                <img
                  style={{ height: "2rem" }}
                  src={comp.logo}
                  alt="logo"
                  draggable={false}
                />
                {Object.keys(comp).map((e, i) => {
                  if (
                    e === "logo" ||
                    e === "_id" ||
                    e === "__v" ||
                    e === "company_name"
                  ) {
                    return <></>;
                  }
                  return (
                    <div>
                      <h3
                        style={{
                          textTransform: "capitalize",
                          textAlign: "center",
                        }}
                      >
                        {e}
                      </h3>
                      {typeof comp[e] === "object" ? (
                        Object.keys(comp[e]).map((x, idx) => {
                          return <div>{comp[e][x]}</div>;
                        })
                      ) : (
                        <div>{comp[e]}</div>
                      )}
                    </div>
                  );
                })}

                <Button
                  variant="outline-danger mx-2 "
                  id={comp._id}
                  onClick={() => deleteHandle}
                >
                  Delete
                </Button>
              </div>
            );
          })}
        </div>
      </Row>
    </Container>
  );
}
