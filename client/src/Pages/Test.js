import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import up from "../images/up.png";
import up1 from "../images/up.png";
import up2 from "../images/up.png";
import up3 from "../images/up.png";
import up4 from "../images/up.png";
import up6 from "../images/up.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { TiDelete } from "react-icons/ti";
import "./Test.css";
import Button from "react-bootstrap/Button";

const Test = () => {
  //   var btnZ = document.getElementById("Z");

  // document.onkeydown = function (e) {
  //     var keyCode = e.keyCode;
  //     if(keyCode == 13) {
  //         setReply();
  //     }
  // };

  const [users, setUsers] = useState();
  const [Status, setStatus] = useState("Accepted");
  const [Ticket_ID, setTicketID] = useState("");
  const [Reply, setReply] = useState([]);
  const [trig, setTrig] = useState(false);
  const history = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user")) || undefined;
  const companyID = user.Company_ID;
  const [toggle, setToggle] = useState(up);
  const [rotate, setRotate] = useState(true);
  const [rotate1, setRotate1] = useState(true);
  const [rotate2, setRotate2] = useState(true);
  const [rotate3, setRotate3] = useState(true);
  const [rotate4, setRotate4] = useState(true);
  const [rotate5, setRotate5] = useState(true);
  const [rotate6, setRotate6] = useState(true);

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
      // setRotate(!rotate)
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

  // function checkCompany() {
  //   if (companyID == 1) {
  //     return (

  //       <div>
  //         {users && console.log(users)}
  //         <h3>Ticket control User</h3>
  //         <br />
  //         <input
  //           required
  //           value={Ticket_ID}
  //           onChange={(e) => getTicketID(e.target.value)}
  //           type={"number"}
  //           placeholder="Ticket ID"
  //         ></input>

  //         <select
  //           className="Choice"
  //           value={Status}
  //           onChange={(e) => setStatus(e.target.value)}
  //           name="Status"
  //           id="Status"
  //           placeholder="Status"
  //         >
  //           <option className="Accepted" value="Accepted">
  //             Accepted
  //           </option>

  //           <option className="Rejected" value="Rejected">
  //             Rejected
  //           </option>
  //         </select>
  //         <br />
  //         <input
  //           value={Reply}
  //           onChange={(e) => setReply(e.target.value)}
  //           type={"textarea"}
  //           placeholder="Add reply (optional)"
  //         ></input>

  //         <button onClick={changeStatus}>Update</button>
  //       </div>
  //     );
  //   }
  // }

  return (
    <>
      <div className="viewTable">
        <table>
          <thead>
            <tr>
              <th>
                Severity
                <img
                  className={rotate ? "rerotateable" : "rotateable"}
                  src={up}
                  height="20"
                  width="20"
                  onClick={(e) => {
                    handleSortingBySeverityDES(e);
                    setRotate(!rotate);
                  }}
                />
              </th>
              <th>
                Product Type
                <img
                  className={rotate1 ? "rerotateable" : "rotateable"}
                  src={up1}
                  height="20"
                  width="20"
                  onClick={(e) => {
                    handleSortingByProductTypeDES(e);
                    setRotate1(!rotate1);
                  }}
                />
              </th>
              <th>
                Ticket Type
                <img
                  className={rotate2 ? "rerotateable" : "rotateable"}
                  src={up2}
                  height="20"
                  width="20"
                  onClick={(e) => {
                    handleSortingByTicketTypeDES(e);
                    setRotate2(!rotate2);
                  }}
                />
              </th>
              <th>
                Status
                <img
                  className={rotate3 ? "rerotateable" : "rotateable"}
                  src={up3}
                  height="20"
                  width="20"
                  onClick={(e) => {
                    handleSortingByStatusDES(e);
                    setRotate3(!rotate3);
                  }}
                />
              </th>
              <th>Company Name</th>
              <th>Reply</th>
            </tr>
          </thead>

          {users &&
            users.map((element) => {
              if (user.Role === "Admin") {
                return (
                  <>
                    <tbody>
                      <td>{element.Sevirity}</td>
                      <td>{element.Product_Types}</td>
                      <td>{element.Ticket_Type}</td>
                      <td>
                        {element.Status}
                        <div className="next">
                          <div className="checkIcon">
                            <FontAwesomeIcon
                              icon={faCheckSquare}
                              size="1x"
                              onClick={() => {
                                settTicketID(element.Ticket_ID);
                                changeStatus();
                              }}
                            />
                          </div>
                          <div className="red">
                            <TiDelete
                              className="Red"
                              size="35px"
                              onClick={() => {
                                settTicketID(element.Ticket_ID);
                                changeStatusRej();
                              }}
                            >
                              {" "}
                            </TiDelete>
                          </div>
                        </div>
                      </td>

                      <td>{element.Company_Name}</td>
                      {/* <td>{element.Description}</td> */}
                      <td>{element.Reply}</td>
                    </tbody>
                  </>
                );
              }
              if (user.Role === "Employer") {
                return (
                  <>
                    <tbody>
                      <td>{element.Sevirity}</td>
                      <td>{element.Product_Types}</td>
                      <td>{element.Ticket_Type}</td>
                      <td>{element.Status}</td>
                      <td>{element.Company_Name}</td>
                      <td>
                        <div>
                          <input
                            className="replyInput"
                            value={element.Reply}
                            type={"textarea"}
                            placeholder="Add a reply"
                          ></input>
                          <Button
                            className="replyButton"
                            onClick={(e) => {
                              setReply(Reply);
                              settTicketID(element.Ticket_ID);
                              addReply(e.target.value);
                            }}
                          >
                            Update
                          </Button>
                        </div>
                      </td>
                    </tbody>
                  </>
                );
              }

              if (user.Role === "Customer") {
                return (
                  <>
                    <tbody>
                      <td>{element.Sevirity}</td>
                      <td>{element.Product_Types}</td>
                      <td>{element.Ticket_Type}</td>
                      <td>{element.Status}</td>
                      <td>{element.Company_ID}</td>
                      {/* <td>{element.Description}</td> */}
                      <td>{element.Reply}</td>
                    </tbody>
                  </>
                );
              }
            })}
        </table>
      </div>

      <br />
      {/* {checkCompany()} */}
    </>
  );
};
export default Test;
