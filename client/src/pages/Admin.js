import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AddCompanyModal from "../components/AdminComponent/AddCompanyModal";
export default function Admin() {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);
  const [type, setType] = useState("placement");
  const deleteHandle = async (e) => {
    await fetch(`http://localhost:3000/placement/delete/${e.target._id}`, {
      method: "DELETE",
    });
  };
  const typeHandle = (e) => {
    setType(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/${type}/all_companies`)
      .then((response) => {
        console.log(response.data);
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
        {/* <select value={type} onChange={typeHandle}> */}
        <option value="placement">Placement</option>
        <option value="internship">Internship</option>
        {/* </select> */}
      </Form.Select>

      <AddCompanyModal show={modalShow} onHide={() => setModalShow(false)} />
      <Button
        variant="outline-primary m-3 align-self-end"
        onClick={() => setModalShow(true)}
      >
        Add New
      </Button>
      <Row>
        {data.map((company) => (
          <Card className="p-2 mt-3">
            <Card.Body>
              <Card.Title>{company.name}</Card.Title>
              <Card.Text>{company.selected_students}</Card.Text>
              <Card.Text>{company.description}</Card.Text>
              <Button
                variant="outline-danger mx-2 "
                _id={company.id}
                onClick={deleteHandle}
              >
                Delete
              </Button>
              <Button variant="outline-warning mx-2 " _id={company.id}>
                Edit
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
}
