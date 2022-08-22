import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee} from "@fortawesome/free-solid-svg-icons";
import { TiDelete } from "react-icons/ti";
import "./Test.css";
<<<<<<< HEAD
import SearchBar from "../components/SearchBar";
import { FaPlusCircle } from "react-icons/fa";
import "./Modal.css";
import Modal from "./Modal";

=======
import SearchBar  from "../components/SearchBar";
import BookData from "../data.json"
import { FaPlusCircle } from "react-icons/fa";
>>>>>>> 9a1b60c4e205d1aaa71998c2049c7e9d3b9dc543
const Test = () => {
  const [modal, setModal] = useState();

  const [users, setUsers] = useState();
  const [Ticket_ID, setTicketID] = useState("");
  const [Reply, setReply] = useState();
  const history = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user")) || undefined;
  const companyID = user.Company_Name;
<<<<<<< HEAD
=======
  const loaded=[];
  const [datar, setData] = useState(" ");
>>>>>>> 9a1b60c4e205d1aaa71998c2049c7e9d3b9dc543

  const newObj = (TID) => {
    sessionStorage.setItem("ticketID", JSON.stringify(TID));
  };

<<<<<<< HEAD
=======


>>>>>>> 9a1b60c4e205d1aaa71998c2049c7e9d3b9dc543
  useEffect(() => {
    const fetchUsers = () => {
      const enduser = JSON.parse(sessionStorage.getItem("user")) || undefined;
      const info = {
        Company_ID: enduser.Company_ID,
        role: enduser.Role,
      };

      axios
        .post("http://localhost:5000/api/ticket/view-tickets", info)
        .then((res) => {
          setUsers(res.data);
          console.log("xy is: "+res.data)

        });

    };

    fetchUsers();
  }, []);

  const changeStatus = (e) => {
    const data = { Status: "Accepted", Ticket_ID };
    console.log("ID" + Ticket_ID);
    axios
      .post("http://localhost:5000/api/ticket/test-update", data)
      .then((res) => {
        if (res.status === 200) {
        }
      });
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
        if (res.status === 200) {
        }
      });
  };

  const search = (e) => {
    const info = {serachedWord:datar};
    axios
      .post("http://localhost:5000/api/ticket/search", info)
      .then((res) => {
        setUsers(res.data)
        console.log("xx is: "+res.data)
        

      });
    
  };

  if (user.Role === "Admin") {
    return (
      <>
<<<<<<< HEAD
        {/* <SearchBar placeholder="Search ..." data={users} /> */}
=======
            {/* <SearchBar placeholder="Search ..." data={BookData} /> */}

            <input
                          onChange={(e) => {
                            setData(e.target.value) ; search()
                          }}
                          type={"textarea"}
                          placeholder="Search.. "
                        ></input>

>>>>>>> 9a1b60c4e205d1aaa71998c2049c7e9d3b9dc543

        <table
          id="dtBasicExample"
          class="table table-striped table-bordered table-sm"
          cellspacing="0"
          width="100%"
        >
          <thead>
            <tr className="centered">
              <th>Company Name</th>
              <th>Severity</th>
              <th>Product Type</th>
              <th>Ticket Type</th>
              <th>Status </th>
              <th>Assign Ticket</th>
              <th>More</th>
<<<<<<< HEAD
=======
              
>>>>>>> 9a1b60c4e205d1aaa71998c2049c7e9d3b9dc543
            </tr>
          </thead>
          {users &&
            users.map((element) => {
              return (
                <tbody>
                  <>
                    <td>{element.Company_Name}</td>
                    <td>{element.Sevirity}</td>
                    <td>{element.Product_Types}</td>
                    <td>{element.Ticket_Type}</td>
                    <td>
                      {element.Status}
                      <div className="next">
                        <div className="checkIcon">
                          <FontAwesomeIcon
                            icon={faCheckSquare}
                            size="20px"
                            onClick={() => {
                              settTicketID(element.Ticket_ID);
                              changeStatus();
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
                            }}
                          ></TiDelete>
                        </div>
                      </div>
                    </td>
                    <td>
                      <Link
                        to="/assign"
                        style={{
                          color: "Black",
                          fontSize: 15,
                        }}
                        onClick={() => {
                          newObj(element.Ticket_ID);
                        }}
                      >
                        Assign
                      </Link>
                    </td>
                    <td>
<<<<<<< HEAD
                      <Modal />
=======
                      <FaPlusCircle size="20px" >
                        </FaPlusCircle>

>>>>>>> 9a1b60c4e205d1aaa71998c2049c7e9d3b9dc543
                    </td>
                  </>
                </tbody>
              );
            })}
        </table>
      </>
    );
  }
  if (user.Role === "Employer") {
    return (
      <>
        <table
          id="dtBasicExample"
          class="table table-striped table-bordered table-sm"
          cellspacing="0"
          width="100%"
        >
          <thead>
            <tr className="centered">
              <th>Sevirity</th>
              <th>Product Type</th>
              <th>Ticket Type</th>
              <th>Status</th>
              <th>Reply</th>
            </tr>
          </thead>
          {users &&
            users.map((element) => {
              return (
                <tbody>
                  <>
                    <td>{element.Sevirity}</td>
                    <td>{element.Product_Types}</td>
                    <td>{element.Ticket_Type}</td>
                    <td>
                      {element.Status}
                      <div className="next">
                        <div className="checkIcon">
                          <FontAwesomeIcon
                            icon={faCheckSquare}
                            size="20px"
                            onClick={() => {
                              settTicketID(element.Ticket_ID);
                              changeStatus();
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
                            }}
                          ></TiDelete>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <input
                          className="replyInput"
                          value={element.Ticket_ID.Reply}
                          id={element.Ticket_ID}
                          onChange={(e) => {
                            settReply(e.target.value);
                            settTicketID(element.Ticket_ID);
                          }}
                          type={"textarea"}
                          placeholder="Add a reply"
                        ></input>
                        <button
                          className="replyButton"
                          onClick={(e) => {
                            addReply();
                          }}
                        >
                          Update
                        </button>
                      </div>
                    </td>
                  </>
                </tbody>
              );
            })}
        </table>
      </>
    );
  }
  if (user.Role === "Customer") {
    return (
      <>
        <table
          id="dtBasicExample"
          class="table table-striped table-bordered table-sm"
          cellspacing="0"
          width="100%"
        >
          <thead>
            <tr className="centered">
              <th>Sevirity</th>
              <th>Product Type</th>
              <th>Ticket Type</th>
              <th>Status</th>
              <th>Reply</th>
            </tr>
          </thead>
          {users &&
            users.map((element) => {
              return (
                <tbody>
                  <>
                    <td>{element.Sevirity}</td>
                    <td>{element.Product_Types}</td>
                    <td>{element.Ticket_Type}</td>
                    <td>{element.Status}</td>
                    <td>{element.Reply}</td>
                  </>
                </tbody>
              );
            })}
        </table>
      </>
    );
  }
};
export default Test;
