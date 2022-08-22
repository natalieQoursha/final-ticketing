import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import CardGroup from "react-bootstrap/CardGroup";
import "./AdminView.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, Component, createContext } from "react";
import axios from "axios";
import { UserContext } from "../App";
import { useContext } from "react";
import "./viewStatus.css";

export default function Admin({ setLoggedUser }) {
  const user = useContext(UserContext);
  const history = useNavigate();
  const [Companies, setCompanies] = useState();
  const [Services, setServices] = useState();
  const companyName =
    JSON.parse(sessionStorage.getItem("companyName")) || undefined;
  const companyID =
    JSON.parse(sessionStorage.getItem("companyID")) || undefined;
  const [ProductID, setProductID] = useState();
  const [ProductName, setProductName] = useState();

  const addService = (props) => {
    const ProductName = props.Product_Name;
    const ProductID = props.Product_ID;
    const data = { companyName, companyID, ProductName, ProductID };
    axios
      .post("http://localhost:5000/api/service/addService", data)
      .then((res) => {
        if (res.status === 200) {
          alert("service added ");
        }
      });
  };
  const removeService = (props) => {
    const serviceID = props.Service_ID;
    const data = { serviceID };
    axios
      .post("http://localhost:5000/api/service/removeService", data)
      .then((res) => {
        if (res.status === 200) {
          alert("service removed ");
        }
      });
  };

  useEffect(() => {
    const data = { companyID };
    const fetchCompanies = () => {
      axios
        .post("http://localhost:5000/api/admin/admin-services", data)
        .then((res) => {
          setCompanies(res.data);
        });
    };
    fetchCompanies();
  }, []);
  const reviewStatus = () => {
    {
      history("/AdminView");
    }
  };
  useEffect(() => {
    const data = { companyID, companyName };
    const fetchServices = () => {
      sessionStorage.setItem("companyID", JSON.stringify(companyID));
      sessionStorage.setItem("companyName", JSON.stringify(companyName));
      axios
        .post("http://localhost:5000/api/admin/available-services", data)
        .then((res) => {
          setServices(res.data);
        });
    };
    fetchServices();
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          reviewStatus();
        }}
      >
        Back
      </Button>
      <h1>Active services</h1>
      {Companies &&
        Companies.map((element) => {
          return (
            <div className="cards">
              <Card>
                <Card.Body>
                  <Card.Title className="card-title">
                    {element.Product_Name}
                  </Card.Title>
                  <Card.Text>{element.Company_Description}</Card.Text>
                </Card.Body>
                <Button
                  className="Remove"
                  onClick={() => {
                    removeService(element);
                  }}
                >
                  -
                </Button>
              </Card>
            </div>
          );
        })}
      <br />
      <br />
      <br />
      <br />
      <br />

      <h1>Available Services</h1>
      {Services &&
        Services.map((element) => {
          return (
            <div className="cards">
              <Card>
                <Card.Body>
                  <Card.Title>{element.Product_Name}</Card.Title>
                </Card.Body>
                <Button
                  className="Add"
                  onClick={() => {
                    addService(element);
                  }}
                >
                  +
                </Button>
              </Card>
            </div>
          );
        })}
    </>
  );
}
