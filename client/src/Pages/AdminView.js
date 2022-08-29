import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminView.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../App";

export default function Admin() {
  const history = useNavigate();
  const user = useContext(UserContext);
  const [Companies, setCompanies] = useState();

  const viewStatus = () => {
    {
      history("/viewStatus");
    }
  };
  const changeStatus = (name, ID) => {
    sessionStorage.setItem("companyName", JSON.stringify(name));
    sessionStorage.setItem("companyID", JSON.stringify(ID));
  };

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
            <div className="Nice">
              <div class="card-body">
                <Card.Img
                // class="card-pic"
                  variant="top"
                  src={require(`../Pictures/${element.Company_Logo}`)}
                  height="70%"
                />
                <h1 class="card-title">{element.Company_Name}</h1>
                <h3 class="card-text">{element.Company_Description}</h3>
                <Button
                  className="enzl"
                  onClick={() => {
                    changeStatus(element.Company_Name, element.Company_ID);
                    viewStatus();
                  }}
                  style={{
                    fontSize: 20,
                    borderRadius: 10,
                  }}
                >
                  View Services
                </Button>
              </div>
            </div>
          );
        })}
    </>
  );
}
