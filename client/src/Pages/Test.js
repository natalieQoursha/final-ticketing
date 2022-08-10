import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Test = () => {
  const [users, setUsers] = useState();
  const [Status, setStatus] = useState("Accepted");
  const [Ticket_ID, getTicketID] = useState("");
  const [Reply, setReply] = useState("");
  const history = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user")) || undefined;
  const companyID = user.Company_ID;
  const role = user.Role;
  const trigger = true;

  const [toggle, setToggle] = useState(false);
  const handleSortingByDateDES = (e) => {
    e.preventDefault();
    const info = {
      sortBasedOn: "Created_ON",
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

  const handleSortingByTicketIDDES = (e) => {
    e.preventDefault();
    const info = {
      sortBasedOn: "Ticket_ID",
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
      sortBasedOn: "Company_ID",
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
    const data = { Status, Ticket_ID, Reply };

    axios
      .post("http://localhost:5000/api/ticket/test-update", data)
      .then((res) => {
        if (res.status === 200) {
        }
      });

    alert("Ticket updated successfully");
    console.log(data);
  };

  function checkCompany() {
    if (companyID == 1 && role=="Admin") {
      return (
        <div>
          <h3>Ticket control</h3>
          <br />
          <input
            required
            value={Ticket_ID}
            onChange={(e) => getTicketID(e.target.value)}
            type={"number"}
            placeholder="Ticket ID"
          ></input>

          <select
            className="Choice"
            value={Status}
            onChange={(e) => setStatus(e.target.value)}
            name="Status"
            id="Status"
            placeholder="Status"
          >
            <option className="Accepted" value="Accepted">
              Accepted
            </option>

            <option className="Rejected" value="Rejected">
              Rejected
            </option>
          </select>
          <br />
          <input
            value={Reply}
            onChange={(e) => setReply(e.target.value)}
            type={"textarea"}
            placeholder="Add reply (optional)"
          ></input>

          <button onClick={changeStatus}>Update</button>
        </div>
      );
    }
  }

  return (
    <>
      <div className="viewTable">
        <table>
          <thead>
            <tr>
              <th>
                Ticket ID
                <button onClick={handleSortingByTicketIDDES}>
                </button>
              </th>
              <th>
                Severity
                <button onClick={handleSortingBySeverityDES}>
                </button>
              </th>
              <th>
                Product Type
                <button onClick={handleSortingByProductTypeDES}>
                </button>
              </th>
              <th>
                Ticket Type
                <button onClick={handleSortingByTicketTypeDES}>
                </button>
              </th>
              <th>
                Created ON
                <button onClick={handleSortingByDateDES}>
                </button>
              </th>
              <th>
                Status
                <button onClick={handleSortingByStatusDES}>
                </button>
              </th>
              <th>
                Company ID
                <button onClick={handleSortingByCompanyIDDES}>
                </button>
              </th>
              <th>
                Description
                <button onClick={handleSortingByDescriptionDES}>
                </button>
              </th>
              <th>
                Reply
                <button onClick={handleSortingByDescriptionDES}>
                </button>
              </th>
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
                    <td>{element.Company_ID}</td>
                    <td>{element.Description}</td>
                    <td>{element.Reply}</td>
                  </tbody>
                </>
              );
            })}
        </table>
      </div>

      <br />
      {checkCompany()}
    </>
  );
};

export default Test;
