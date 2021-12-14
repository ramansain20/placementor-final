import styled from "styled-components";
import { Card } from "../HomeComponents/PastRecruiter";
import axios from 'axios';
import { useEffect, useState } from "react";

import PlacementApi from '../../utils/placement';
import MyLoader from "./MyLoader";
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
export default function CompanySection(props ) {

//
  let [company, getCompany]= useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:3000/${props.url}/all_companies`).then(response=>{
      console.log(response.data); 
      getCompany(response.data);
    
    })
  },[]);



  return (

    <Container>
      <h1> Recruiters</h1>
      <div className="card_container">
         
        {!company?<MyLoader />: (company.map((comp,idx)=> 
      <Card key={idx}>

          <p  >{comp.name}</p>
          <p  >{comp.selected_students}</p>
          <p  >{comp.description}</p>

 </Card>
        ))}
 
      </div>
    </Container>
  );
}
