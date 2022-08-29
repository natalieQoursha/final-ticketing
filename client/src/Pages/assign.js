import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import "./Modal.css";

export default function Admin() {
  const [employees, setEmployees] = useState();
  const TicketID = JSON.parse(sessionStorage.getItem("ticketID")) || undefined;
  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  };

  const Assign = (props) => {
    const empName = props.First_Name;
    const empID = props.ID;
    const newStat = "Assigned";
    const data = { empName, empID, TicketID, newStat };
    axios
      .post("http://localhost:5000/api/service/assignTickets", data)
      .then((res) => {
        if (res.status === 200) {
          alert("Assigned successfully!");
        } else {
          alert("Ticket has already been assigned");
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
  {
    if (!popup)
      return (
        <>
          <button onClick={setPopup} className="btn-modal">
            Assign
          </button>
        </>
      );
  }
  if (popup)
    return (
      <div className="whole">
        <div className="design">
          <div className="overlay">
            <div
              className="modal-content"
              style={{
                background: "white",
              }}
            >
              <div className="viewTable">
                <table>
                  <thead className="centered">
                    <th>User</th>
                    <th>Assign</th>
                  </thead>
                  {employees &&
                    employees.map((element) => {
                      return (
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
                      );
                    })}
                </table>
                <br />
                <button
                  className="close-modal"
                  style={{
                    background: "#9C9EFE",
                    color: "white",
                    border: "none",
                  }}
                  onClick={togglePopup}
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
