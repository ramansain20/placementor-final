import styled from "styled-components";
import ContactForm from "../ContactComponent/ContactForm";

const Container = styled.div`
  color: rgba(138, 94, 191, 1);
  text-align: center;
  .heading {
    font-size: 3rem;
  }
  .paragraph {
    font-weight: bold;
    max-width: 50%;
    margin: auto;
    margin-top: 20px;
  }
  @media screen and (max-width: 600px) {
    .paragraph{
      max-width:80%;
    }
  }
`;

const Cards = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  .container1 {
    width: 300px;
    border-radius: 10px;
    height: 300px;
    margin: 10px;
    border: 2px dashed rgba(138, 94, 191, 1);
  }
  .container2 {
    width: 300px;
    border-radius: 10px;
    height: 300px;
    color: #fff;
    margin: 10px;
    background: linear-gradient(
      90deg,
      rgba(238, 109, 152, 1) 15%,
      rgba(138, 94, 191, 1) 85%
    );
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
export default function Contact() {
  return (
    <>
      <Container>
        <h1 className="heading">Contact us</h1>
        <p className="paragraph">
          Have any queries? Feel free to reach out to the Mailer Daemon team.
          Fill out the details below.
        </p>
      </Container>

      <ContactForm />
    </>
  );
}
