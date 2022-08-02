import React, { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
  const [users, setUsers] = useState("");
  const [Status, setStatus] = useState("");
  const [Ticket_ID, getTicketID] = useState("");
  const [Reply, setReply] = useState("");

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
    alert("Ticket updated successfully");
    // this.Status = Status;
    // this.Reply = Reply;
    window.location.reload();
  };
  return (
    <>
      <table>
        <caption>Tickets</caption>
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
        value={Ticket_ID}
        onChange={(e) => getTicketID(e.target.value)}
        type={"number"}
        placeholder="Ticket ID"
        required
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
