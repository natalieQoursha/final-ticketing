// import Table from 'react-bootstrap/Table';
// import React, { useState, useEffect, Component } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { TiDelete } from "react-icons/ti";

// export default function TicketsAdmin()  {

//   const enduser = JSON.parse(sessionStorage.getItem("user")) || undefined;

//   const settTicketID = (ID) => {
//     setTicketID(ID);
//   };
//   const changeStatus = (e) => {
//     const data = { Status: "Accepted", Ticket_ID };
//     console.log("ID" + Ticket_ID);
//     axios
//       .post("http://localhost:5000/api/ticket/test-update", data)
//       .then((res) => {
//         if (res.status === 200) {
//         }
//       });
//   };

//   useEffect(() => {
//     const fetchUsers = () => {
//       const info = {
//         Company_ID: enduser.Company_ID,
//         role: enduser.Role,
//       };

//       axios
//         .post("http://localhost:5000/api/ticket/view-tickets", info)
//         .then((res) => {
//           setUsers(res.data);
//         });
//     };

//     fetchUsers();
//   }, []);

//   const [users, setUsers] = useState();
//   const [Ticket_ID, setTicketID] = useState("");


//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>Company Name</th>
//           <th>Severity</th>
//           <th>Product Type</th>
//           <th>Ticket Type</th>
//           <th>Status</th>
//           <th>Assign Tickets</th>
//           <th>More</th>
//         </tr>
//       </thead>
//       { users &&
//             users.map((element) => {
//               return (
//                 <tbody>
//                   <>
//                     <td>{element.Company_Name}</td>
//                     <td>{element.Severity}</td>
//                     <td>{element.Product_Types}</td>
//                     <td>{element.Ticket_Type}</td>
//                     <td>
//                       {element.Status}
//                       <div className="next">
//                         <div className="checkIcon">
//                           <FontAwesomeIcon
//                             icon={faCheckSquare}
//                             size="20px"
//                             onClick={() => {
//                               settTicketID(element.Ticket_ID);
//                               changeStatus();
//                             }}
//                           />
//                         </div>
//                         <div className="red">
//                           <TiDelete
//                             className="Red"
//                             size="20px"
//                             onClick={() => {
//                               settTicketID(element.Ticket_ID);
//                             }}
//                           ></TiDelete>
//                         </div>
//                       </div>
//                     </td>
//                     <td>
//                       <Link
//                         to="/assign"
//                         style={{
//                           color: "Black",
//                           fontSize: 15,
//                         }}
//                         onClick={() => {
//                           //newObj(element.Ticket_ID);
//                         }}
//                       >
//                         Assign
//                       </Link>
//                     </td>
//                   </>
//                 </tbody>
//               );
//             })} 
   
//     </Table>
//   );
// }

