import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../test.css";
import { useRef } from "react";

export default function Test(props) {
  const query = useRef();
  const handleSearch = (e) => {
    e.preventDefault();
    const queryVal = query.current.value;
    props.fetchMovies(queryVal.trim());
  };

  const state = {
    movies: [],
    startIndex: 0,
    progress: 0,
    startIndex: 0,
  };
  const fetchMovies = (query) => {
    fetch("http://google.com")
      .then((res) => res, JSON())
      .then((data) => {
        this.setState({ movies: data.Search, progess: 0, startIndex: 0 });
      });
  };
  const [users, setUsers] = useState();
  const [Status, setStatus] = useState("Accepted");
  const [Ticket_ID, getTicketID] = useState("");
  const [Reply, setReply] = useState("");
  const [data = {}, setData] = useState();
  const history = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user")) || undefined;
  const companyID = user.Company_ID;
  const classes = "";

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
          const dataa = JSON.stringify(res.data);
          console.log("dataa" + dataa);
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
  };

  function checkCompany() {
    if (companyID == 1) {
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
      <table>
        <thead>
          <tr>
            <th>
              <button onClick={handleSortingByTicketIDDES}>Ticket ID</button>
            </th>
            <th>
              <button onClick={handleSortingBySeverityDES}>Severity</button>
            </th>
            <th>
              <button onClick={handleSortingByProductTypeDES}>
                Product Type{" "}
              </button>
            </th>
            <th>
              <button onClick={handleSortingByTicketTypeDES}>
                Ticket Type
              </button>
            </th>
            <th>
              <button onClick={handleSortingByDateDES}>Created ON</button>
            </th>
            <th>
              <button onClick={handleSortingByStatusDES}>Status</button>
            </th>
            <th>
              <button onClick={handleSortingByCompanyIDDES}>Company ID</button>
            </th>
            <th>
              <button onClick={handleSortingByDescriptionDES}>
                Description
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
                </tbody>
              </>
            );
          })}
      </table>
      <br />
      {checkCompany()}
      <form onSubmit={handleSearch} className="search-bar">
        <textField
          className="search-bar"
          autoFocus={true}
          inputRef={query}
          id="outlined-full-width"
          label="Search sevirity"
          required="true"
          fullwidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          inputProps={{
            startAdornment: (
              <inputAdornment position="start">
                <searchIcon />
              </inputAdornment>
            ),
            endAdornment: (
              <inputAdornment position="end">
                <button className="go" variant="contained" type="submit">
                  Go
                </button>
              </inputAdornment>
            ),
            classes: {
              root: classes.root,
              focused: classes.focused,
              notchedOutline: classes.notchedOutline,
            },
          }}
          variant="outlined"
        ></textField>
      </form>
    </>
  );
}
