import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, Component } from "react";
import axios from "axios";
export default function AssignedNodesOptions() {
  const users = JSON.parse(sessionStorage.getItem("users")) || undefined;

  return (
    <>
      <div className="viewTable">
        <table>
          <thead>
            <tr>
              <th>Username</th>
            </tr>
          </thead>

          {users &&
            users.map((element) => {
              return (
                <>
                  <tbody>
                    <td>{users.First_Name}</td>
                  </tbody>
                </>
              );
            })}
        </table>
      </div>
    </>
  );
}
