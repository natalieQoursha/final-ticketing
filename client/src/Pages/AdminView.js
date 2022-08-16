import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import CardGroup from 'react-bootstrap/CardGroup';
import "./AdminView.css";
import { Link, useNavigate } from "react-router-dom";

import React, { useState, useEffect, Component } from "react";
import axios from "axios";

export default function Admin() {
  const history = useNavigate();
  

  const [Companies, setCompanies] = useState();

const viewStatus = () =>{
  {history("/viewStatus");}
}
const changeStatus =(ok)=>{
  sessionStorage.setItem("company", JSON.stringify(ok))
  

}

  useEffect(() => {
    const fetchCompanies = () => {
      axios
        .post("http://localhost:5000/api/admin/admin-cards")
        
        .then((res) => {
          setCompanies(res.data);
        });
      };
      fetchCompanies();
    }, []);

    return (
      <>
      {Companies &&
              Companies.map((element) => {
                    return (
                      <div className='cards'>
                      <Card>
                        <Card.Img variant="top" src={require(`../Pictures/${element.Company_Logo}`)} 
                          width='50' height='50'
                       />
                        <Card.Body>
                          <Card.Title>{element.Company_Name}</Card.Title>

                          <Card.Text>{element.Company_Description}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <Button onClick={()=>{changeStatus(element.Company_Name);viewStatus();}}>View services</Button>
                        </Card.Footer>
                      </Card>
                      
                      </div>
                      
                  )})}
    </>
  );
}
