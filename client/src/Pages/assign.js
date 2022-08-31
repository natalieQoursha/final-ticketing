import axios from "axios";
import "./Modal.css";
import { AiOutlineConsoleSql } from "react-icons/ai";
import React, {
  useState,
  useEffect,
  Component,
  createContext,
  useReducer,
} from "react";
export default function Assign(props) {
  // const [users, setUsers] = useState();

  const [user, setUser] = useState();
  const [assigned, setAssigned] = useState("none");
  const [employees, setEmployees] = useState();
  sessionStorage.setItem("ticketID", JSON.stringify(props.prop.Ticket_ID));
  const TicketID = JSON.parse(sessionStorage.getItem("ticketID"));
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  };

  useEffect(() => {
    const info = { TicketID };
    const fetchAssigned = () => {
      axios
        .post("http://localhost:5000/api/service/view-assigment", info)

        .then((res) => {
          setAssigned(res.data);
        });
    };
    fetchAssigned();
  }, [reducerValue]);

  const AssignTicket = (props) => {
    const empName = props.First_Name;
    const empID = props.ID;

    const data = { empName, empID, TicketID };
    axios
      .post("http://localhost:5000/api/service/assignTickets", data)
      .then((res) => {
        setUser(res.data);
        // if (res.status === 200) {
        //   alert("Assigned successfully!");
        // } else {
        //   alert("Ticket has already been assigned");
        // }
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    const info = { TicketID };

    const fetchCompanies = () => {
      axios
        .post("http://localhost:5000/api/user/view-employees", info)

        .then((res) => {
          setEmployees(res.data);
        });
    };
    fetchCompanies();
  }, [reducerValue]);
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
              <th>
                Assigned to:
                {assigned &&
                  assigned.map((element) => {
                    return element.Employer_Name;
                  })}
              </th>

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
                                AssignTicket(element);
                                forceUpdate();
                              }}
                              style={{
                                background: "#9C9EFE",
                                color: "white",
                                border: "none",
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
