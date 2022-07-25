import React, { useState, useEffect } from "react";
import axios from "axios";

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
  const [Status, setStatus] = useState("Pending");

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
                  <td>
                    {
                      <select
                        className="Choice"
                        value={Status}
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
                    }
                    <button>Update</button>
                  </td>

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
