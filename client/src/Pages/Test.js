import React, { useState, useEffect } from "react";
import axios from "axios";
import Popup from "../components/Popup";

const Test = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = () => {
      axios.get("http://localhost:5000/api/ticket/all-tickets").then((res) => {
        setUsers(res.data);
      });
    };
    fetchUsers();
  }, []);
  return (
        <div className='testPage'>



<table id="myTable1">
          <thead>
            <tr>
            <th>Ticket_ID</th>
            <th>Product_Types</th>
            <th>Ticket_Type</th>
            <th>Created_On</th>
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
    </div>
  );
};

export default Test;
