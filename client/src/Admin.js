import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../App";

export default function Admin({ setLoggedUser }) {
  const user = useContext(UserContext);

  const UserContext = UserContext(UserContext);
  const [loggedUser, setLoggedUser] = useState(true);
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = () => {
      axios.post("http://localhost:5000/api/admin/admin-cards").then((res) => {
        setUsers(res.data);
        console.log("res " + res.data);
      });
    };

    fetchUsers();
  }, []);

  return (
    <div className="row">
      First test
      {users &&
        users.map((users) => {
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{users.Company_Name}</Card.Title>
              <Card.Text>{users.Description}</Card.Text>
              <Button variant="primary">View services</Button>
            </Card.Body>
          </Card>;
        })}
      Last test
    </div>
  );
}
