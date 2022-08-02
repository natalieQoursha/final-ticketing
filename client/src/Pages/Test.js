import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const [users, setUsers] = useState("");
  const [Status, setStatus] = useState("Accepted");
  const [Ticket_ID, getTicketID] = useState("");
  const [Reply, setReply] = useState("");
  const history = useNavigate();

  useEffect(() => {
    const fetchUsers = () => {
      const enduser = JSON.parse(sessionStorage.getItem("user")) || undefined;
      const info = {
        Company_ID: enduser.Company_ID,
      };

      axios
        .post("http://localhost:5000/api/ticket/view-tickets", info)
        .then((res) => {
          setUsers(res.data);
          console.log("response is: " + res.data.Ticket_ID);
        });
    };

    fetchUsers();
  }, []);

  const changeStatus = (e) => {
    const data = { Status, Ticket_ID, Reply };

    axios
      .post("http://localhost:5000/api/ticket/test-update", data)
      .then((res) => {
        if (res.status === 200) {
          
        }
      });


    alert("Ticket updated successfully");
    console.log(data);
    //window.location.reload();
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Sevirity</th>
            <th>Product Type</th>
            <th>Ticket Type</th>
            <th>Date Created</th>
            <th>Status</th>
            <th>Description</th>
          </tr>
        </thead>

        {users &&
          users.map((element) => {
            return (
              <>
                <tbody>
                  <td>{element.Ticket_ID}</td>
                  <td>{element.Sevirity}</td>
                  <td>{element.Product_Types}</td>
                  <td>{element.Ticket_Type}</td>
                  <td>{element.Created_On}</td>
                  <td>{element.Status}</td>
                  <td>{element.Description}</td>
                </tbody>
              </>
            );
          })}
      </table>
      <br />

      <h3>Ticket control</h3>
      <br />
      <input
        required
        value={Ticket_ID}
        onChange={(e) => getTicketID(e.target.value)}
        type={"number"}
        placeholder="Ticket ID"
      ></input>

      <select
        className="Choice"
        value={Status}
        onChange={(e) => setStatus(e.target.value)}
        name="Status"
        id="Status"
        placeholder="Status"
      >
        <option className="Accepted" value="Accepted">
          Accepted
        </option>

        <option className="Rejected" value="Rejected">
          Rejected
        </option>
      </select>
      <br />
      <input
        value={Reply}
        onChange={(e) => setReply(e.target.value)}
        type={"textarea"}
        placeholder="Add reply (optional)"
      ></input>

      <button onClick={changeStatus}>Update</button>
    </>
  );
};

export default Test;
