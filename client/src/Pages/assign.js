import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import useTheme from "../App";
import { useContext } from "react";
import { UserContext } from "../App";

export default function Admin() {
  const [employees, setEmployees] = useState();
  const user = useContext(UserContext);
  const TicketID = JSON.parse(sessionStorage.getItem("ticketID")) || undefined;

  const Assign = (props) => {
    useTheme();
    // const cid=props.ID;
    const empName = props.First_Name;
    const empID = props.ID;
    const data = { empName, empID, TicketID };
    axios
      .post("http://localhost:5000/api/service/assignTickets", data)
      .then((res) => {
        if (res.status === 200) {
          alert("Assigned successfully!");
        }
      });
  };

  useEffect(() => {
    const fetchCompanies = () => {
      axios
        .post("http://localhost:5000/api/user/view-employees")

        .then((res) => {
          setEmployees(res.data);
        });
    };
    fetchCompanies();
  }, []);

  return (
    <div className="viewTable">
      <table>
        <thead className="centered">
          <th>Username</th>
          <th>Assign</th>
        </thead>
        {employees &&
          employees.map((element) => {
            return (
              <>
                <tbody className="bordered">
                  <td className="bordered">{element.First_Name}</td>
                  <td>
                    <button
                      onClick={() => {
                        Assign(element);
                      }}
                      style={{
                        color: "Black",
                        fontSize: 15,
                        color: "white",
                        background: "darkblue",
                        border: "1px gray solid",
                      }}
                    >
                      Assign
                    </button>
                  </td>
                </tbody>
              </>
            );
          })}
      </table>
    </div>
  );
}
