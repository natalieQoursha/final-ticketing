import React, { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
  const [users, setUsers] = useState();
  const [Status, setStatus] = useState();
  const [Ticket_ID, setTicketID] = useState("");
  const data = { Ticket_ID, Status };

  const changeStatus = (e) => {
    const data = { Ticket_ID, Status };

    axios
      .put("http://localhost:5000/api/ticket/status", data)
      .then((res) =>
        sessionStorage.setItem("Status", JSON.stringify(res.data))
      );

  };

  useEffect(() => {
    const fetchUsers = () => {
      axios.get("http://localhost:5000/api/ticket/all-tickets").then((res) => {
        setUsers(res.data);
      });
    };
    fetchUsers();
  });

  return (
    <div className="testPage">
      <table id="myTable1">
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Product Type</th>
            <th>Ticket Type</th>
            <th>Created On</th>
            <th>Status</th>
            <th>Sevirity</th>
          </tr>
        </thead>
        {users &&
          users.map((element) => {
            return (
              <>
                <tbody>
                  <td>{element.Ticket_ID}</td>
                  <td>{element.Product_Types}</td>
                  <td>{element.Ticket_Type}</td>
                  <td>{element.Created_On}</td>
                  <td>{element.Status}</td>
                  <td>{element.Sevirity}</td>
                </tbody>
              </>
            );
          })}
      </table>
      <br />
      <h3>Edit ticket status</h3>
      <br />
      <input
        type={"number"}
        placeholder="TicketID"
        required
        value={"data.ticketID"}
      ></input>
      <select
        className="Choice"
        value={"Status"}
        onChange={(e) => setStatus(e.target.value)}
        name="Status"
        id="Status"
      >
        <option className="Accepted" value="General">
          Accepted
        </option>
        <option className="Rejected" value="Software">
          Rejected
        </option>
      </select>

      <button onClick={changeStatus}>Update</button>
    </div>
  );
};

export default Test;
