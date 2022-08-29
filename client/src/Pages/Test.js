import React, { useReducer, useState, useEffect, Component } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { TiDelete } from "react-icons/ti";
import "./Test.css";
import "./Modal.css";
import { useContext } from "react";
import { UserContext } from "../App";
import Modal from "./Modal";
import Assign from "./assign";
import "./Modal.css";
import "./status.css";
import Table from "react-bootstrap/Table";
const Test = ({ setLoggedUser }) => {
  const [modal, setModal] = useState();
  const [users, setUsers] = useState();
  const [Ticket_ID, setTicketID] = useState("");
  const [Reply, setReply] = useState();
  const user = JSON.parse(sessionStorage.getItem("user")) || undefined;
  const companyID = user.Company_Name;
  const loaded = [];
  const [datar, setData] = useState("");
  const enduser = JSON.parse(sessionStorage.getItem("user")) || undefined;
  const history = useNavigate();
  const userz = useContext(UserContext);
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  const newObj = (TID) => {
    sessionStorage.setItem("ticketID", JSON.stringify(TID));
  };

  useEffect(() => {
    const fetchUsers = () => {
      const info = {
        Company_ID: enduser.Company_ID,
        role: enduser.Role,
      };

      axios
        .post("http://localhost:5000/api/ticket/view-tickets", info)
        .then((res) => {
          setUsers(res.data);
        });
    };

    fetchUsers();
  }, [reducerValue]);

  const changeStatus = (e) => {
    const data = { Status: "Accepted", Ticket_ID };
    console.log("ID" + Ticket_ID);
    axios
      .post("http://localhost:5000/api/ticket/test-update", data)
      .then((res) => {
        if (res.status === 200) {
          history("/test");
        }
      });
    history("/test");
  };

  const addReply = (e) => {
    const data = { Reply, Ticket_ID };
    console.log("reply is:" + data.Reply);
    axios
      .post("http://localhost:5000/api/ticket/addReply", data)
      .then((res) => {
        if (res.status === 200) {
        }
      });
  };

  const settTicketID = (ID) => {
    setTicketID(ID);
  };

  const settReply = (reply) => {
    setReply(reply);
  };

  const changeStatusRej = (e) => {
    const data = { Status: "Rejected", Ticket_ID };
    console.log("ID" + Ticket_ID);
    axios
      .post("http://localhost:5000/api/ticket/test-update", data)
      .then((res) => {
        if (res.status === 400) {
        }
      });
    history("/test");
  };

  const search = (e) => {
    const info = { serachedWord: datar, Company_ID: enduser.Company_ID };
    axios.post("http://localhost:5000/api/ticket/search", info).then((res) => {
      setUsers(res.data);
    });
  };

  if (user.Role === "Admin") {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div class="input-icons">
          <i class="fa fa-search icon" />
          <input
            className="search"
            onChange={(e) => {
              setData(e.target.value);
              search();
            }}
            type={"textarea"}
            placeholder="Search.."
          ></input>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Severity</th>
              <th>Product Type</th>
              <th>Ticket Type</th>
              <th>Status </th>
              <th>Assign Ticket</th>
              <th>More</th>
            </tr>
          </thead>

          <tbody>
            {users &&
              users.map((element) => {
                const x =
                  element.Status === "Rejected"
                    ? `rejectedstatus`
                    : element.Status === "Accepted"
                    ? `accstatus`
                    : `assignedstatus`;

                return (
                  <tr>
                    <td>{element.Company_Name}</td>
                    <td>{element.Sevirity}</td>
                    <td>{element.Product_Types}</td>
                    <td>{element.Ticket_Type}</td>
                    <td className={x}>{element.Status}</td>
                    <td>
                      <Assign prop={element} />
                    </td>
                    <td>
                      <Modal prop={element} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </>
    );
  }
  if (user.Role === "Employer") {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div class="input-icons">
          <i class="fa fa-search icon" />
          <input
            className="search"
            onChange={(e) => {
              setData(e.target.value);
              search();
            }}
            type={"textarea"}
            placeholder="Search.."
          ></input>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sevirity</th>
              <th>Product Type</th>
              <th>Ticket Type</th>
              <th>Status</th>
              <th>Reply</th>
            </tr>
          </thead>

          <tbody>
            {users &&
              users.map((element) => {
                const x =
                element.Status === "Rejected"
                  ? `rejectedstatus`
                  : element.Status === "Accepted"
                  ? `accstatus`
                  : `assignedstatus`;
                return (
                  <tr>
                    <td>{element.Sevirity}</td>
                    <td>{element.Product_Types}</td>
                    <td>{element.Ticket_Type}</td>
                    <td className={x}>
                    
                      {element.Status}
                      <div className="next">
                        <div className="checkIcon">
                          <FontAwesomeIcon
                            icon={faCheckSquare}
                            size="20px"
                            onClick={() => {
                              settTicketID(element.Ticket_ID);
                              changeStatus();
                              forceUpdate();
                            }}
                          />
                        </div>
                        <div className="red">
                          <TiDelete
                            className="Red"
                            size="20px"
                            onClick={() => {
                              settTicketID(element.Ticket_ID);
                              changeStatusRej();
                              forceUpdate();
                            }}
                          ></TiDelete>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        {element.Reply}
                        <br />
                        <input
                          className="replyInput"
                          value={element.Ticket_ID.Reply}
                          id={element.Ticket_ID}
                          placeholder="Add/Edit reply.."
                          onChange={(e) => {
                            settReply(e.target.value);
                            settTicketID(element.Ticket_ID);
                          }}
                          type={"textarea"}
                        ></input>
                        <button
                          className="replyButton"
                          onClick={(e) => {
                            addReply();
                            forceUpdate();
                          }}
                        >
                          Update
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </>
    );
  }
  if (user.Role === "Customer") {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div class="input-icons">
          <i class="fa fa-search icon" />
          <input
            className="search"
            onChange={(e) => {
              setData(e.target.value);
              search();
            }}
            type={"textarea"}
            placeholder="Search.."
          ></input>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sevirity</th>
              <th>Product Type</th>
              <th>Ticket Type</th>
              <th >Status</th>
              <th>Description</th>
              <th>Reply</th>
            </tr>
          </thead>

          <tbody>
            {users &&
              users.map((element) => {
                const x =
                element.Status === "Rejected"
                  ? `rejectedstatus`
                  : element.Status === "Accepted"
                  ? `accstatus`
                  : `assignedstatus`;
                return (
                  <tr>
                    <td>{element.Sevirity}</td>
                    <td>{element.Product_Types}</td>
                    <td>{element.Ticket_Type}</td>
                    <td className={x}>{element.Status}</td>
                    <td>{element.Description}</td>
                    <td>{element.Reply}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </>
    );
  }
};
export default Test;
