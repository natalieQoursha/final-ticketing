import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminView.css";
import { useNavigate } from "react-router-dom";
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

  const addService = (props) => {
    const ProductName = props.Product_Name;
    const ProductID = props.Product_ID;
    const data = { companyName, companyID, ProductName, ProductID };
    axios
      .post("http://localhost:5000/api/service/addService", data)
      .then((res) => {
        if (res.status === 200) {
          window.location.reload();
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
        }
      });
    window.location.reload();
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
      <div className="UpDownBorder">
        <div className="left">
          <button
            className="bttn"
            onClick={() => {
              reviewStatus();
            }}
          >
            Back
          </button>
        </div>
        <div className="centerr">
          <h1>Active services</h1>
        </div>
      </div>
      <br />
      <br />
      {Companies &&
        Companies.map((element) => {
          return (
            <div
              className="checked"
              onClick={() => {
                removeService(element);
              }}
            >
              n<label className="card-title">{element.Product_Name}</label>
              <label className="Add">-</label>
            </div>
          );
        })}
      <div className="UpDownBorder">
        <div className="center">
          <h1>Available Services</h1>
        </div>
      </div>
      <br />
      <br />
      {Services &&
        Services.map((element) => {
          return (
            <div className="notchecked">
              <label
                className="card-title"
                onClick={() => {
                  addService(element);
                }}
              >
                {element.Product_Name}
              </label>
              <label className="Add">+</label>
            </div>
          );
        })}
    </>
  );
}
