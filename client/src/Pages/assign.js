import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, Component } from "react";
import axios from "axios";

export default function Admin() {
const [employees, setEmployees] = useState();
const TicketID = JSON.parse(sessionStorage.getItem("ticketID")) || undefined;

const Assign =(props)=>{
    
    // const cid=props.ID;
    const empName=props.First_Name;
    const empID=props.ID;
    const data={empName,empID,TicketID}
    axios.post("http://localhost:5000/api/service/assignTickets",data).then((res) => {
      if (res.status === 200) {
        alert("Assigned successfully!")
      }
    });
}
 
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
    <>
<div className="viewTable">

<table>
  <thead>
    <tr>
      <th>Username</th>
    </tr>
  </thead>
  {employees &&
    employees.map((element) => {
      return (
        <>
          <tbody>
            <td>{element.First_Name}</td>
            <td><button onClick={() => {
                      Assign(element);
                    }}
            style={{
            color: "Black",
            fontSize: 20,
            background: "cyan",
            border: "none"
          }}>Assign</button></td>
          </tbody>
        </>
      );
    })}
</table>

</div>


    </>
  );
}
