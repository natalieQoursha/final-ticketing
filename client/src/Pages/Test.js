import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import up from "../images/up.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { TiDelete } from "react-icons/ti";
import "./Test.css";
import { UserContext } from "../App";
import { useContext } from "react";

const Test = () => {
  const user = useContext(UserContext);
  const [users, setUsers] = useState();
  const [Status, setStatus] = useState("Accepted");
  const [Ticket_ID, setTicketID] = useState("");
  const [Reply, setReply] = useState();
  const [trig, setTrig] = useState(false);
  const history = useNavigate();
  const userss = JSON.parse(sessionStorage.getItem("user")) || undefined;
  const companyID = userss.Company_Name;
  const [toggle, setToggle] = useState(up);

  const newObj = (TID) => {
    sessionStorage.setItem("ticketID", JSON.stringify(TID));
  };

  const handleSortingByTicketTypeDES = (e) => {
    e.preventDefault();
    const info = {
      sortBasedOn: "Ticket_Type",
      companyID,
    };

    if (toggle) {
      axios
        .post("http://localhost:5000/api/ticket/sorting", info)
        .then((res) => {
          setUsers(res.data);
        });
      setToggle(!toggle);
    } else {
      axios
        .post("http://localhost:5000/api/ticket/sortingASC", info)
        .then((res) => {
          setUsers(res.data);
        });
      setToggle(!toggle);
    }
    setTrig(!trig);
  };

  const handleSortingByStatusDES = (e) => {
    e.preventDefault();
    const info = {
      sortBasedOn: "Status",
      companyID,
    };

    if (toggle) {
      axios
        .post("http://localhost:5000/api/ticket/sorting", info)
        .then((res) => {
          setUsers(res.data);
        });
      setToggle(!toggle);
    } else {
      axios
        .post("http://localhost:5000/api/ticket/sortingASC", info)
        .then((res) => {
          setUsers(res.data);
        });
      setToggle(!toggle);
    }
  };

  const handleSortingBySeverityDES = (e) => {
    e.preventDefault();
    const info = {
      sortBasedOn: "Sevirity",
      companyID,
    };

    if (toggle) {
      axios
        .post("http://localhost:5000/api/ticket/sorting", info)
        .then((res) => {
          setUsers(res.data);
        });
      setToggle(!toggle);
    } else {
      axios
        .post("http://localhost:5000/api/ticket/sortingASC", info)
        .then((res) => {
          setUsers(res.data);
        });
      setToggle(!toggle);
    }
  };

  const handleSortingByProductTypeDES = (e) => {
    e.preventDefault();
    const info = {
      sortBasedOn: "Product_Types",
      companyID,
    };

    if (toggle) {
      axios
        .post("http://localhost:5000/api/ticket/sorting", info)
        .then((res) => {
          setUsers(res.data);
        });
      setToggle(!toggle);
    } else {
      axios
        .post("http://localhost:5000/api/ticket/sortingASC", info)
        .then((res) => {
          setUsers(res.data);
        });
      setToggle(!toggle);
    }
  };

  const handleSortingByCompanyIDDES = (e) => {
    e.preventDefault();
    const info = {
      sortBasedOn: "Company_Name",
      companyID,
    };

    if (toggle) {
      axios
        .post("http://localhost:5000/api/ticket/sorting", info)
        .then((res) => {
          setUsers(res.data);
        });
      setToggle(!toggle);
    } else {
      axios
        .post("http://localhost:5000/api/ticket/sortingASC", info)
        .then((res) => {
          setUsers(res.data);
        });
      setToggle(!toggle);
    }
    setTrig(!trig);
  };

  const handleSortingByDescriptionDES = (e) => {
    e.preventDefault();
    const info = {
      sortBasedOn: "Description",
      companyID,
    };

    if (toggle) {
      axios
        .post("http://localhost:5000/api/ticket/sorting", info)
        .then((res) => {
          setUsers(res.data);
        });
      setToggle(!toggle);
    } else {
      axios
        .post("http://localhost:5000/api/ticket/sortingASC", info)
        .then((res) => {
          setUsers(res.data);
        });
      setToggle(!toggle);
    }
  };

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
          console.log("res.data",res.data)
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

  if (userss.Role === "Admin") {
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
              <th>Company Name</th>
              <th>Reply</th>
              <th>Assign Ticket</th>
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
                              setTicketID(element.Ticket_ID);
                              changeStatus();
                            }}
                          />
                        </div>
                        <div className="red">
                          <TiDelete
                            className="Red"
                            size="20px"
                            onClick={() => {
                              setTicketID(element.Ticket_ID);
                              changeStatusRej();
                            }}
                          ></TiDelete>
                        </div>
                      </div>
                    </td>
                    <td>{element.Company_Name}</td>
                    <td>{element.Reply}</td>
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
                  </>
                </tbody>
              );
            })}
        </table>
      </>
    );
  }
  if (userss.Role === "Employer") {
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
                              setTicketID(element.Ticket_ID);
                              changeStatus();
                            }}
                          />
                        </div>
                        <div className="red">
                          <TiDelete
                            className="Red"
                            size="20px"
                            onClick={() => {
                              setTicketID(element.Ticket_ID);
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
                            setTicketID(element.Ticket_ID);
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
  if (userss.Role === "Customer") {
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
                  <td>{element.Sevirity}</td>
                  <td>{element.Product_Types}</td>
                  <td>{element.Ticket_Type}</td>
                  <td>{element.Status}</td>
                  <td>{element.Reply}</td>
                </tbody>
              );
            })}
        </table>
      </>
    );
  }
};
export default Test;
