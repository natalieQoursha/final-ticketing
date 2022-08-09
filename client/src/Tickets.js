import "../src/Tickets.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function Tickets() {
  const [Ticket_Type, setTicketType] = useState("");
  const [Sevirity, setSeverity] = useState("");
  const [productType, setProductType] = useState("");
  const [Description, setDescription] = useState("");
  const [Product_Types, setProduct] = useState();

  const user = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    const fetchUsers = () => {
      const enduser = JSON.parse(sessionStorage.getItem("user")) || undefined;
      const info = {
        Company_ID: enduser.Company_ID,
      };
      axios
        .post("http://localhost:5000/api/service/view-service", info)
        .then((res) => {
          setProduct(res.data);
        });
    };
    fetchUsers();
  }, []);

  const submitUser = (e) => {
    const user = JSON.parse(sessionStorage.getItem("user")) || undefined;
    e.preventDefault();
    const data = {
      Ticket_Type,
      Sevirity,
      Product_Types: productType,
      Description: Description,
      CreatedOn: new Date(),
      Company_ID: user.Company_ID,
      User_ID: user.ID,
      Status: "Submitted",
    };
    axios.post("http://localhost:5000/api/ticket/all-tickets", data, {
      headers: {
        "Content-type": "application/json",
      },
    });
    alert("Ticket submitted successfully");
  };
  return (
    <form onSubmit={submitUser}>
      {console.log("hello")}

      <div className="popup">
        <div className=".popup-inner">
          <h1>{`Welcome ${user.First_Name}, ${user.Company_Name}`}</h1>
          <br />
          <div className="alignment">
            <label for="Product_Types">Product : </label>
            <select
              onChange={(e) => setProductType(e.target.value)}
              name="Product_Types"
              id="Product_Types"
            >
              {Product_Types?.map((info) => {
                return (
                  <option value={info.Product_Name}>{info.Product_Name}</option>
                );
              })}
            </select>
          </div>
          <div className="alignment">
            <label for="Ticket_Type">Ticket type : </label>
            <select
              value={Ticket_Type}
              onChange={(e) => setTicketType(e.target.value)}
              name="Ticket_Type"
              id="Ticket_Type"
            >
              <option value="General">General</option>
              <option value="Software">Software</option>
              <option value="Hardware">Hardware</option>
              <option value="Networks">Networks</option>
            </select>
          </div>
          <div className="alignment">
            <label for="Severity">Severity : </label>
            <select
              value={Sevirity}
              onChange={(e) => setSeverity(e.target.value)}
              name="Severity"
              id="Severity"
            >
              <option value="Not Important">Not Important</option>
              <option value="Important">Important</option>
              <option value="Very Important">Very Important</option>
            </select>
          </div>

          <br />
        </div>
        <div>
          <textarea
          placeholder="Ticket Description : "
            value={Description}
            rows="5"
            cols="50"
            onChange={(e) => setDescription(e.target.value)}
            className="txta"
          ></textarea>
          <br></br>
        </div>
        <button className="submit-btn">Submit</button>
      </div>
    </form>
  );
}
export default Tickets;
