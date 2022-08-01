import React, { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
  const [users, setUsers] = useState();
  const [Status, setStatus] = useState();
  const [Ticket_ID, setTicketID] = useState("");
  const data = { Ticket_ID, Status };



  useEffect(() => {
    const fetchUsers = () => {
      const enduser = JSON.parse(sessionStorage.getItem("user")) || undefined;
      const info = {
        Company_ID:enduser.Company_ID,
      };

      axios.post("http://localhost:5000/api/ticket/view-tickets",info).then((res) => {
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
            <th>Sevirity</th>
            <th>Product Type</th>
            <th>Ticket Type</th>
            <th>Created On</th>
            <th>Status</th>
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
                </tbody>
              </>
            );
          })}
      </table>
      <br />
    </div>
  );
};

export default Test;
