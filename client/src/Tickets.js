import React, { useEffect, useState } from "react";
import Popup from "./components/Popup";
import SearchBar from "./components/SearchBar";
import bookData from "./data.json";

function Tickets() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [users, setUsers] = useState("");

  const data = [
    {
      TicketTitle: "Add button3",
      TicketID: 123,
      Severity: 1,
      CreateBy: "customer1",
      Status: "Pending",
      date: "22-12-1999",
    },
    {
      TicketTitle: "Bug",
      TicketID: 1400,
      Severity: 2,
      CreateBy: "customer2",
      Status: "Pending",
      date: "17-3-2022",
    },
    {
      TicketTitle: "Bug",
      TicketID: 1400,
      Severity: 2,
      CreateBy: "customer2",
      Status: "Pending",
      date: "20-10-2017",
    },
  ];

  return (
    <>
      <div>
        <SearchBar placeholder="Search in table..." data={bookData} />
        <table id="myTable">
          <thead>
            <tr>
              <th>Ticket title</th>
              <th>TicketID</th>
              <th>Severity</th>
              <th>Created by</th>
              <th>Status</th>
              <th>Date Created</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.TicketTitle}</td>
                  <td>{val.TicketID}</td>
                  <td>{val.Severity}</td>
                  <td>{val.CreateBy}</td>
                  <td>{val.Status}</td>
                  <td>{val.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="Tickets">
        <main>
          <br />
          <button onClick={() => setButtonPopup(true)}>New Ticket</button>
        </main>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
      </div>
    </>
  );
}
export default Tickets;
